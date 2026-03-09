# Design Guideline

This document describes how to plan and generate new UI for the CAMEL website **before** implementation, and how to review UI **after** it's built. Following this workflow keeps the design system consistent and reduces rework.

## When to Use

- **Before building** → Generate a design guide for any new page, component, dialog, or feature.
- **After building** → Run a design review checklist to audit quality and consistency.

---

## Stack Reference

| Layer      | Technology                                                                         |
| ---------- | ---------------------------------------------------------------------------------- |
| Framework  | Next.js 15 (App Router), React 18, TypeScript                                      |
| Styling    | Tailwind CSS v4, design tokens in `src/app/globals.css`                            |
| Components | Radix UI / shadcn (`src/components/ui/`)                                           |
| i18n       | next-intl (messages in `messages/en.json`, `messages/zh.json`, `messages/ja.json`) |
| Fonts      | Inter (sans), Inconsolata (mono), Palatino (display titles)                        |
| Theming    | ThemeProvider (light/dark/system)                                                  |

---

## Mode 1: Design Guide (Pre-Implementation)

### Purpose

Produce an implementation-ready design spec for a new UI element. The guide specifies which tokens, components, and patterns to use so implementation is consistent from the start.

### Process

1. **Read** `src/app/globals.css` to understand available design tokens.
2. **Clarify scope** — What is the component/page? Where does it live? What states does it need?
3. **Generate the design guide** using the template below.

### Design Guide Template

```markdown
# Design Guide: [Component/Page Name]

## Overview

Brief description, where it appears in the app, and primary purpose.

## Layout & Structure

- Container dimensions, positioning, responsive behavior
- Relationship to parent (e.g., inside main content, inside a dialog)
- Grid/flex approach with spacing (use Tailwind spacing scale)

## Token Mapping

### Surfaces & Backgrounds

| Element   | Token / Class                                                       | Notes |
| --------- | ------------------------------------------------------------------- | ----- |
| Container | `bg-background` or `bg-bg-primary`                                  |       |
| Card      | `bg-card-background` or `bg-card-background-secondary`              |       |
| Surface   | `bg-surface-primary`, `bg-surface-secondary`, `bg-surface-tertiary` |       |

### Text & Typography

| Element        | Token / Class                   | Notes                 |
| -------------- | ------------------------------- | --------------------- |
| Display title  | `font-display-title` (Palatino) | Hero, section headers |
| Body           | `font-sans` (Inter)             | Default body text     |
| Code           | `font-mono` (Inconsolata)       | Code snippets         |
| Primary text   | `text-text-primary`             |                       |
| Secondary text | `text-text-secondary`           |                       |
| Tertiary text  | `text-text-tertiary`            |                       |

### Borders

| Element        | Token / Class                                        | Notes |
| -------------- | ---------------------------------------------------- | ----- |
| Default border | `border-border-default` or `border-border-primary`   |       |
| Focus ring     | `border-border-focus` (camel accent)                 |       |
| Status borders | `border-border-success`, `border-border-error`, etc. |       |

### Buttons

| Variant   | Token / Class                                             | Notes |
| --------- | --------------------------------------------------------- | ----- |
| Primary   | `bg-button-primary`, `text-button-primary-foreground`     |       |
| Secondary | `bg-button-secondary`, `text-button-secondary-foreground` |       |
| Link      | `text-button-link`, hover: `text-button-link-hover`       |       |
| Ghost     | Use shadcn `Button` with `variant="ghost"`                |       |

## Interaction States

For each interactive element, specify:

| Element             | Default          | Hover                    | Active/Focus | Disabled         |
| ------------------- | ---------------- | ------------------------ | ------------ | ---------------- |
| Primary button      | `button-primary` | `button-primary-hover`   | —            | opacity + cursor |
| Card (if clickable) | —                | `bg-bg-hover` or similar | —            | —                |

## Universal States

Every view should handle:

| State       | Treatment                                                                  |
| ----------- | -------------------------------------------------------------------------- |
| **Empty**   | Illustration, CTA, or message when no data                                 |
| **Loading** | Skeleton or spinner, maintain layout dimensions                            |
| **Error**   | Toast (sonner) and/or inline with `text-text-error`, `border-border-error` |
| **Success** | Toast or subtle feedback with `text-text-success`                          |

## Affordance & Signifiers

- What signals interactivity? (cursor, hover states, chevrons for expandable areas)
- What signals state? (color, icons, badges)
- Icon-only buttons: wrap in `Tooltip` for accessibility

## Theme Compatibility

- Verify in both light and dark themes
- Use semantic tokens only — no hardcoded hex colors
- Images: add `.dark:invert` or equivalent if needed for dark mode

## i18n

- All user-facing strings must use `useTranslations()` and keys from `messages/*.json`
- Add new keys for any new copy
- Research paper titles and testimonial quotes: do not translate (proper names)

## Accessibility

- Logical focus order and keyboard navigation
- Focus trap for dialogs
- ARIA labels for icon-only buttons
- Minimum touch targets (44×44px for interactive elements)

## Component Reuse

Prefer existing shadcn components:

- `Button`, `Input`, `Label`, `Textarea`
- `Dialog`, `Popover`, `DropdownMenu`, `Select`
- `Tabs`, `Tooltip`, `Switch`
- `navigation-menu` for nav patterns
```

### Guidelines for Writing Design Guides

- **Be specific** — Map every visible element to a token or Tailwind class. Avoid "use a blue color"; use `text-text-info` or `border-border-info`.
- **Cover all states** — Default, hover, active, disabled for interactive elements; empty, loading, error, success for views.
- **Reuse components** — Use shadcn/Radix components from `src/components/ui/` before creating custom ones.
- **Match existing patterns** — Reference similar components in the codebase (e.g., NavBar, Hero, partner cards).
- **Omit sections that don't apply** — Keep the guide focused.

---

## Mode 2: Design Review (Post-Implementation)

### Purpose

Audit built UI against the design system. Produce a checklist with pass/fail and specific findings.

### Process

1. **Read** `src/app/globals.css` for correct token usage.
2. **Inspect** the component/page code.
3. **Run through the checklist** below.
4. **Document findings** with severity and recommended fixes.

### Review Checklist Template

```markdown
# UI Review: [Component/Page Name]

## Summary

What was reviewed, overall impression, count of findings by severity.

## Token Usage

| #   | Check                                | Pass  | Notes |
| --- | ------------------------------------ | ----- | ----- |
| 1   | No hardcoded hex colors              | ✅/❌ |       |
| 2   | Semantic tokens used for colors      | ✅/❌ |       |
| 3   | Spacing uses Tailwind scale          | ✅/❌ |       |
| 4   | Typography uses font tokens          | ✅/❌ |       |
| 5   | Border radius uses `radius-*` tokens | ✅/❌ |       |

## Theme Compatibility

| #   | Check                            | Pass  | Notes |
| --- | -------------------------------- | ----- | ----- |
| 6   | Renders correctly in light theme | ✅/❌ |       |
| 7   | Renders correctly in dark theme  | ✅/❌ |       |
| 8   | No contrast issues               | ✅/❌ |       |

## Universal States

| #   | Check                             | Pass  | Notes |
| --- | --------------------------------- | ----- | ----- |
| 9   | Empty state has proper treatment  | ✅/❌ |       |
| 10  | Loading state (skeleton/spinner)  | ✅/❌ |       |
| 11  | Error state handled               | ✅/❌ |       |
| 12  | Success feedback where applicable | ✅/❌ |       |

## Interaction States

| #   | Check                                    | Pass  | Notes |
| --- | ---------------------------------------- | ----- | ----- |
| 13  | Buttons have hover/active/disabled       | ✅/❌ |       |
| 14  | Focus rings visible                      | ✅/❌ |       |
| 15  | Disabled elements use cursor-not-allowed | ✅/❌ |       |

## Affordance & Signifiers

| #   | Check                                            | Pass  | Notes |
| --- | ------------------------------------------------ | ----- | ----- |
| 16  | Interactive elements have hover state            | ✅/❌ |       |
| 17  | Icon-only buttons have tooltips                  | ✅/❌ |       |
| 18  | Destructive actions use error/destructive tokens | ✅/❌ |       |

## i18n

| #   | Check                                | Pass  | Notes |
| --- | ------------------------------------ | ----- | ----- |
| 19  | User-facing strings use translations | ✅/❌ |       |
| 20  | New keys added to messages/\*.json   | ✅/❌ |       |

## Accessibility

| #   | Check                                     | Pass  | Notes |
| --- | ----------------------------------------- | ----- | ----- |
| 21  | Keyboard navigation works                 | ✅/❌ |       |
| 22  | Dialogs have focus trap + Escape to close | ✅/❌ |       |
| 23  | ARIA labels on icon-only buttons          | ✅/❌ |       |
| 24  | Touch targets ≥ 44×44px                   | ✅/❌ |       |

## Findings

| #   | Category | Severity | Description              | Recommended Fix         |
| --- | -------- | -------- | ------------------------ | ----------------------- |
| 1   | Token    | P1       | Hardcoded #222 in header | Use `text-text-primary` |

**Severity:**

- **P0** — Broken in a theme, accessibility blocker, unusable
- **P1** — Incorrect tokens, visual inconsistency
- **P2** — Missing states (loading/error/empty), weak affordance
- **P3** — Minor polish (spacing, animation)
```

---

## Quick Reference: Common Tokens

| Purpose          | Token / Class                                                           |
| ---------------- | ----------------------------------------------------------------------- |
| Primary text     | `text-text-primary`                                                     |
| Secondary text   | `text-text-secondary`                                                   |
| Brand accent     | `text-text-neon`, `bg-bg-neon`, `border-border-focus` (camel)           |
| Success          | `text-text-success`, `bg-status-success-bg`, `border-border-success`    |
| Error            | `text-text-error`, `bg-status-error-bg`, `border-border-error`          |
| Warning          | `text-text-warning`, `bg-status-warning-bg`                             |
| Info             | `text-text-info`, `bg-status-info-bg`                                   |
| Card background  | `bg-card-background`, `bg-card-background-secondary`                    |
| Surface          | `bg-surface-primary`, `bg-surface-secondary`, `bg-surface-tertiary`     |
| Border           | `border-border-default`, `border-border-primary`, `border-border-focus` |
| Button primary   | `bg-button-primary`, `text-button-primary-foreground`                   |
| Button secondary | `bg-button-secondary`, `text-button-secondary-foreground`               |
| Display font     | `font-display-title`                                                    |
| Body font        | `font-sans`                                                             |
| Code font        | `font-mono`                                                             |

---

## Related Files

- Design tokens: `src/app/globals.css`
- UI components: `src/components/ui/`
- Layout: `src/app/layout.tsx`
- i18n config: `src/i18n/config.ts`, `src/i18n/request.ts`
- Project memory: `docs/MEMORY.md`
