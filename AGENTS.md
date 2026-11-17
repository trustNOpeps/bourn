<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes â€” APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` â€” verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# BOURN v2 â€” PROJECT CODING INSTRUCTIONS

## PRODUCT

BOURN. is a Bali Travel Planning & Concierge Platform.

Core promise:

"Plan, budget, and arrange your Bali trip in one place."

Positioning:

BOURN. is the coordination layer between travelers and Bali's local service ecosystem.

Core loop:

PLAN â†’ BUDGET â†’ CHOOSE â†’ ARRANGE â†’ EXPERIENCE


## IMPORTANT PRODUCT PRINCIPLE

"Everything can be planned and arranged through BOURN."

BOURN must NOT become:

- Booking.com clone
- Agoda/Traveloka clone
- generic OTA
- generic marketplace
- social network
- generic AI travel agent
- rigid survey/form


## SOURCE OF TRUTH

Before modifying code:

1. Inspect the existing implementation.
2. Read `docs/BOURN_CONTEXT.md`.
3. Read relevant Next.js documentation under `node_modules/next/dist/docs/`.
4. Understand existing behavior.
5. Preserve working functionality.

Do not invent APIs, routes, database fields, or architecture without justification.


## DEVELOPMENT PRINCIPLE

PRESERVE WHAT WORKS.

CHANGE WHAT NEEDS TO CHANGE.

BUILD ONLY WHAT MOVES BOURN FORWARD.

Prefer the smallest safe change.

Do not rewrite working functionality simply to make the UI look different.


## CURRENT PHASE

BOURN v2 UI/UX refinement.

The planner currently has working prototype functionality.

The existing planner UI is NOT the final BOURN v2 design.

Immediate visual benchmark:

`/plan` â€” WHEN

Refactor WHEN first.

Then use the approved WHEN design language as the foundation for:

- WHO
- FEEL
- WAY
- BUDGET
- ANYTHING ELSE


## DESIGN DIRECTION

BOURN v2 uses:

Premium Bali Editorial.

Principles:

- Editorial first. Interface second.
- Quiet interface. Strong moments.
- Minimal.
- Cinematic.
- Warm.
- Sophisticated.
- Generous whitespace.
- Strong typography.
- Natural Bali photography.
- Restrained motion.
- Mobile-first responsive behavior.

Avoid:

- excessive gradients
- excessive animation
- tropical clichÃ©s
- clutter
- unnecessary cards
- generic SaaS aesthetics
- rigid survey appearance


## PLANNER UX

The planner should feel like one coherent travel experience.

It must NOT feel like:

- a questionnaire
- a rigid multi-step form
- generic SaaS onboarding

Planner:

WHEN
â†’ WHO
â†’ FEEL
â†’ WAY
â†’ BUDGET
â†’ ANYTHING ELSE
â†’ THE REVEAL
â†’ YOUR BALI

FEEL should behave more like a visual moodboard.

WAY should use progressive interaction.

BUDGET should feel contextual/editorial.

ANYTHING ELSE should be quiet and conversational.

Selections should culminate in a "BOURN moment" before YOUR BALI.


## RECOMMENDATION ENGINE

FEEL â†’ AREA

BUDGET â†’ STAY LEVEL

WHO â†’ SUITABILITY

WAY â†’ TRANSPORT

DURATION â†’ ADJUSTMENT

SPECIAL ASSISTANCE â†’ SERVICE RECOMMENDATION

Area recommendation logic:

FEEL MATCH
+
WHO MATCH
+
BUDGET FIT
+
DURATION FIT

Do not expose numerical scores to users.

Show:

RECOMMENDATION
+
WHY THIS?


## COST ENGINE

Estimated Trip Cost:

Accommodation
+
Transportation
+
Experiences
+
Food
+
Additional Services

Pricing assumptions must be centralized.

Do not scatter hard-coded pricing throughout UI components.

Prices should be presented as estimates unless confirmed.


## TECH STACK

- Next.js 16
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Vercel
- GitHub


## DATABASE

Current core tables:

- trips
- trip_preferences
- experiences
- trip_experiences
- partners
- services
- service_requests

Inspect existing migrations before making database-dependent changes.

Do not invent columns.


## SECURITY

Supabase RLS must be respected.

Users must only access their own trip-related data.

Never expose:

- Supabase service-role keys
- private API keys
- internal partner data
- admin notes
- commission
- margin

Never put private credentials in client-side code.


## COMPONENTS

Prefer reusable components when repetition is meaningful.

For the planner, potential primitives include:

- PlannerShell
- PlannerHeader
- PlannerProgress
- Choice
- ChoiceGrid
- ImagePanel
- TripSummary
- PlannerCTA
- RevealSection

Before creating a component, inspect whether an existing component can be reused.

Avoid unnecessary abstraction.


## CODING WORKFLOW

For meaningful changes:

1. Inspect.
2. Understand.
3. Plan.
4. Implement.
5. Test.
6. Review the diff.

Do not modify unrelated files.

Do not claim tests passed unless they were actually run.


## TESTING

After frontend changes, run:

`npm.cmd run lint`

When appropriate, also verify:

- TypeScript
- production build
- navigation
- responsive behavior
- authentication
- database permissions

If a test cannot be run, say so.


## GIT

Use small, meaningful checkpoints.

Preferred:

`git status`

â†’ implement

â†’ test

â†’ `git diff`

â†’ review

â†’ commit

â†’ push


## CURRENT IMMEDIATE TASK

Refactor `/plan` â€” WHEN.

Before editing:

Inspect:

- `app/plan/page.tsx`
- `app/globals.css`
- existing components
- `docs/BOURN_CONTEXT.md`

Preserve:

- arrival date
- departure date
- nights calculation
- days calculation
- CTA state
- query parameters
- navigation to WHO

Do not modify the other planner pages unless required by shared components.

After implementation:

- run lint
- review diff
- verify date calculation
- verify CTA state
- verify query parameters
- verify navigation
- verify desktop
- verify mobile
- verify no horizontal overflow

