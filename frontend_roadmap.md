# 🚀 Junior → Mid-Level Frontend Roadmap

This roadmap combines **project-based learning** with **JavaScript/TypeScript study**, so every concept you learn is applied directly in real code.  
Deliverables:  
- 📦 **Component Library** (npm package, tested, CI/CD, Storybook)  
- 🌐 **Next.js Altcoin Tracker (SSR + PWA)** (deployed app with API calls, charts, SEO, offline mode)  
- 📖 **JS/TS mastery** applied in features

---

# 🛣️ Overall Roadmap (Junior → Mid)

## **Project 1: React Component Library**
📦 Focus: DX, testing, accessibility, npm publishing.  
- [ ] Setup: Vite + TS strict + ESLint + Prettier + Husky.  
- [ ] Core components: Button, Link, NavBar.  
- [ ] Add Jest + RTL tests.  
- [ ] Add Storybook docs (controls, MDX stories).  
- [ ] Add Playwright for E2E + visual tests.  
- [ ] Configure GitHub Actions (lint → typecheck → test → build).  
- [ ] Add accessibility (ARIA, keyboard nav).  
- [ ] Publish to npm (semantic-release/changesets).  
- [ ] Deploy Storybook to Vercel/Netlify.  

---

## **Project 2: Next.js Altcoin Tracker (SSR + PWA)**
🌐 Focus: APIs, SSR/SSG/ISR, SEO, offline support, deploys.  
- [ ] Scaffold Next.js App Router project.  
- [ ] Fetch coin data from public API.  
- [ ] SSR: `/coin/[id]` detail page.  
- [ ] SSG/ISR: `/coins` list page.  
- [ ] Client-side caching (SWR/React Query).  
- [ ] Charts with Recharts (responsive).  
- [ ] Loading, error, retry states.  
- [ ] Add PWA support (manifest + SW with `next-pwa`).  
- [ ] Cache last API response for offline fallback.  
- [ ] Add Lighthouse audit (100 PWA score).  
- [ ] Configure CI/CD (lint, typecheck, test, deploy).  
- [ ] Deploy to Vercel with preview deploys.  
- [ ] Add SEO polish (metadata, OpenGraph).  

---

## **Transversal Skills (apply in both projects)**
- [ ] Consistent testing strategy (RTL, Jest, Playwright).  
- [ ] Performance audits (React Profiler, Lighthouse).  
- [ ] Accessibility checks (axe-core, manual tabbing).  
- [ ] CI/CD discipline (auto test → deploy).  

---

# 📖 JS/TS → Project Feature Mapping Checklist

| ✅ | **JS/TS Topic** | **Apply in Project** | **Concrete Feature** |
|----|-----------------|-----------------------|-----------------------|
| [ ] | Closures & Scope | Component Library | `useToggle` hook (`const [isOpen, toggle] = useToggle()`). |
| [ ] | Event Loop, Micro/Macro Tasks | Next.js App | Show skeletons while API waits; retry logic with `setTimeout`. |
| [ ] | Async/Await & Promises | Next.js App | API fetch with retries + error boundaries. |
| [ ] | Prototypes & `this` | Utility function | Create `PriceFormatter` as a class (contrast with FP util). |
| [ ] | Object API (map, reduce, filter) | Next.js App | Compute top 5 coins outperforming BTC. |
| [ ] | Modules & Imports | Both projects | Organize code: `api/`, `hooks/`, `utils/`. |
| [ ] | Generics in TS | Both projects | `useFetch<T>()` hook with inferred response type. |
| [ ] | Discriminated Unions | Component Library | Button props: `{type:'link', href:string}` vs `{type:'button', onClick:fn}`. |
| [ ] | Type Narrowing | Next.js App | Handle optional fields from API (e.g. `if ('priceBtc' in coin)`). |
| [ ] | Utility Types (Pick, Omit, Partial) | Both projects | Define lightweight chart props with `Pick<Coin, 'id' | 'price'>`. |
| [ ] | Interfaces vs Types | Both projects | `ChartProps` interface vs inline type for consistency. |
| [ ] | Conditional Types | Component Library | Smart `Card<T>` component with enforced props. |
| [ ] | Module Augmentation | Next.js App | Extend crypto API response types with `declare module`. |
| [ ] | Strict Null Checks | Both projects | Fallback UI when API fields are `null`. |

---

# 🧩 Design & Implementation Patterns to Use

## 1) React Component Patterns

### Compound Components
**What:** A parent component coordinates child parts via context (e.g., `<Tabs><Tabs.List/><Tabs.Trigger/><Tabs.Panel/></Tabs>`).  
**Use when:** You want flexible APIs and composition without prop drilling.  
**Example:** `Tabs`, `Accordion`, `Dropdown` in your library.

### Controlled vs Uncontrolled
**What:** Controlled components receive value via props; uncontrolled manage their own internal state.  
**Use when:** Offer both for flexibility; controlled for form libraries, uncontrolled for simple use.  
**Example:** `Input` with `value/onChange` (controlled) and `defaultValue` (uncontrolled).

### Headless Components
**What:** Logic-only components/hooks that leave rendering up to the consumer.  
**Use when:** You want full styling freedom and design-system reuse.  
**Example:** `useSelect` that exposes state & prop-getters, rendered with any HTML/CSS.

### Render Props
**What:** Pass a function as child to control rendering with internal state.  
**Use when:** You need dynamic rendering from parent-provided state without context.  
**Example:** `<Fetcher>{({data, loading}) => ...}</Fetcher>`.

### Provider / Context Module
**What:** Encapsulate shared state + actions behind a context provider and a custom hook.  
**Use when:** Many components need the same state (theme, auth, app config).  
**Example:** `ThemeProvider` + `useTheme()` for dark mode tokens.

### State Reducer Pattern
**What:** Delegate state transitions to a reducer, optionally allow users to override it.  
**Use when:** Complex component behavior needs customization.  
**Example:** `useCombobox` with `reducer(state, action)` for custom key handling.

### Prop Getters
**What:** Expose helper fns that merge required accessibility/handlers with user props.  
**Use when:** Ensure a11y & event wiring while allowing overrides.  
**Example:** `getItemProps({id})` returns `role`, `aria-selected`, `onClick`, etc.

### Polymorphic Component (`as` prop)
**What:** Let a component render different elements while keeping types safe.  
**Use when:** Buttons that can be links, divs, or router links.  
**Example:** `<Button as="a" href="/docs">Docs</Button>`.

### Portal + Focus Trap
**What:** Render overlays outside the DOM tree and keep focus inside.  
**Use when:** Modals, popovers, dropdowns.  
**Example:** `Modal` uses `createPortal` + focus trap + aria-hidden siblings.

### Error Boundaries & Suspense
**What:** Catch render errors and show fallbacks; coordinate async UI with boundaries.  
**Use when:** Network-bound or experimental features; isolate failures.  
**Example:** `<ErrorBoundary><Chart/></ErrorBoundary>`; Suspense for data.

---

## 2) Hooks & Data Patterns

- Custom Hook Factories (`usePolling({interval, enabled})`).  
- SWR / React Query (Stale-While-Revalidate).  
- Optimistic Updates.  
- Pagination / Infinite Scroll.  
- Retry with Exponential Backoff.  
- Debounce & Throttle.  

---

## 3) Next.js Patterns

- SSR vs SSG vs ISR.  
- Route Handlers as BFF (Backend for Frontend).  
- Server Components + Client Boundaries.  
- Edge Middleware.  
- Image & Metadata Optimization.  

---

## 4) PWA & Caching Patterns

- Caching Strategies (`cache-first`, `network-first`, `stale-while-revalidate`).  
- Offline Fallback.  
- Background Sync.  

---

## 5) Architecture & Code Organization

- Feature-Sliced Architecture.  
- Adapter / Mapper.  
- Repository Pattern (Lightweight).  
- Dependency Inversion (Pragmatic).  
- Presentational vs Container Components.  
- Design Tokens & Theming.  

---

## 6) Error Handling & Resilience

- Circuit Breaker UI.  
- Typed Errors & Guard Rails.  

---

## 7) Testing Patterns

- Test Pyramid (unit > integration > e2e).  
- Page Object Model (E2E).  
- Accessibility Testing (axe-core, manual checks).  

---

## 8) Security & Privacy (Frontend-Focused)

- Output Escaping & Sanitization.  
- Secrets Handling via Server Routes.  

---

### ✅ How to Use This
- Pick a pattern, add a small **“Pattern Note”** in your repo’s docs with: purpose, where you used it, and code pointers.  
- Over time you’ll build a **pattern catalog** that proves mid-level engineering maturity.



---

# 🧠 JavaScript & TypeScript Patterns (with where to use them)

Below are pragmatic JS/TS patterns you can **apply inside both projects**. Each includes **What**, **When**, and a **Project example** so you can spot and practice them.

## Core JavaScript Patterns

### Module & Revealing Module
**What:** Encapsulate private state/functions and expose a minimal public API.  
**When:** Keep utilities cohesive and avoid leaking internals.  
**Example:** `priceMath` module exposing `toBTC`, `toETH`, hiding internal constants.

### Factory
**What:** Functions that create configured objects without `new`.  
**When:** Build similar objects with slight differences.  
**Example:** `createApiClient({ baseUrl, headers })` for public vs authenticated calls.

### Strategy
**What:** Swap algorithms/behaviors behind a common interface.  
**When:** Multiple ways to compute/format something.  
**Example:** `performanceStrategy = byBTC | byETH` to compare coins against different bases.

### Adapter
**What:** Translate one API shape into another your app expects.  
**When:** 3rd‑party API responses don’t match your domain model.  
**Example:** `mapCoinApiToModel(apiCoin): Coin` used everywhere in UI.

### Facade
**What:** Simpler unified API over complex internals.  
**When:** Hide SWR/React Query intricacies behind a single call.  
**Example:** `coinRepository.getList()` wraps fetch, caching, and mapping.

### Decorator (functional flavor)
**What:** Wrap a function/object to add behavior without modifying it.  
**When:** Cross‑cutting concerns like logging, caching, memoization.  
**Example:** `withRetry(withTimeout(fetchJson))` for resilient API calls.

### Proxy
**What:** Intercept property access/calls for dynamic behavior.  
**When:** Lightweight validation/defaults for config objects.  
**Example:** Read‑through cache proxy for settings with fallback.

### Observer / Pub‑Sub
**What:** Emit events and let subscribers react.  
**When:** Cross‑feature notifications without tight coupling.  
**Example:** `eventBus.on('priceAlertFired', ...)` to toast a UI message.

### Iterator & Generator
**What:** Custom sequences/lazy streams.  
**When:** Stream chunked API pages without loading all at once.  
**Example:** `for await (const page of listCoins())` to build infinite scroll.

### Immutable Data / Structural Sharing
**What:** Do not mutate; create new structures efficiently.  
**When:** Predictable state updates and memoization.  
**Example:** Update coin lists with `map`/`filter` and stable references for React.

### Async Patterns (Browser‑safe)
**AbortController** for cancelable fetches • **Debounce/Throttle** for input/scroll • **Retry with Exponential Backoff + Jitter** for flaky networks • **Timeout + Race** to fail fast.  
**Example:** Search box uses `debounce(fn, 250)` and cancels previous fetch via `AbortController`.

---

## Error‑Handling Patterns

### Result/Either (functional error handling)
**What:** Return `{ ok: true, value } | { ok: false, error }` instead of throwing.  
**When:** You want typed, testable flows without try/catch nests.  
**Example:** `const res = await getPrices(); if (!res.ok) return showError(res.error)`.

### Exhaustive Switch with `never`
**What:** Ensure all union cases are handled; compiler warns on missing cases.  
**When:** Rendering by `status` or `variant`.  
**Example:** `switch (state.status) { case 'idle': ...; default: const _exhaustive: never = state; }`

---

## TypeScript‑Specific Patterns

### Discriminated Unions
**What:** Union types distinguished by a literal tag field.  
**When:** Model state machines and API statuses.  
**Example:** `type LoadState = { type:'idle' } | { type:'loading' } | { type:'error'; error } | { type:'ready'; data }`.

### Type Guards
**What:** Functions that narrow types at runtime.  
**When:** Handling optional/variant API fields.  
**Example:** `function hasBTC(x: any): x is { priceBtc:number } { return 'priceBtc' in x }`.

### Generics with Constraints
**What:** Reusable code with precise constraints.  
**When:** Hooks/utilities that work across data shapes.  
**Example:** `function useFetch<T extends { id: string }>(url: string): T`.

### Mapped & Utility Types
**What:** Build types from other types (`Partial`, `Pick`, `Record`, `Readonly`).  
**When:** Create lighter view models and prop types.  
**Example:** `type CoinPreview = Pick<Coin, 'id'|'symbol'|'price'>`.

### Conditional Types & Inference
**What:** Types that depend on other types (`T extends U ? X : Y`).  
**When:** Prop relationships and smart helpers.  
**Example:** `PolymorphicProps<TAs>` that derive correct `href` or `onClick` fields.

### Branded/Opaque Types
**What:** Add a hidden brand to primitives to avoid mixing them up.  
**When:** Prevent passing USD where BTC is expected.  
**Example:** `type Usd = number & { __brand: 'USD' }` vs `type Btc = number & { __brand:'BTC' }`.

### `satisfies` & Const Assertions
**What:** Keep object literals as narrow as possible and verify they meet a shape.  
**When:** Config tables, design tokens, route maps.  
**Example:** `const routes = { coins:'/coins' } as const satisfies Record<string, \`/\${string}\`>`.

### Declaration Merging / Module Augmentation
**What:** Extend libraries’ types without forking them.  
**When:** Add fields to external API response types.  
**Example:** `declare module 'crypto-api' { interface Coin { iconUrl?: string } }`.

### Type‑Safe Polymorphic `as` Prop
**What:** Component renders different elements with correct props for each.  
**When:** Design‑system Button/Link hybrid.  
**Example:** `<Button as="a" href="/...">` enforces `href` while `<Button as="button">` enforces `onClick`.

---

## Data & Domain Patterns

### DTO (Data Transfer Object)
**What:** Define strict inbound/outbound shapes separate from domain models.  
**When:** Stabilize UI against API change.  
**Example:** `CoinDTO` (raw) → `Coin` (domain) via mapper.

### Normalization
**What:** Store entities by id, derive lists with selectors.  
**When:** Avoid duplication and inconsistent updates.  
**Example:** `entities.coins[id]` + selector `selectTopByBTC(state)`.

### Caching Keys & Invalidation
**What:** Keys derived from params; invalidate precisely.  
**When:** SWR/React Query data consistency.  
**Example:** `['coins', { base:'BTC', page }]` as cache key; invalidate only affected queries.

---

## Security & Performance Patterns

### Input Validation at the Edge
**What:** Validate and coerce request params on the server route.  
**When:** Any route handler receiving query/body.  
**Example:** Zod schema in `/api/coins` ensures `base` is one of `'BTC'|'ETH'`.

### Memoization & Stable References
**What:** Cache expensive computations and keep prop identities stable.  
**When:** Large lists/charts.  
**Example:** `useMemo` for derived coin stats; `useCallback` for handlers passed to rows.

---

### ✅ How to practice them
- Add a **“Patterns”** section to each repo’s README: definition, where used, and code links.  
- Write **one test** per new pattern (e.g., a type test or a unit test) to cement the idea.

