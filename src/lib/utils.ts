import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  const [start, end] = date.split(' - ');
  if (!end) return start;
  return `${start} - ${end}`;
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function getSkillLevelColor(level: string): string {
  switch (level) {
    case 'Advanced':
      return 'bg-phthalo-green text-white';
    case 'Intermediate':
      return 'bg-pewter-blue text-slate-deep';
    case 'Basic':
      return 'bg-slate-deep/20 text-slate-deep';
    default:
      return 'bg-muted text-muted-foreground';
  }
}

export function getExperienceTypeColor(type: string): string {
  switch (type) {
    case 'Current':
      return 'bg-phthalo-green text-white';
    case 'Research':
      return 'bg-pewter-blue text-slate-deep';
    case 'Volunteer':
      return 'bg-slate-deep/20 text-slate-deep';
    case 'Internship':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  canonical
}: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}) {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical,
    },
  };
}
