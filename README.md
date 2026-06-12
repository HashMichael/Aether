# AETHER — VR Generation III · Landing Page

A premium, dark, cinematic VR headset landing page built with Next.js 15 (App Router),
React 19, TypeScript, Tailwind CSS, Framer Motion, Three.js / React Three Fiber,
Drei, and React Three Postprocessing (Bloom + Chromatic Aberration).

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Highlights
- Interactive 3D headset hero — procedural mesh, transmissive visor, bloom, iridescence
- Mouse-reactive rotation + autonomous float
- Inline cinematic video reel with parallax scroll (`/components/sections/Film.tsx`)
- Floating iridescent torus knot showcase
- 8 sections: Hero · Marquee · Film · Features · Showcase · Tech · Press · Reserve
- Aurora / grid / noise / scanline overlays
- Three-tier preorder (Core · Pro · Atelier)

## Swap the video / headset
- The Film section uses a public Coverr.co MP4 — replace `src` in `components/sections/Film.tsx` with your own CDN-hosted file.
- The 3D headset is built from primitives in `components/three/HeadsetScene.tsx`. Swap for a real `.glb` via Drei's `useGLTF` for production.
