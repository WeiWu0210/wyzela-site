# Tasks: Wyzela LLC Patent Agent Practice Website

**Input**: Design documents from `/specs/001-patent-agent-website/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: No automated tests requested - validation via Lighthouse audits and manual testing per quickstart.md

**Organization**: Tasks grouped by user story to enable independent implementation and testing

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1-US5)
- All paths relative to repository root

---

## Phase 1: Setup

**Purpose**: Project initialization and directory structure

- [x] T001 Create project directory structure: src/, src/css/, src/js/, src/assets/images/
- [x] T002 [P] Create base HTML skeleton in src/index.html with doctype, head, and empty body
- [x] T003 [P] Create CSS file with CSS custom properties (variables) in src/css/styles.css
- [x] T004 [P] Create empty JavaScript file in src/js/main.js for progressive enhancement

**Checkpoint**: Project structure ready for content development

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core layout and navigation that ALL user stories depend on

**⚠️ CRITICAL**: No user story content can be added until navigation and base layout are complete

- [x] T005 Add site metadata (title, description, viewport, charset) to head in src/index.html
- [x] T006 Create sticky header/navigation structure with logo and nav items in src/index.html
- [x] T007 [P] Style base typography (font-family, sizes, line-height) in src/css/styles.css
- [x] T008 [P] Style navigation (sticky header, nav links, mobile hamburger structure) in src/css/styles.css
- [x] T009 [P] Create mobile-first responsive breakpoints (768px, 1024px) in src/css/styles.css
- [x] T010 Create page section containers with IDs (#hero, #value, #audience, #services, #why, #process, #contact, #footer) in src/index.html

**Checkpoint**: Navigation works, page sections exist as containers, base styles applied

---

## Phase 3: User Story 1 - Service Discovery (Priority: P1) 🎯 MVP

**Goal**: Visitor understands what patent agent services are offered and Wyzela's value proposition

**Independent Test**: Visit homepage → see company name, tagline, CTA → scroll to services → see 3 service categories → scroll to audiences → see 3 target audiences

### Implementation for User Story 1

- [x] T011 [US1] Add Hero section content: company name "Wyzela LLC", tagline, subtitle in src/index.html #hero
- [x] T012 [US1] Add Value Proposition section: heading "From Invention to Defensible IP", body text, 20+ years highlight in src/index.html #value
- [x] T013 [US1] Add Services Overview section: heading, 3 service cards (Patent Agent Services, Invention Strategy, Structured Engagements) in src/index.html #services
- [x] T014 [US1] Add Who We Serve section: heading, 3 audience cards (Startups, R&D Teams, Individual Inventors) in src/index.html #audience
- [x] T015 [P] [US1] Style Hero section (full-width, centered text, prominent tagline) in src/css/styles.css
- [x] T016 [P] [US1] Style Value Proposition section (clean typography, highlighted experience) in src/css/styles.css
- [x] T017 [P] [US1] Style Services cards (3-column grid on desktop, stack on mobile) in src/css/styles.css
- [x] T018 [P] [US1] Style Audience cards (3-column grid on desktop, stack on mobile) in src/css/styles.css

**Checkpoint**: User Story 1 complete - visitor can discover services and value proposition

---

## Phase 4: User Story 2 - Book Consultation (Priority: P1)

**Goal**: Visitor can initiate contact through mailto: links from any position on page

**Independent Test**: Click any "Book a Consultation" CTA → email client opens with pre-populated recipient

### Implementation for User Story 2

- [x] T019 [US2] Add primary CTA button "Book a Confidential Consultation" with mailto: link in src/index.html #hero
- [x] T020 [US2] Add secondary CTA "Explore Services" with #services anchor link in src/index.html #hero
- [x] T021 [US2] Add Final CTA section: heading "Ready to Take the Next Step?", body text, dual CTAs in src/index.html #contact
- [x] T022 [US2] Add visible email address text below CTAs for users without email client configured in src/index.html #contact
- [x] T023 [P] [US2] Style CTA buttons (primary filled, secondary outlined, hover states) in src/css/styles.css
- [x] T024 [P] [US2] Style Final CTA section (centered, prominent buttons, contrasting background) in src/css/styles.css

**Checkpoint**: User Story 2 complete - visitor can book consultation from multiple locations

---

## Phase 5: User Story 3 - Learn Process (Priority: P2)

**Goal**: Visitor understands the 4-step engagement process before committing to consultation

**Independent Test**: Navigate to "How We Work" section → see 4 numbered steps with clear descriptions

### Implementation for User Story 3

- [x] T025 [US3] Add How We Work section: heading, 4 process steps (Initial Consultation, Invention Development, Drafting and Strategy, Ongoing Support) in src/index.html #process
- [x] T026 [P] [US3] Style process steps (numbered, vertical timeline or card layout, responsive) in src/css/styles.css

**Checkpoint**: User Story 3 complete - visitor understands the engagement process

---

## Phase 6: User Story 4 - Evaluate Credibility (Priority: P2)

**Goal**: Visitor sees trust signals and differentiators that build confidence

**Independent Test**: Navigate to "Why Wyzela" section → see 5 differentiators and quality statement

### Implementation for User Story 4

- [x] T027 [US4] Add Why Wyzela section: heading, 5 differentiator items, quality note about limiting engagements in src/index.html #why
- [x] T028 [P] [US4] Style differentiators (list or cards, checkmarks or icons, quality note emphasized) in src/css/styles.css

**Checkpoint**: User Story 4 complete - visitor can evaluate credibility

---

## Phase 7: User Story 5 - Legal Disclaimer (Priority: P3)

**Goal**: Footer displays required legal disclaimer for patent agent practice compliance

**Independent Test**: Scroll to footer → see all 4 disclaimer statements and copyright

### Implementation for User Story 5

- [x] T029 [US5] Add Footer content: company name, copyright 2026, 4 disclaimer statements in src/index.html #footer
- [x] T030 [P] [US5] Style footer (muted background, smaller text, professional appearance) in src/css/styles.css

**Checkpoint**: User Story 5 complete - legal compliance achieved

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Progressive enhancement, accessibility, and deployment readiness

- [x] T031 [P] Implement smooth scrolling CSS (scroll-behavior: smooth) in src/css/styles.css
- [x] T032 [P] Implement mobile navigation toggle (hamburger menu open/close) in src/js/main.js
- [x] T033 [P] Add aria-labels and roles for accessibility (nav, main, footer landmarks) in src/index.html
- [x] T034 [P] Verify color contrast meets WCAG AA standards in src/css/styles.css
- [x] T035 [P] Add focus states for keyboard navigation in src/css/styles.css
- [x] T036 Test responsive layout at 320px, 768px, 1024px, 1920px viewports
- [x] T037 Run Lighthouse accessibility audit and fix any issues below 90 score
- [x] T038 Validate HTML at validator.w3.org and fix any errors
- [x] T039 Test all navigation anchor links scroll to correct sections
- [ ] T040 Test all mailto: links open email client with correct recipient
- [ ] T041 Verify page weight is under 500KB total
- [ ] T042 Deploy to Cloudflare Pages and verify global accessibility

**Checkpoint**: Site complete, accessible, and deployed

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup
    ↓
Phase 2: Foundational (BLOCKS all user stories)
    ↓
┌───────────────────────────────────────────────────────┐
│  User Stories can proceed in parallel or sequentially │
│                                                       │
│  Phase 3: US1 (P1) ─┬─► Phase 4: US2 (P1)*           │
│                     │                                 │
│  Phase 5: US3 (P2) ─┤                                │
│                     │                                 │
│  Phase 6: US4 (P2) ─┤                                │
│                     │                                 │
│  Phase 7: US5 (P3) ─┘                                │
│                                                       │
│  * US2 depends on US1 Hero section existing          │
└───────────────────────────────────────────────────────┘
    ↓
Phase 8: Polish (after all user stories complete)
```

### User Story Dependencies

| User Story | Depends On | Can Start After |
|------------|------------|-----------------|
| US1 - Service Discovery | Foundational only | Phase 2 complete |
| US2 - Book Consultation | US1 (Hero section must exist for CTAs) | T011 complete |
| US3 - Learn Process | Foundational only | Phase 2 complete |
| US4 - Evaluate Credibility | Foundational only | Phase 2 complete |
| US5 - Legal Disclaimer | Foundational only | Phase 2 complete |

### Within Each Phase

- Tasks marked [P] within the same phase can run in parallel
- HTML content tasks should complete before their corresponding CSS styling tasks
- All content tasks in a user story should complete before marking story checkpoint done

### Parallel Opportunities

**Phase 1** (all parallel):
```
T002, T003, T004 can run simultaneously
```

**Phase 2** (partial parallel):
```
T007, T008, T009 can run simultaneously (all CSS)
```

**User Stories** (can run in parallel after Phase 2):
```
US3, US4, US5 can run in parallel with US1
US2 can start after T011 (Hero content) exists
```

**Phase 8** (mostly parallel):
```
T031, T032, T033, T034, T035 can run simultaneously
T036-T042 should run sequentially (validation/testing)
```

---

## Parallel Example: User Story 1

```bash
# After T011-T014 content tasks complete, launch all CSS styling in parallel:
Task: "Style Hero section in src/css/styles.css"           # T015
Task: "Style Value Proposition section in src/css/styles.css"  # T016
Task: "Style Services cards in src/css/styles.css"         # T017
Task: "Style Audience cards in src/css/styles.css"         # T018
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Service Discovery)
4. Complete Phase 4: User Story 2 (Book Consultation)
5. **STOP and VALIDATE**: Site shows services and allows consultation booking
6. Deploy MVP to Cloudflare Pages

### Incremental Delivery

| Increment | Stories Included | Value Delivered |
|-----------|------------------|-----------------|
| MVP | US1 + US2 | Visitors can discover services and book consultations |
| +1 | US3 | Visitors understand the engagement process |
| +2 | US4 | Visitors can evaluate credibility |
| +3 | US5 | Legal compliance complete |
| Final | Polish | Accessibility, performance, deployment |

### Single Developer Strategy

1. Complete Setup → Foundational
2. US1 → US2 → US3 → US4 → US5 (priority order)
3. Polish phase
4. Deploy

---

## Notes

- All tasks create content in src/ directory per plan.md structure
- Contact email placeholder: contact@wyzela.com (confirm before deployment)
- No build step required - Cloudflare Pages serves src/ directly
- CSS uses mobile-first approach per research.md
- Progressive enhancement: site works without JavaScript
- Color scheme from research.md: primary #1a365d, accent #2563eb
