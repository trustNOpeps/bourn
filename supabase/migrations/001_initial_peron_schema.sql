-- ============================================================
-- BOURN. MVP — Initial Database Schema
-- Migration: 001_initial_bourn_schema.sql
-- ============================================================

-- ============================================================
-- 1. Helper: automatically update updated_at
-- ============================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;


-- ============================================================
-- 2. Trips
-- ============================================================

create table public.trips (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null
    references auth.users(id)
    on delete cascade,

  title text not null default 'My Bali Trip',

  arrival_date date not null,
  departure_date date not null,

  traveler_count smallint not null
    check (traveler_count > 0),

  traveler_type text not null
    check (
      traveler_type in (
        'solo',
        'couple',
        'family',
        'friends',
        'group'
      )
    ),

  budget_range text
    check (
      budget_range is null
      or budget_range in (
        'under_5m',
        '5_10m',
        '10_20m',
        '20_40m',
        '40m_plus',
        'not_sure'
      )
    ),

  status text not null default 'draft'
    check (
      status in (
        'draft',
        'planned',
        'requested',
        'confirmed',
        'cancelled'
      )
    ),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  check (departure_date > arrival_date)
);

create index trips_user_id_idx
  on public.trips(user_id);


-- ============================================================
-- 3. Trip Preferences
-- ============================================================

create table public.trip_preferences (
  id uuid primary key default gen_random_uuid(),

  trip_id uuid not null unique
    references public.trips(id)
    on delete cascade,

  styles jsonb not null default '[]'::jsonb,
  areas jsonb not null default '[]'::jsonb,
  transport jsonb not null default '[]'::jsonb,
  stay_types jsonb not null default '[]'::jsonb,

  comfort_level text
    check (
      comfort_level is null
      or comfort_level in (
        'essential',
        'comfortable',
        'premium',
        'luxury'
      )
    ),

  special_requests text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index trip_preferences_trip_id_idx
  on public.trip_preferences(trip_id);


-- ============================================================
-- 4. Experiences
-- ============================================================

create table public.experiences (
  id uuid primary key default gen_random_uuid(),

  name text not null,
  slug text not null unique,

  category text not null,
  description text,

  area text,

  base_price numeric(12,2)
    check (base_price is null or base_price >= 0),

  image_url text,

  is_active boolean not null default true,

  created_at timestamptz not null default now()
);


-- ============================================================
-- 5. Trip Experiences
-- ============================================================

create table public.trip_experiences (
  id uuid primary key default gen_random_uuid(),

  trip_id uuid not null
    references public.trips(id)
    on delete cascade,

  experience_id uuid not null
    references public.experiences(id)
    on delete restrict,

  created_at timestamptz not null default now(),

  unique (trip_id, experience_id)
);

create index trip_experiences_trip_id_idx
  on public.trip_experiences(trip_id);

create index trip_experiences_experience_id_idx
  on public.trip_experiences(experience_id);


-- ============================================================
-- 6. Partners
-- ============================================================

create table public.partners (
  id uuid primary key default gen_random_uuid(),

  name text not null,

  type text not null
    check (
      type in (
        'accommodation',
        'transport',
        'experience',
        'assistance'
      )
    ),

  description text,

  contact_name text,
  contact_email text,
  contact_phone text,

  is_active boolean not null default true,

  created_at timestamptz not null default now()
);


-- ============================================================
-- 7. Services
-- ============================================================

create table public.services (
  id uuid primary key default gen_random_uuid(),

  partner_id uuid not null
    references public.partners(id)
    on delete restrict,

  name text not null,

  category text not null
    check (
      category in (
        'accommodation',
        'transport',
        'experience',
        'assistance'
      )
    ),

  description text,

  area text,

  pricing_type text not null
    check (
      pricing_type in (
        'fixed',
        'per_person',
        'per_day',
        'from_price',
        'request_quote'
      )
    ),

  base_price numeric(12,2)
    check (base_price is null or base_price >= 0),

  image_url text,

  is_active boolean not null default true,

  created_at timestamptz not null default now()
);

create index services_partner_id_idx
  on public.services(partner_id);


-- ============================================================
-- 8. Service Requests
-- ============================================================

create table public.service_requests (
  id uuid primary key default gen_random_uuid(),

  trip_id uuid not null
    references public.trips(id)
    on delete cascade,

  service_id uuid not null
    references public.services(id)
    on delete restrict,

  quantity smallint not null default 1
    check (quantity > 0),

  user_note text,

  status text not null default 'requested'
    check (
      status in (
        'requested',
        'processing',
        'offered',
        'accepted',
        'confirmed',
        'declined',
        'cancelled'
      )
    ),

  offered_price numeric(12,2)
    check (
      offered_price is null
      or offered_price >= 0
    ),

  admin_note text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index service_requests_trip_id_idx
  on public.service_requests(trip_id);

create index service_requests_service_id_idx
  on public.service_requests(service_id);


-- ============================================================
-- 9. Updated-at triggers
-- ============================================================

create trigger set_trips_updated_at
before update on public.trips
for each row
execute function public.set_updated_at();

create trigger set_trip_preferences_updated_at
before update on public.trip_preferences
for each row
execute function public.set_updated_at();

create trigger set_service_requests_updated_at
before update on public.service_requests
for each row
execute function public.set_updated_at();


-- ============================================================
-- 10. Enable Row Level Security
-- ============================================================

alter table public.trips enable row level security;
alter table public.trip_preferences enable row level security;
alter table public.experiences enable row level security;
alter table public.trip_experiences enable row level security;
alter table public.partners enable row level security;
alter table public.services enable row level security;
alter table public.service_requests enable row level security;


-- ============================================================
-- 11. Trips — traveler policies
-- ============================================================

create policy "Users can view their own trips"
on public.trips
for select
to authenticated
using (user_id = auth.uid());

create policy "Users can create their own trips"
on public.trips
for insert
to authenticated
with check (user_id = auth.uid());

create policy "Users can update their own trips"
on public.trips
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "Users can delete their own trips"
on public.trips
for delete
to authenticated
using (user_id = auth.uid());


-- ============================================================
-- 12. Trip Preferences — traveler policies
-- ============================================================

create policy "Users can view preferences for their trips"
on public.trip_preferences
for select
to authenticated
using (
  exists (
    select 1
    from public.trips
    where trips.id = trip_preferences.trip_id
      and trips.user_id = auth.uid()
  )
);

create policy "Users can create preferences for their trips"
on public.trip_preferences
for insert
to authenticated
with check (
  exists (
    select 1
    from public.trips
    where trips.id = trip_preferences.trip_id
      and trips.user_id = auth.uid()
  )
);

create policy "Users can update preferences for their trips"
on public.trip_preferences
for update
to authenticated
using (
  exists (
    select 1
    from public.trips
    where trips.id = trip_preferences.trip_id
      and trips.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.trips
    where trips.id = trip_preferences.trip_id
      and trips.user_id = auth.uid()
  )
);

create policy "Users can delete preferences for their trips"
on public.trip_preferences
for delete
to authenticated
using (
  exists (
    select 1
    from public.trips
    where trips.id = trip_preferences.trip_id
      and trips.user_id = auth.uid()
  )
);


-- ============================================================
-- 13. Experiences — public catalog
-- ============================================================

create policy "Anyone can view active experiences"
on public.experiences
for select
to anon, authenticated
using (is_active = true);


-- ============================================================
-- 14. Trip Experiences — traveler policies
-- ============================================================

create policy "Users can view their trip experiences"
on public.trip_experiences
for select
to authenticated
using (
  exists (
    select 1
    from public.trips
    where trips.id = trip_experiences.trip_id
      and trips.user_id = auth.uid()
  )
);

create policy "Users can add experiences to their trips"
on public.trip_experiences
for insert
to authenticated
with check (
  exists (
    select 1
    from public.trips
    where trips.id = trip_experiences.trip_id
      and trips.user_id = auth.uid()
  )
);

create policy "Users can remove experiences from their trips"
on public.trip_experiences
for delete
to authenticated
using (
  exists (
    select 1
    from public.trips
    where trips.id = trip_experiences.trip_id
      and trips.user_id = auth.uid()
  )
);


-- ============================================================
-- 15. Services — public catalog
-- ============================================================

create policy "Anyone can view active services"
on public.services
for select
to anon, authenticated
using (is_active = true);


-- ============================================================
-- 16. Service Requests — traveler policies
-- ============================================================

create policy "Users can view their service requests"
on public.service_requests
for select
to authenticated
using (
  exists (
    select 1
    from public.trips
    where trips.id = service_requests.trip_id
      and trips.user_id = auth.uid()
  )
);

create policy "Users can create service requests"
on public.service_requests
for insert
to authenticated
with check (
  exists (
    select 1
    from public.trips
    where trips.id = service_requests.trip_id
      and trips.user_id = auth.uid()
  )
);


create policy "Users can delete their service requests"
on public.service_requests
for delete
to authenticated
using (
  exists (
    select 1
    from public.trips
    where trips.id = service_requests.trip_id
      and trips.user_id = auth.uid()
  )
);
-- Column privileges keep internal notes and operator decisions private.
revoke all on public.service_requests from anon, authenticated;
grant select (id, trip_id, service_id, quantity, user_note, status, offered_price, created_at, updated_at) on public.service_requests to authenticated;
grant insert (trip_id, service_id, quantity, user_note) on public.service_requests to authenticated;
grant delete on public.service_requests to authenticated;
