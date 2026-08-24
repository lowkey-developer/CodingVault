# PRD — lang/index (Programming Language Field Guide)

## Original Problem Statement
User had a plain HTML page listing 7 programming languages (Python, Java, C, C++, C#, JavaScript, TypeScript) with logos. Requested: brief details per language, a "learn basics" button, responsive clean minimal look with transition effects, extremely dynamic with advanced animations/interactivity, very detailed per-language pages, aesthetic color scheme, NO gradients.

## User Choices (confirmed)
- Dark editorial: deep ink background (#050505), warm off-white text (#F4F0EA), sharp accent (#FF3300), no gradients
- Dedicated detail page per language (React Router)
- Full interactive experience: hero, animated stats, code snippets with syntax styling, use cases, timeline, pros/cons
- Frontend-only (no backend/database)

## Architecture
- React 19 (CRA/craco) frontend-only; backend template left untouched
- React Router: `/` (home) and `/language/:slug` (detail pages)
- framer-motion (masked line reveals, scroll reveals, micro-interactions), lenis (momentum scrolling), react-fast-marquee (editorial marquee), react-syntax-highlighter (Prism, custom editorial theme), react-icons/si (monochrome language logos)
- All content in `/app/frontend/src/data/languages.js`
- Design system from `/app/design_guidelines.json`: Clash Display / Cormorant Garamond / Satoshi / JetBrains Mono; flat surfaces, 1px hairline grids, bento Tetris index grid, numbered chapters

## Implemented (July 2026)
- Terminal typing hero on detail pages: a terminal window types each language's hello-world line character by character with blinking cursor, syntax-tinted string literals, then prints the output; a "Re-run" button replays the animation on demand
- Home: kinetic hero ("SEVEN LANGUAGES, one MACHINE") with masked line-by-line reveal + mouse-parallax logo cluster; slow editorial marquee; numbered manifesto chapters; bento language index grid with hover micro-interactions and "Learn the basics" buttons; editorial footer
- 7 detail pages, each with: hero (giant masked title, rotating logo reveal, meta grid), animated stat bars (sticky), 3-paragraph story, "Learn the basics" (4 concept cards with mini code), full syntax-highlighted real-world code example, history timeline, use-case grid, honest pros/cons, prev/next language navigation
- Lenis smooth scrolling, noise texture overlay, custom scrollbar, accent selection color, responsive down to mobile, data-testids throughout

## User Personas
- Beginner choosing a first language
- Student exploring language history and trade-offs
- Curious developer comparing paradigms

## Verified
- Home renders + scroll reveals work (screenshot)
- Click "Learn the basics" on C# card → navigates to detail page (screenshot)
- Detail page: hero, stats, code block with syntax colors, timeline, pros/cons, prev/next (screenshots)
- Mobile viewport renders cleanly (screenshot)

## Backlog
- P1: Copy-to-clipboard on code blocks; deep-linkable section anchors on detail pages; navbar "Index" anchor scroll fix for cross-page navigation
- P2: Quiz per language; "which language for me" interactive picker; search/filter on index
- P3: Dark/light toggle (light editorial variant); more languages (Go, Rust, Rust, Kotlin); share buttons

## Credentials
- None required — no auth, no database.
