# BOURN — product and launch notes

## Product decision
Preserve PERON's planning-first model: plan, budget, choose, arrange, experience. BOURN is a coordination service, not an instant-booking marketplace. Initial audience: travellers arranging multi-service Bali trips. Brand: BOURN; tagline: Beyond destinations; warm ivory, charcoal and restrained brass; editorial typography and original travel imagery.

## MVP completed in this revision
Rebranding, working result route, deterministic recommendation and cost engine, budget warning, private session-only note handoff, exportable brief, anonymous planner access, static preview and repository documentation. The source authentication module is retained for later configured deployment.

## Commercial hypotheses — not validated market facts
Test a clearly disclosed coordination fee per confirmed trip plus separately negotiated supplier referral commissions. Do not count commissions before partners agree in writing. Separate supplier invoices, service fee, taxes and cancellation terms. Margin = collected service fees + earned commissions − payment fees − refunds − direct fulfilment cost. Contribution per hour = margin / operator hours.

Run a small pilot with 5–10 qualified enquiries. Track completed briefs, response time, quotes accepted, paid trips, fulfilment hours, contribution margin and complaints. Validate a profitable manual workflow before building a large inventory system. No revenue or customer traction is claimed.

## Before accepting paid customers
- Confirm brand/domain rights; the chosen name is not claimed exclusive.
- Configure an actual operator contact, supplier contracts and cancellation terms.
- Replace illustrative rates with dated quotes and establish a rate update owner.
- Deploy and exercise authentication, ownership checks and database RLS with separate test users.
- Add server-validated trip saving and an operator interface with role checks.
- Verify privacy notices and retention rules for customer submissions.
- Test backups, error monitoring and end-to-end fulfilment.

## Security review
The supplied migration had an incomplete update policy and exposed admin columns through table-wide privileges. The baseline migration now removes traveller update rights to service requests and uses column grants excluding admin notes. This is a source correction for a fresh deployment, not evidence that a remote database was migrated or penetration-tested. Free-text notes are kept in sessionStorage rather than appended to result URLs. The downloaded brief may contain those notes at the traveller's deliberate action.

## Scope boundary
No live inventory, payment collection, administrative service access or production database changes are included. The original source's aspirational features are not represented as finished. Existing generated travel illustrations are retained, not represented as photos of bookable partners.
