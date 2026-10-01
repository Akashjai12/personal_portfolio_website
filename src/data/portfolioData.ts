import { Project, SkillCategory, ProgrammingLanguage, DirectChannel } from '../types';

export const PERSONAL_INFO = {
  name: "Akash Jaiswal",
  kicker: "BE IT STUDENT · DEVELOPER · AI ENTHUSIAST",
  role: "2nd year Bachelor of Engineering in Information Technology",
  heroDescription: "Currently in 2nd year of Bachelor of Engineering in Information Technology, exploring frontend development, UI/UX design, Generative AI, AI agents and AI automation.",
  college: "Thakur shree dps college of engineering and management (Mumbai University)",
  timeline: "2025 — 2029",
  age: 19,
  standing: "2nd Year Student",
  degreeCourse: "Bachelor of Engineering in Information Technology",
  location: "Mumbai, India",
  email: "aakashjaiswal1190@gmail.com",
};

export const SKILLS_WHAT_I_DO: SkillCategory[] = [
  {
    title: "Frontend Developer",
    iconName: "code",
    description: "Modern responsive web",
  },
  {
    title: "UI/UX Design",
    iconName: "layout",
    description: "Layouts & typography",
  },
  {
    title: "Gen AI",
    iconName: "sparkles",
    description: "LLM prompting & tuning",
  },
  {
    title: "AI Agent",
    iconName: "agent",
    description: "Autonomous systems",
  },
  {
    title: "AI Automation",
    iconName: "sync",
    description: "Pipelines & workflows",
  },
];

export const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  {
    number: "01",
    name: "Python",
    focus: "Core & Scripting",
  },
  {
    number: "02",
    name: "C",
    focus: "Systems & Foundation",
  },
  {
    number: "03",
    name: "Java",
    focus: "Object-Oriented",
  },
  {
    number: "04",
    name: "HTML",
    focus: "Semantic Web",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "alyuca",
    projectNumber: "PROJECT 01",
    category: "DEEP COMPLIANCE LAYER",
    statusBadge: "Completed Concept",
    title: "Alyuca",
    schematicType: "hash-chain",
    description:
      "Alyuca is a deep compliance layer designed for institutions handling sensitive data (such as lenders) that require verifiable record integrity. While standard audit logs can be covertly edited without proof, Alyuca links each log entry to the preceding one using a cryptographic hash chain. Any retroactive tampering immediately invalidates the chain from that point forward — turning passive record trust into mathematically provable integrity.",
    domainOrScopeLabel: "Domain",
    domainOrScopeValue: "Compliance · Cryptographic Fingerprinting",
    fullDetails: {
      overview:
        "Alyuca addresses the silent vulnerability of mutable operational databases. Traditional database logging allows privileged database administrators or compromised system accounts to alter transaction entries retroactively without detection. Alyuca implements recursive SHA-256 cryptographic linkage across all write and update transactions.",
      keyFeatures: [
        "Sequential Cryptographic Linking: Every log entry embeds H(n-1) in its pre-image computation.",
        "Zero-Trust Auditability: Third-party auditors can mathematically verify historical log integrity in O(n) time.",
        "Tamper Detection Engine: Retroactive modification of any single byte breaks downstream cryptographic hashes.",
        "Lightweight Verifier API: Enables instant client verification without leaking raw sensitive operational payloads."
      ],
      technicalArchitecture:
        "Architecture flows from write requests through an immutable ingestion worker, hashing with timestamped nonce, appending to append-only storage, and streaming root checkpoint hashes to verification nodes.",
      techStack: ["Python", "Cryptography (SHA-256)", "FastAPI", "PostgreSQL Append-Only", "Docker"],
      liveDemoType: "hash-verify"
    }
  },
  {
    id: "context-studio",
    projectNumber: "PROJECT 02",
    category: "AI WORKSPACE",
    statusBadge: "Core Project",
    title: "Context Studio",
    schematicType: "context-studio",
    description:
      "Context Studio is a universal AI workspace that keeps your project context, files, conversations, and memory in one place, so you can switch between GPT, Claude, Gemini, Llama, and other AI models without starting over.",
    domainOrScopeLabel: "Domain",
    domainOrScopeValue: "Gen AI · Context Management · Multi-Model",
    fullDetails: {
      overview:
        "Context fragmentation is one of the highest friction points when working with multiple state-of-the-art foundation models. Context Studio decouples contextual state, code files, and user memory from model inference APIs, providing a centralized workspace canvas with persistent vector context.",
      keyFeatures: [
        "Unified Memory Canvas: Single shared conversation context across GPT-4o, Claude 3.5, Gemini 1.5/2.0, and Llama 3.",
        "Zero Context Drop Switching: Switch inference engine mid-conversation without re-uploading documents or re-prompting.",
        "Local Document Tokenization: Automatically chunks and retrieves semantic embeddings relevant to current active prompt.",
        "Model Response Contrast: Compare reasoning steps, latencies, and token costs side-by-side in real-time."
      ],
      technicalArchitecture:
        "Client frontend connects to a unified context abstraction router that handles token budgets, prompt compilation, streaming model endpoints, and context cache normalization.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Gemini API", "Vector Context Store"],
      liveDemoType: "context-switch"
    }
  },
  {
    id: "carbon-tractor",
    projectNumber: "PROJECT 03",
    category: "ENVIRONMENTAL TECH",
    statusBadge: "In Progress",
    title: "Carbon tractor",
    subtitle: "(Currently Working On This)",
    schematicType: "carbon-tractor",
    description:
      "A Carbon Footprint Calculator estimates how much CO₂ (carbon dioxide) a person produces from activities such as travel, electricity use, fuel consumption, and waste.\n\nFor our project, it mainly calculates CO₂ emissions from different types of transportation based on the distance travelled.",
    domainOrScopeLabel: "Scope",
    domainOrScopeValue: "Transportation Emissions · Carbon Calculator",
    fullDetails: {
      overview:
        "Carbon tractor is an intuitive environmental analytics tool engineered to quantify and visualize personal and commercial transportation emissions. By applying standardized GHG Protocol emission coefficients per passenger-kilometer, it helps users benchmark transit footprints and choose low-emission alternatives.",
      keyFeatures: [
        "Multi-Modal Transit Calculations: Supports air travel (domestic/long-haul), passenger rail, metro transit, EV, petrol car, and two-wheelers.",
        "Standardized Emission Factors: Calibrated against IPCC & GHG Protocol carbon intensity constants.",
        "Comparative Route Impact: Visually displays emissions differential when switching transit modes.",
        "Interactive Carbon Simulator: Live distance and transit mode adjustment with real-time equivalent metric trees required to offset."
      ],
      technicalArchitecture:
        "Clean functional calculation core coupled to reactive UI state with localized cached transit coefficients and breakdown charts.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "GHG Protocol Standards", "Lucide React"],
      liveDemoType: "carbon-calc"
    }
  },
  {
    id: "agentic-flow",
    projectNumber: "PROJECT 04",
    category: "AUTONOMOUS AGENTS",
    statusBadge: "Active Architecture",
    title: "AgenticFlow",
    subtitle: "Autonomous Task Decomposition & Tool Use Engine",
    schematicType: "agent-workflow",
    description:
      "AgenticFlow is an autonomous agent orchestration pipeline built with Anthropic's Model Context Protocol (MCP) and Python. It accepts natural-language objectives, breaks complex goals into verifiable subtasks, selects appropriate external tools, and verifies execution results through a self-correcting feedback loop.",
    domainOrScopeLabel: "Focus",
    domainOrScopeValue: "AI Agents · Anthropic MCP · Task Decomposition",
    fullDetails: {
      overview:
        "Traditional LLM applications execute single prompts statically. AgenticFlow coordinates autonomous agents capable of independent multi-step problem solving. Leveraging the Model Context Protocol, the agent dynamically interrogates external tool servers (databases, calculation engines, and file systems) while validating intermediate invariants.",
      keyFeatures: [
        "Model Context Protocol (MCP) Client: Standardized JSON-RPC discovery and dynamic tool attachment over local servers.",
        "Deterministic Reflection Loop: Evaluates intermediate action outputs against goal criteria before deciding the next step.",
        "Fault-Tolerant Re-Planning: Automatically retries alternate tool parameters upon API rate limits or schema mismatches.",
        "Transparent Trace Logging: Visualizes step-by-step thinking tokens, selected tools, and structured outcomes."
      ],
      technicalArchitecture:
        "Core reasoning cycle: Goal Parsing → Subtask Queue → Tool Schema Discovery (MCP) → Action Dispatch → Output Invariant Check → Goal Completion.",
      techStack: ["Python", "Anthropic MCP SDK", "FastAPI", "React", "TypeScript", "Tailwind CSS"]
    }
  },
  {
    id: "nexus-automations",
    projectNumber: "PROJECT 05",
    category: "AI AUTOMATION & INTEGRATION",
    statusBadge: "Engineering Build",
    title: "Nexus Automations",
    subtitle: "Intelligent Document & Workflow Automation Pipeline",
    schematicType: "pipeline-automation",
    description:
      "Nexus Automations bridges unstructured real-world inputs (PDF invoices, email inquiries, scanned technical datasheets) directly into structured, verified database entries using multimodal LLM extraction, automated anomaly detection, and webhook dispatch.",
    domainOrScopeLabel: "Domain",
    domainOrScopeValue: "Workflow Automation · Multimodal Extraction · Webhooks",
    fullDetails: {
      overview:
        "Manual data entry and validation between disjointed platforms waste hundreds of engineering hours. Nexus Automations acts as an intelligent intermediary pipeline, extracting structured JSON schemas from arbitrary inputs with strict validation guarantees before pushing to destination APIs.",
      keyFeatures: [
        "Multimodal Document Parser: Ingests raw PDFs, images, and emails using visual and textual grounding.",
        "Schema Enforcer: Automatically validates extracted key-value pairs against Pydantic type definitions.",
        "Automated Exception Handling: Flags low-confidence extractions into human-in-the-loop review queues.",
        "Webhook Dispatcher: Dispatches verified records seamlessly into external databases and collaboration channels."
      ],
      technicalArchitecture:
        "Event Trigger → Ingestion Queue → Multimodal LLM Extraction → Pydantic Schema Validation → Webhook Dispatcher.",
      techStack: ["Python", "FastAPI", "Pydantic", "React", "Tailwind CSS", "Webhook Integration"]
    }
  }
];

export const DIRECT_CHANNELS: DirectChannel[] = [
  {
    name: "GitHub",
    value: "github.com/Akashjai12",
    actionText: "Visit GitHub Profile",
    href: "https://github.com/Akashjai12",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/aakash-jaiswal",
    actionText: "Visit LinkedIn Profile",
    href: "https://www.linkedin.com/in/aakash-jaiswal-531262308?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Email",
    value: "aakashjaiswal1190@gmail.com",
    actionText: "Compose Email in Gmail",
    href: "mailto:aakashjaiswal1190@gmail.com",
  },
];

export const LEARNING_TAGS = [
  "Generative AI",
  "AI Agents",
  "AI Automation",
  "Frontend Development",
  "UI/UX Design",
];
