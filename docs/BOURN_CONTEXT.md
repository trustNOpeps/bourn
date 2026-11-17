> Historical product brief. Current implementation and limitations are documented in README.md and PRODUCT.md; legacy status statements below are not current verification.

# BOURN v2 — MASTER PROJECT CONTEXT

> This document is the persistent product and development context for BOURN.
> It is version-controlled and should be treated as a source of truth for
> product direction, UX decisions, architecture, and current development state.

---

# 1. PRODUCT

## Name

BOURN.

## Product

Bali Travel Planning & Concierge Platform.

## Core Promise

"Plan, budget, and arrange your Bali trip in one place."

## Positioning

BOURN. is not another OTA, generic travel marketplace, or booking platform.

BOURN. is the coordination layer between travelers and Bali's local service ecosystem.

The product helps travelers:

PLAN → BUDGET → CHOOSE → ARRANGE → EXPERIENCE

## Important Product Principle

"Everything can be planned and arranged through BOURN."

This does NOT mean every service must be directly bookable inside the platform.

BOURN can coordinate the request through its concierge operation and local partners.

---

# 2. PROBLEM

Travelers visiting Bali often need to use multiple platforms, websites, providers, WhatsApp conversations, maps, social media, and booking services to organize one trip.

The problem is fragmentation:

- accommodation
- airport transfer
- private driver
- car/scooter rental
- activities
- experiences
- food
- special assistance
- budgeting
- coordination

BOURN aims to simplify this fragmented process into one coordinated experience.

---

# 3. TARGET USERS

Primary users:

- Bali travelers
- first-time Bali visitors
- international travelers
- domestic travelers
- couples
- families
- friends/groups
- travelers who value convenience
- travelers who want local assistance
- travelers with special arrangement needs

MVP focus:

Travelers who want help planning and arranging their Bali trip rather than independently managing every provider.

---

# 4. VALUE PROPOSITION

BOURN simplifies the Bali travel process by combining:

- planning
- budgeting
- discovery
- recommendation
- service requests
- concierge coordination

into one platform.

Core value:

1. Convenience
2. Local access
3. Cost visibility
4. Human assistance
5. Coordinated arrangements

---

# 5. MVP

## Core MVP Modules

1. Discover
2. Trip Planner
3. Cost Estimator
4. Service Request
5. My Trip
6. Admin Concierge

## MVP Services

### Accommodation

- hotel
- villa
- resort
- boutique stay

### Transportation

- airport transfer
- private driver
- rental car
- scooter rental
- mixed transport

### Experiences

- tours
- activities
- local experiences
- cultural experiences
- wellness
- nature
- food experiences

### Concierge / Special Assistance

Examples:

- airport assistance
- visa assistance
- private security
- protocol assistance
- special occasion
- custom request

Special assistance should initially be handled as service requests.

Do not assume availability.

---

# 6. NON-GOALS

BOURN must NOT become:

- Booking.com clone
- Agoda/Traveloka clone
- generic OTA
- generic travel marketplace
- social network
- generic AI travel agent
- super app
- massive hotel inventory platform
- full automated booking engine
- full payment platform
- restaurant marketplace
- partner marketplace
- complex itinerary management platform

AI is not the core MVP.

Rules and structured recommendations come first.

AI may be introduced later.

---

# 7. OPERATING MODEL

The MVP operating model is:

Traveler
↓
BOURN
↓
Admin / Concierge
↓
Local Partner
↓
Traveler

BOURN acts as the coordination layer.

The initial partner operation is semi-manual.

There is no partner dashboard in the MVP.

Admin can coordinate with partners through existing channels such as:

- WhatsApp
- email
- phone
- other operational communication channels

---

# 8. BUSINESS MODEL

Initial monetization direction:

- partner commission
- service fee
- referral / markup where appropriate

The exact business model is not fully validated yet.

Do not hard-code business assumptions into architecture unless explicitly decided.

---

# 9. USER JOURNEY

Primary planner journey:

PLAN
↓
WHEN
↓
WHO
↓
FEEL
↓
WAY
↓
BUDGET
↓
ANYTHING ELSE
↓
THE REVEAL
↓
YOUR BALI
↓
ARRANGE THIS TRIP
↓
SERVICE REQUEST
↓
CONCIERGE COORDINATION

Alternative entry:

HELP ME PLAN

Both journeys eventually converge into a trip profile and arrangement flow.

---

# 10. PLANNER UX

## Current Planner Phases

### WHEN

Arrival and departure dates.

The system calculates:

- nights
- days

### WHO

Traveler type:

- Solo
- Couple
- Family
- Friends
- Group

Traveler count:

1–20

### FEEL

Question:

"What do you want Bali to feel like?"

Possible selections:

- Relaxed
- Adventure
- Beach
- Culture
- Food
- Wellness
- Nature
- Nightlife
- Romantic

Multiple selections are allowed.

### WAY

Combines:

- area
- stay type
- transportation

Possible area:

- Seminyak
- Canggu
- Ubud
- Uluwatu
- Nusa Dua
- Sanur
- Kuta
- Not sure

Stay:

- Villa
- Hotel
- Resort
- Boutique
- Not sure

Transport:

- Private Driver
- Rental Car
- Scooter
- Mix
- Not sure

WAY should use progressive interaction rather than feeling like a long form.

### BUDGET

Budget ranges:

- Under Rp5M
- Rp5–10M
- Rp10–20M
- Rp20–40M
- Rp40M+
- Not sure

Budget should feel contextual and editorial rather than like a financial form.

### ANYTHING ELSE

Optional assistance:

- Airport Assistance
- Visa Assistance
- Private Security
- Special Occasion
- Custom Request

Also allows optional free-text request.

Maximum custom request length:

500 characters.

---

# 11. IMPORTANT PLANNER UX DECISION

The current planner implementation is a FUNCTIONAL PROTOTYPE.

Its current UI is NOT the final BOURN v2 design.

The old repeated pattern:

LABEL
→ HEADLINE
→ PARAGRAPH
→ OPTIONS
→ SUMMARY
→ BUTTON
→ IMAGE

must NOT simply be copied into the final design.

The final planner should feel like one coherent editorial experience.

It should NOT feel like:

- a survey
- a questionnaire
- a rigid multi-step form
- a generic SaaS onboarding flow

Design principle:

"Editorial first. Interface second."

---

# 12. FINAL PLANNER DESIGN DIRECTION

Core principle:

"Quiet interface. Strong moments."

The interface should be:

- minimal
- cinematic
- warm
- sophisticated
- editorial
- spacious
- intuitive

Each phase can have a distinct visual character while sharing the same design system.

## WHEN

Minimal / cinematic.

## WHO

Human and simple.

## FEEL

Visual moodboard.

Avoid checkbox-grid appearance.

## WAY

Progressive interaction.

Potential internal sequence:

STAY
→ MOVE

without creating unnecessary separate routes.

## BUDGET

Contextual and emotional.

Numbers remain clear, but presentation should feel editorial.

## ANYTHING ELSE

Quiet and conversational.

## RESULT

Strong editorial reveal.

---

# 13. BOURN MOMENT

Before showing YOUR BALI, user choices should culminate in a short emotional reveal.

Example:

YOU WANT

A SLOWER BALI.

BEACH.
FOOD.
CULTURE.

TRAVELLING AS A COUPLE.

28 NIGHTS.

LET'S SHAPE IT.

This moment should feel like BOURN has understood the traveler.

It should not feel like a loading screen.

---

# 14. YOUR BALI

YOUR BALI is the payoff.

It should NOT look like a marketplace dashboard.

Example conceptual structure:

YOUR BALI

28 nights · Couple

A slower Bali.

CANGGU

A relaxed base for beaches, food and slow mornings.

PRIVATE DRIVER

Move when you want. Stay where you want.

BEACH · FOOD · CULTURE

Three things worth making time for.

ESTIMATED

Rp 16.2M

Based on your preferences and trip length.

ARRANGE THIS TRIP →

The actual recommendation and cost are generated from structured logic.

---

# 15. RECOMMENDATION ENGINE

Recommendation logic:

FEEL → AREA
BUDGET → STAY LEVEL
WHO → SUITABILITY
WAY → TRANSPORT
DURATION → ADJUSTMENT
SPECIAL ASSISTANCE → SERVICE RECOMMENDATION

## Area Score

Area Score consists of:

FEEL MATCH
+
WHO MATCH
+
BUDGET FIT
+
DURATION FIT

Example conceptual scoring:

Canggu:

Beach +3
Food +3
Relaxed +1
Couple +2
Budget +2
Duration +1

Total = 12

The numerical score must NEVER be exposed to users.

The user sees:

RECOMMENDATION
+
WHY THIS?

---

# 16. RECOMMENDATION EXPLANATION

Explanations should feel human.

Example:

"You chose beach, relaxed and food, and you're travelling as a couple. Canggu gives you a good balance of easy beach access, good food and slower mornings."

Avoid exposing internal scoring.

Avoid robotic recommendation language.

---

# 17. CURRENT AREA ASSUMPTIONS

These are working assumptions and should be validated later.

## Beach

- Seminyak
- Canggu
- Uluwatu
- Sanur

## Relaxed

- Sanur
- Nusa Dua
- Ubud

## Food

- Canggu
- Seminyak
- Ubud

## Nightlife

- Seminyak
- Canggu
- Kuta

## Culture

- Ubud
- Sanur

## Wellness

- Ubud
- Nusa Dua
- Sanur

## Nature

- Ubud
- Uluwatu

## Adventure

- Uluwatu
- Ubud

## Romantic

- Uluwatu
- Nusa Dua
- Ubud

These mappings are not permanent truth.

They should remain easy to modify.

---

# 18. WHO MODIFIERS

## Solo

Prioritize:

- flexibility
- value
- experiences
- easy transportation

## Couple

Prioritize:

- privacy
- romantic experiences
- villa / boutique stays
- sunset / dining experiences

## Family

Prioritize:

- comfort
- space
- reliable transportation
- family-friendly experiences

## Friends

Prioritize:

- flexible accommodation
- activities
- nightlife
- adventure
- group transport

## Group

Prioritize:

- logistics
- larger accommodation
- private transport
- coordination

---

# 19. TRANSPORTATION LOGIC

## Private Driver

Positioning:

Flexibility without driving yourself.

## Rental Car

Positioning:

Independence with self-driving responsibility.

## Scooter

Positioning:

Local mobility for confident riders.

Safety disclaimer should be included where appropriate.

## Mix

Combination of private transport and local mobility.

---

# 20. DURATION LOGIC

Working assumption:

1–3 nights
→ one main area

4–7 nights
→ one main area + day trips

8–14 nights
→ two areas

14+ nights
→ multi-area trip

These are planning assumptions and should remain configurable.

---

# 21. COST ENGINE

Core formula:

Accommodation
+
Transportation
+
Experiences
+
Food
+
Additional Services
=
Estimated Trip Cost

The result should be presented as:

"Estimated Trip Cost"

not as a guaranteed final price.

Prices can vary.

---

# 22. COST ENGINE RULE

Pricing assumptions must be centralized.

Do NOT scatter hard-coded prices across UI components.

Future pricing should use centralized:

- assumptions
- rate tables
- service pricing
- stay pricing
- transportation pricing

The cost engine should remain separate from presentation/UI.

---

# 23. TECH STACK

Frontend:

- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui where useful

Backend:

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage

Deployment:

- Vercel

Version control:

- Git
- GitHub

Maps may be introduced later.

WhatsApp/email may be used for concierge operations.

---

# 24. DATABASE

Current MVP tables:

- trips
- trip_preferences
- experiences
- trip_experiences
- partners
- services
- service_requests

Relationships:

auth.users
→ trips

trips
→ trip_preferences

trips
↔ experiences
via trip_experiences

partners
→ services

trips
→ service_requests
→ services

---

# 25. DATABASE SCOPE

Do NOT add unnecessary tables unless the product requires them.

Currently NOT required for MVP:

- partner dashboard
- payments
- invoices
- coupons
- reviews
- chat system
- itinerary_days
- booking engine
- availability engine
- AI recommendation tables
- flight booking system

---

# 26. SECURITY

Supabase Row Level Security (RLS) must be used.

Traveler users may access only their own trip-related data.

Users must not access:

- other users' trips
- internal partner information
- internal admin notes
- commission
- margin
- private operational data

Service requests must protect internal fields.

Never expose:

- Supabase service-role key
- private secrets
- internal credentials

to frontend code.

Do not claim production-ready until:

- authentication
- authorization
- RLS
- validation
- permissions
- testing
- deployment

have been verified.

---

# 27. CURRENT SERVICE REQUEST STATUS

Working status model:

DRAFT
→ REQUESTED
→ PROCESSING
→ OFFERED
→ ACCEPTED
→ CONFIRMED

Alternative outcomes:

DECLINED
CANCELLED

The exact transition authority must be enforced server-side/admin-side as the product matures.

---

# 28. AUTHENTICATION

Current MVP direction:

- email/password signup
- email/password login
- session persistence
- logout

Future:

- forgot password
- Google login
- stronger account flows

Authentication is not required to start the planner.

Saving a trip can require authentication depending on the final UX.

---

# 29. CURRENT ROUTES

Planner routes:

/plan
/plan/who
/plan/feel
/plan/way
/plan/budget
/plan/anything
/plan/result

Current status:

/plan/result is not implemented yet.

Planner data is currently passed through URL query parameters between steps.

Do not break this functional flow during UI refactoring unless there is a strong reason.

---

# 30. CURRENT FRONTEND STATE

The planner currently works as a functional prototype.

Existing functionality has been manually checked through the planner flow.

Known implementation issue:

Several planner screens currently use standard HTML <img> elements.

Next cleanup should replace these with Next.js <Image> where appropriate.

Do not change functionality unnecessarily while performing this cleanup.

---

# 31. DESIGN SYSTEM

BOURN v2 visual direction:

Premium Bali Editorial.

Core principles:

- Editorial first
- Quiet interface
- Strong moments
- Minimal
- Cinematic
- Warm
- Sophisticated
- Generous whitespace
- Strong typography
- Natural Bali photography
- Restrained motion
- Mobile-first responsive behavior

Avoid:

- excessive gradients
- excessive animation
- tropical clichés
- clutter
- unnecessary cards
- rigid survey appearance
- generic SaaS dashboard aesthetics

---

# 32. VISUAL LANGUAGE

Primary background:

Warm ivory / cream.

Secondary:

Soft sand / neutral.

Text:

Deep charcoal / dark brown.

Accent:

Restrained maroon / warm gold may be used where appropriate.

Do not use excessive colors.

Photography should provide most of the visual richness.

---

# 33. TYPOGRAPHY

Headings:

Large editorial typography.

Prefer:

- strong hierarchy
- lighter weights where appropriate
- generous line height
- deliberate whitespace

Body:

Clear, readable sans-serif.

Labels:

Small uppercase editorial labels with restrained letter spacing.

Typography should feel premium rather than corporate SaaS.

---

# 34. LAYOUT LANGUAGE

Use a combination of:

## Cinematic

Large typography + imagery.

## Editorial

Asymmetric composition + whitespace.

## Moodboard

Visual selections rather than standard form controls.

## Reveal

Large typography + structured recommendations + imagery.

Not every screen should use a split-screen layout.

Not every screen should use cards.

---

# 35. INTERACTION LANGUAGE

Interaction should feel natural.

Preferred:

- subtle opacity transitions
- gentle transforms
- selected-state feedback
- image transitions
- typography reveal
- progressive disclosure

Avoid:

- constant parallax
- excessive 3D
- bouncing controls
- scroll hijacking
- animations everywhere
- animation for decoration without purpose

Scroll-based interaction may be inspired by editorial web experiences such as Scroll-Craft, but BOURN should NOT blindly copy or depend on the Scroll-Craft implementation.

Use scroll as storytelling when it improves the experience.

---

# 36. MOBILE PRINCIPLE

Mobile is not a shrunken desktop.

Mobile should have its own composition.

Important:

- large readable type
- thumb-friendly controls
- clear hierarchy
- sticky CTA where useful
- no horizontal overflow
- progressive interaction
- short visual sections

---

# 37. HOMEPAGE

Homepage hero direction:

YOUR BALI. ARRANGED.

Subheadline:

"Plan, budget, and arrange your Bali trip — all in one place."

Primary CTA:

Plan My Trip

Secondary CTA:

Help Me Plan

Homepage scroll story:

ARRIVE
→
STAY
→
MOVE
→
EXPERIENCE
→
BUDGET
→
ARRANGE

The homepage should feel like a premium Bali editorial story rather than a SaaS landing page.

---

# 38. CURRENT IMAGE ASSETS

Homepage assets currently exist under:

public/images/home/

Assets include:

- hero.png
- arrive.png
- stay.png
- move.png
- experience.png

These should be treated as existing product assets.

Do not replace them unnecessarily.

---

# 39. DEVELOPMENT WORKFLOW

Always use:

Business Problem
→ PRD
→ User Flow
→ Data Model
→ UI/UX
→ Frontend
→ Backend/API/Auth
→ Database/Permissions
→ Testing
→ Deployment
→ Feedback
→ Iteration

Do not jump directly into large implementations.

---

# 40. CODING RULES

Before modifying code:

1. Inspect existing code.
2. Understand current functionality.
3. Identify the smallest safe change.
4. Preserve working functionality.
5. Avoid unnecessary architecture changes.
6. Avoid inventing APIs.
7. Avoid inventing database fields.
8. Avoid inventing files without reason.
9. Keep business logic separate from presentation.
10. Run appropriate tests/lint after changes.

Never claim something was tested unless it was actually tested.

---

# 41. UI REFACTORING RULE

When improving the UI:

Do NOT simply restyle the old BOURN UI.

The goal is to create BOURN v2.

Current prototype functionality should be preserved.

Presentation should be substantially improved.

The final experience should feel:

- more editorial
- more cinematic
- more intuitive
- less rigid
- less form-like
- more premium
- more distinctly BOURN

---

# 42. REUSABLE PLANNER COMPONENTS

Planned reusable components:

components/
└── planner/
    ├── PlannerShell
    ├── PlannerHeader
    ├── PlannerProgress
    ├── Choice
    ├── ChoiceGrid
    ├── ImagePanel
    ├── TripSummary
    ├── PlannerCTA
    └── RevealSection

Do not create these components unnecessarily if existing components already solve the problem.

Reuse before duplicating.

---

# 43. CURRENT DEVELOPMENT PHASE

BOURN v2 UI/UX refinement.

Immediate target:

Refactor the planner design system.

First visual benchmark:

WHEN

The WHEN screen must become the visual benchmark for the rest of the planner.

Process:

WHEN
→ review
→ test
→ approve
→ WHO
→ review
→ approve
→ FEEL
→ etc.

Do NOT redesign all planner screens simultaneously.

---

# 44. CURRENT IMMEDIATE TASK

Build the reusable planner design primitives and use them to refactor:

/plan

The first reusable primitives should include:

- PlannerShell
- PlannerHeader
- PlannerProgress
- Choice

Preserve the existing WHEN functionality:

- arrival date
- departure date
- nights calculation
- days calculation
- CTA state
- query parameter output
- navigation to WHO

After implementation:

- run lint
- verify desktop
- verify mobile
- verify date behavior
- verify navigation
- verify no overflow

---

# 45. GIT WORKFLOW

Use Git checkpoints.

Preferred workflow:

git status
→ inspect changes
→ implement
→ test
→ git diff
→ review
→ commit
→ push

Do not make giant unreviewed commits.

Create meaningful checkpoints after stable milestones.

---

# 46. SOURCE OF TRUTH

Priority order:

1. Existing source code
2. Database schema / migrations
3. This BOURN_CONTEXT.md
4. AGENTS.md
5. Project instructions
6. Conversation history

If current source code contradicts an assumption in this document:

inspect first.

Do not blindly overwrite working code.

---

# 47. DECISION DISCIPLINE

When making a significant product or architecture decision, clearly distinguish:

FACT
ASSUMPTION
DECISION
RECOMMENDATION
UNKNOWN

Do not present assumptions as confirmed business facts.

---

# 48. PRODUCT PHILOSOPHY

BOURN should feel like:

"A trusted local person who understands what you want from Bali and helps make it happen."

Not:

"A database of Bali listings."

The product should reduce complexity for the traveler.

The traveler should feel:

"I tell BOURN what I want.
BOURN helps shape it.
BOURN helps arrange it."

---

# 49. CURRENT STATUS SUMMARY

Product concept:
DEFINED

MVP:
DEFINED

Planner UX:
DEFINED

Recommendation engine:
DEFINED AT LOGIC LEVEL

Cost engine:
DEFINED AT LOGIC LEVEL

Database:
IMPLEMENTED

Supabase:
CONNECTED

Authentication:
IMPLEMENTED FOR MVP, FURTHER VERIFICATION REQUIRED

Homepage:
IMPLEMENTED

Planner functional flow:
IMPLEMENTED

Planner final UI:
NOT YET IMPLEMENTED

YOUR BALI result:
NOT YET IMPLEMENTED

Admin Concierge:
NOT YET IMPLEMENTED

Production security verification:
NOT COMPLETE

Production readiness:
NOT CLAIMED

---

# 50. IMPORTANT FINAL RULE

BOURN v2 should evolve through controlled iteration.

Do not throw away working functionality simply to make the UI look different.

Do not preserve old design decisions merely because they already exist.

Preserve:

- product identity
- working functionality
- architecture that is still appropriate
- data model unless change is justified

Improve:

- UX
- visual hierarchy
- interaction
- storytelling
- responsiveness
- maintainability
- clarity

Core principle:

PRESERVE WHAT WORKS.
CHANGE WHAT NEEDS TO CHANGE.
BUILD ONLY WHAT MOVES BOURN FORWARD.