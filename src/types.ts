export interface Project {
  id: string;
  projectNumber: string;
  category: string;
  statusBadge: string;
  title: string;
  subtitle?: string;
  schematicType: 'hash-chain' | 'context-studio' | 'carbon-tractor' | 'agent-workflow' | 'pipeline-automation';
  description: string;
  domainOrScopeLabel: string;
  domainOrScopeValue: string;
  fullDetails: {
    overview: string;
    keyFeatures: string[];
    technicalArchitecture: string;
    techStack: string[];
    liveDemoType?: 'carbon-calc' | 'hash-verify' | 'context-switch';
  };
}

export interface SkillCategory {
  title: string;
  iconName: 'code' | 'layout' | 'sparkles' | 'agent' | 'sync';
  description: string;
}

export interface ProgrammingLanguage {
  number: string;
  name: string;
  focus: string;
}

export interface DirectChannel {
  name: string;
  value: string;
  actionText?: string;
  href?: string;
}
