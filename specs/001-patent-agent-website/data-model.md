# Data Model: Wyzela LLC Patent Agent Practice Website

**Date**: 2026-02-02
**Feature**: 001-patent-agent-website

## Overview

This document defines the content structure for the Wyzela LLC website. Since this is a static site with no database, the "data model" represents the content entities and their structure as they appear in the HTML.

## Content Entities

### 1. Site Metadata

| Field | Type | Required | Value |
|-------|------|----------|-------|
| title | string | Yes | "Wyzela LLC - Boutique Patent Agent Practice" |
| description | string | Yes | Meta description for SEO |
| favicon | file | No | Optional favicon if provided |
| og:image | file | No | Social sharing image if provided |

### 2. Navigation

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| logo | string/image | Yes | "Wyzela LLC" text or logo image |
| items | array | Yes | Navigation menu items |

**Navigation Items**:
| Label | Anchor | Order |
|-------|--------|-------|
| Services | #services | 1 |
| Who We Serve | #audience | 2 |
| Why Wyzela | #why | 3 |
| How We Work | #process | 4 |
| Contact | #contact | 5 |

### 3. Hero Section

| Field | Type | Required | Content |
|-------|------|----------|---------|
| company_name | string | Yes | "Wyzela LLC" |
| tagline | string | Yes | "Boutique Patent Agent Practice for Serious Innovators" |
| subtitle | string | Yes | Premium patent drafting and invention strategy services description |
| primary_cta | object | Yes | { label: "Book a Confidential Consultation", href: "mailto:..." } |
| secondary_cta | object | Yes | { label: "Explore Services", href: "#services" } |

### 4. Value Proposition Section

| Field | Type | Required | Content |
|-------|------|----------|---------|
| heading | string | Yes | "From Invention to Defensible IP" |
| body | string | Yes | Description of transforming ideas into patent applications |
| highlight | string | Yes | "20+ years of engineering experience" |

### 5. Target Audiences Section (Who We Serve)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| heading | string | Yes | "Who We Serve" |
| audiences | array[3] | Yes | Array of audience objects |

**Audience Object**:
| Field | Type | Content |
|-------|------|---------|
| title | string | Audience segment name |
| description | string | Value proposition for this segment |

**Audiences**:
1. **Startups and Technical Founders**: Strategic patent support aligned with product development and fundraising milestones.
2. **Engineering and R&D Teams**: Invention development, portfolio planning, and high-quality patent drafting support.
3. **Individual Inventors**: Structured, fixed-scope entry services designed to help resource-constrained innovators take meaningful first steps toward protecting their ideas.

### 6. Services Section (Services Overview)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| heading | string | Yes | "Services Overview" |
| services | array[3] | Yes | Array of service objects |

**Service Object**:
| Field | Type | Content |
|-------|------|---------|
| title | string | Service category name |
| description | string | Service details |

**Services**:
1. **Patent Agent Services**: Professional drafting support for provisional, non-provisional, and PCT patent applications, with a focus on technical clarity and defensible claim scope.
2. **Invention and Innovation Strategy**: Invention shaping, claim-scope brainstorming, and IP strategy aligned with product and technology roadmaps.
3. **Structured Engagements**: Clear scopes, defined deliverables, and professional workflows designed to reduce friction and improve outcomes.

### 7. Differentiators Section (Why Wyzela)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| heading | string | Yes | "Why Wyzela" |
| differentiators | array[5] | Yes | Array of differentiator strings |
| quality_note | string | Yes | Statement about limiting engagements |

**Differentiators**:
1. Boutique practice offering individualized attention.
2. Led by a registered U.S. Patent Agent.
3. Over 20 years of engineering and technology experience.
4. Clear, structured process for invention disclosure and drafting.
5. Trusted by founders, engineers, and independent inventors.

**Quality Note**: "We intentionally limit client engagements to maintain a high standard of quality and personalized service."

### 8. Process Section (How We Work)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| heading | string | Yes | "How We Work" |
| steps | array[4] | Yes | Array of process step objects |

**Step Object**:
| Field | Type | Content |
|-------|------|---------|
| number | int | Step number (1-4) |
| title | string | Step name |
| description | string | What happens in this step |

**Steps**:
1. **Initial Consultation**: Confidential discussion of the invention, goals, and timeline.
2. **Invention Development**: Structured refinement of technical concepts and identification of patentable aspects.
3. **Drafting and Strategy**: Professional preparation of patent specifications aligned with product and IP goals.
4. **Ongoing Support**: Continued guidance as technology and IP strategy evolve.

### 9. Final CTA Section

| Field | Type | Required | Content |
|-------|------|----------|---------|
| heading | string | Yes | "Ready to Take the Next Step?" |
| body | string | Yes | "Schedule a confidential consultation..." |
| primary_cta | object | Yes | { label: "Book a Consultation", href: "mailto:..." } |
| secondary_cta | object | Yes | { label: "Contact Wyzela LLC", href: "mailto:..." } |

### 10. Footer

| Field | Type | Required | Content |
|-------|------|----------|---------|
| company_name | string | Yes | "Wyzela LLC" |
| copyright | string | Yes | "© 2026 Wyzela LLC. All rights reserved." |
| disclaimer | string | Yes | Legal disclaimer text (4 statements from FR-011) |

**Disclaimer Content**:
- Wyzela LLC provides patent agent and technology consulting services.
- This website is for informational purposes only and does not constitute legal advice.
- No professional relationship is formed by submitting an inquiry or visiting this site.
- Engagements are subject to a written agreement.

## Content Validation Rules

| Rule | Applies To | Validation |
|------|------------|------------|
| Required fields | All sections | Must not be empty |
| CTA links | All mailto: links | Must be valid email format |
| Section order | Page layout | Must follow spec order: Hero → Value Prop → Audiences → Services → Why → Process → CTA → Footer |
| Anchor IDs | Navigation links | Must match section IDs |

## Content Dependencies

| Item | Status | Notes |
|------|--------|-------|
| Company Logo | Optional | Use text "Wyzela LLC" if not provided |
| Contact Email | Required | Placeholder: contact@wyzela.com (to be confirmed) |
| Brand Colors | Optional | Default professional blue scheme defined in research.md |

## HTML Section ID Mapping

| Section | ID | Anchor Link |
|---------|----|-----------|
| Hero | hero | #hero |
| Value Proposition | value | #value |
| Who We Serve | audience | #audience |
| Services Overview | services | #services |
| Why Wyzela | why | #why |
| How We Work | process | #process |
| Final CTA | contact | #contact |
| Footer | footer | N/A |
