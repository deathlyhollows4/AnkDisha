# AnkDisha

A responsive, editorial website based on the supplied Storm research brief. Deep ink, ivory, antique gold, and a custom photographic armillary sphere introduce a practical astrology and numerology planning service.

## What works
- Three goal-based sample calendars, four selectable weeks, synchronized date highlights and a real ICS export.
- Local birth-number and life-path calculation with visible arithmetic, input validation and a downloadable text snapshot.
- Responsive navigation, native accessible report/policy dialogs, FAQs, keyboard interaction, reduced-motion fallbacks.
- The 499, 699 and 1499 INR offers are explicitly coming soon. No checkout or personal-data transmission is implemented, as requested.

## Develop
Use the pinned dependencies and pnpm lockfile. `pnpm install`, then `pnpm dev`. Run `pnpm build` for the static export in `dist/client`. `.openai/hosting.json` identifies the existing Site and that public output directory.

Windows ARM notes: `node-linker=hoisted` is used for local module resolution. The unused Workerd server emulator does not support this architecture, so its install script is disabled. The static project does not require it. The installed Node runtime occasionally reports a libuv assertion during Vinext CLI shutdown after successful compilation; the delivered output was produced by a completed exit-zero build and then tested independently as static files.

## Design record
Creative direction was explicitly delegated by the user. Grammar: a celestial reading desk, with an editorial cover, a quiet premise, the live sample as the peak, practical report comparisons, and a useful calculator ending. Signature: choose a focus, turn dates into weekly planning prompts, and carry that same focus into a calendar export. The local fingerprint registry was empty.

Journey and intended feelings: curiosity, trust, agency, confidence, calm. First visual review felt intriguing but overly plain because shared CSS displaced the chosen typefaces. Fixing stylesheet order restored the editorial character. The bright interactive calendar is the main change in visual ground; the final snapshot holds useful content instead of fading away.

Motion uses independent photographic, orbital and foreground planes. The calendar advances by scroll on tall desktop viewports and by explicit controls everywhere. Explicit selection takes precedence over automatic scroll changes. No video, pointer lock or WebGL is required.

Hero asset: `public/images/armillary.webp`, optimized from a built-in ImageGen still. Prompt: realistic studio photograph of an intricate antique brass armillary sphere suspended without a pedestal, central matte ivory globe, complete circular silhouette, fine patina, restrained gold highlights, dark midnight background, no readable text or extra objects. Original retained outside this site in `asset-staging`.

## Verification
The final static package passed browser checks at 1440x1000, 390x844, 360x640 and reduced motion. Tested all sections for horizontal overflow; mobile menus, goal/week/date controls, named dialogs and Escape; blank/future date errors; 17 August 2004 giving birth number 8 and life path 4; result focus; both actual download contents; disabled form fields without JavaScript; and browser console errors. TypeScript `--noEmit` passed. Pointer-state screenshots differ in actual pixels.

ScrollCraft supplied six samples per act. Contact sheets for desktop, mobile and reduced motion were visually reviewed. Its global custom-state detector flags some ordinary flowing content because it includes the offscreen calendar state. These flags are retained in the QA output, not relabeled as a clean harness run. The final standalone functional checks and section screenshots verify the rendered content. No physical iPhone/Android device was tested. The text-size check is supplementary, not a complete accessibility certification.

Evidence and full brief are in `../scrollcraft/builds/ankdisha/`. The research document and intermediate files are outside the deployed source. No client counts, testimonials, expert identities, payment success, or fulfilled orders are fabricated.
