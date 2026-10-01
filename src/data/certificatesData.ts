export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  completionDate?: string;
  summary: string;
  type: 'certificate' | 'achievement';
  categoryLabel?: string;
  badgeLabel?: string;
  accentColor: string;
  docCode: string;
  verifyUrl?: string;
  tags?: string[];
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cert-ganitank',
    title: 'Python & Generative AI Certification',
    issuer: 'Ganitank',
    summary: 'Completed a course covering Python programming fundamentals and Generative AI, including prompt engineering and understanding of large language models (LLMs).',
    type: 'certificate',
    categoryLabel: 'Certification',
    badgeLabel: 'Verified Credential',
    accentColor: 'indigo',
    docCode: 'GTK-PY-GENAI-2026',
    tags: ['AI', 'Programming', 'LLMs'],
  },
  {
    id: 'cert-anthropic',
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic Education',
    completionDate: 'March 31, 2026',
    summary: 'Completed an introduction to Model Context Protocol (MCP), a framework for connecting AI models with external tools, data and context.',
    type: 'certificate',
    categoryLabel: 'Technical Course',
    badgeLabel: 'Anthropic Certified',
    accentColor: 'amber',
    docCode: 'ANTHROPIC-MCP-EDU',
    tags: ['AI', 'Model Context Protocol', 'Architecture'],
  },
  {
    id: 'cert-infosys',
    title: 'Basics of Python',
    issuer: 'Infosys Springboard',
    completionDate: 'April 20, 2026',
    summary: 'Completed a course covering the fundamentals of Python programming.',
    type: 'certificate',
    categoryLabel: 'Course Completion',
    badgeLabel: 'Infosys Springboard',
    accentColor: 'sky',
    docCode: 'INFOSYS-SB-PY01',
    tags: ['Programming', 'Python'],
  },
];

export const ACHIEVEMENTS_DATA: CertificateItem[] = [
  {
    id: 'ach-iitb',
    title: 'Campus Ambassador — E-Cell IIT Bombay',
    issuer: 'E-Cell, IIT Bombay',
    completionDate: '29 June 2026',
    summary: 'Selected for the Campus Ambassador Program at E-Cell, IIT Bombay. The offer letter states that the role involved working from home and reporting online to the E-Cell IIT Bombay office in Mumbai.',
    type: 'achievement',
    categoryLabel: 'Opportunity / Offer',
    badgeLabel: 'Campus Ambassador Offer',
    accentColor: 'emerald',
    docCode: 'IITB-EC-CA-2026',
    tags: ['Leadership', 'Entrepreneurship'],
  },
  {
    id: 'ach-hackathon',
    title: '24-Hour Hackathon Participation',
    issuer: 'Team NYX · Cyber Defence & Digital Trust',
    summary: 'Participated in a 24-hour hackathon as part of Team NYX, working in the Cyber Defence & Digital Trust domain.',
    type: 'achievement',
    categoryLabel: 'Hackathon Participation',
    badgeLabel: 'Participant Badge',
    accentColor: 'slate',
    docCode: 'HACK-24H-NYX-CYBER',
    tags: ['Hackathon', 'Cybersecurity', 'Team NYX'],
  },
];
