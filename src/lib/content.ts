import { PersonalInfo, Experience, Project, SkillsData } from '@/types';

// Import JSON data
import personalData from '../../content/personal.json';
import experienceData from '../../content/experience.json';
import projectsData from '../../content/projects.json';
import skillsData from '../../content/skills.json';

export const personal: PersonalInfo = personalData as PersonalInfo;
export const experience: Experience[] = experienceData as Experience[];
export const projects: Project[] = projectsData as Project[];
export const skills: SkillsData = skillsData as SkillsData;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return projects.slice(0, count);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter(project => project.tags.includes(tag));
}

export function getCurrentExperience(): Experience[] {
  return experience.filter(exp => exp.type === 'Current');
}

export function getPastExperience(): Experience[] {
  return experience.filter(exp => exp.type !== 'Current');
}

export function getSkillsByCategory(categoryName: string) {
  const category = skills.categories.find(cat => cat.name === categoryName);
  return category?.skills || [];
}

export function getAllSkills() {
  return skills.categories.flatMap(category => category.skills);
}
