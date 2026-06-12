import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Film } from '@/components/sections/Film';
import { Features } from '@/components/sections/Features';
import { Showcase } from '@/components/sections/Showcase';
import { Tech } from '@/components/sections/Tech';
import { Reviews } from '@/components/sections/Reviews';
import { Preorder } from '@/components/sections/Preorder';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Film />
      <Features />
      <Showcase />
      <Tech />
      <Reviews />
      <Preorder />
    </>
  );
}
