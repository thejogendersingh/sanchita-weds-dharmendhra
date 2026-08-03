# Project-Scoped AI Agent Coding Rules

Please adhere to these quality-control and structural rules strictly for all code changes in this workspace:

## 1. HTML Tag Integrity & Syntax Safety
- **Strict Closure Checks**: Never leave malformed, cut-off, or incomplete HTML elements (such as loose `</` or unclosed wrappers).
- **DOM Balance**: Every opened container (`<div>`, `<section>`, `<header>`) must be closed correctly in the correct hierarchical order.
- **Verification Routine**: After any replacement edit, review the affected lines (at least 10 lines above and below) to verify all elements are closed and nested properly.

## 2. No Accidental Code Deletions
- When reordering, editing, or simplifying sections, verify that you do not discard subsequent scripts, modals, or unrelated sections. 
- Ensure that the footer, scripts, and helper functions remain fully intact.

## 3. High-Fidelity Responsive Design
- Ensure mobile layout widths use responsive flex behaviors (`flex-col`, width scales) to prevent horizontal scrolling or clipped cards.
- Keep typography sizes compact on small screens to ensure content doesn't feel bloated or overly wordy.

## 4. Cache-Buster Configs
- Ensure version tags (e.g. `?v=2.6`) are kept on stylesheet and script URLs inside `index.html` to guarantee the browser renders the absolute latest style sheets and scripts.
