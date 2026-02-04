import { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { SystemsUX } from '@/components/sections/systems-ux';
import { personal } from '@/lib/content';

export const metadata: Metadata = {
  title: `${personal.name} - ${personal.title}`,
  description: 'Product-minded engineer building inspectable AI systems and calm UX.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SystemsUX />
    </>
  );
}
