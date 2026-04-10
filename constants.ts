import { NavItem, ServiceItem, MethodologyStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Methodology', id: 'methodology' },
  { label: 'Services', id: 'services' },
  { label: 'Lab Intelligence', id: 'ai-lab' },
  { label: 'Contact', id: 'contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'System Design & R&D',
    description: 'We partner with manufacturers to engineer lifting and deposit systems specifically calibrated for high-melanin fiber structures, reducing formulation guesswork.',
    tags: ['Product Development', 'Chemical Analysis', 'Stress Testing']
  },
  {
    title: 'Advanced Education',
    description: 'Mastery certification for elite stylists focusing on the Liquid Hair Methodology. Move beyond "watch and learn" to deep chemical comprehension.',
    tags: ['Certification', 'Workshops', 'Digital Library']
  },
  {
    title: 'Salon Consultancy',
    description: 'Operational integration of science-based color protocols to increase ticket value, retention, and result consistency across large teams.',
    tags: ['Protocol Implementation', 'Staff Training', 'Efficiency Audit']
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'Melanin Profiling',
    content: 'Quantifying the density of Eumelanin and Pheomelanin to calculate precise oxidation requirements without compromising the cuticle layer.'
  },
  {
    number: '02',
    title: 'Controlled Lift',
    content: 'Utilizing slow-oxidizing agents that maintain structural integrity while effectively dispersing pigment clusters in resistant Asian hair types.'
  },
  {
    number: '03',
    title: 'Liquid Hair Restoration',
    content: 'Our proprietary post-process system that replenishes lost lipids and aligns the cuticle for a glass-like, hydrophobic finish.'
  }
];

export const AI_SYSTEM_INSTRUCTION = `You are the lead chemical engineer and educator at Kromah Lab. 
Your tone is authoritative, clinical, precise, yet sophisticated and helpful. 
You specialize in hair chemistry, specifically focusing on Asian and dark, resistant hair types (high melanin).
You advocate for the "Liquid Hair Methodology" which prioritizes fiber integrity, controlled lifting, and scientific precision over speed.
Answer questions about hair color chemistry, formulation challenges for dark hair, and the science of hair damage.
Keep answers concise, using technical terminology where appropriate but explaining it clearly. 
Do not use emojis. Use bullet points for clarity if needed.`;