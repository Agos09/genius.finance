export const site = {
  name: "Genius Finance",
  brand: "genius.finance",
  tagline: "Software, modellistica e dati per l'agro-industria",
  description:
    "Hub tecnologico per comunità energetiche, attestazione assicurativa agricola, strumenti finanziari e modelli quantitativi — nato in Daunia, pensato per scalare.",
  heroLine: "Dati verificabili, modelli rigorosi, prodotti che scalano.",
  contactEmail:
    import.meta.env.PUBLIC_CONTACT_EMAIL || "tech@genius.finance",
  profileUrl: "https://agostinodeangelis.com",
  region: "Puglia · Daunia",
} as const;

export type ModuleStatus = "live" | "beta" | "soon";

export type Module = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  status: ModuleStatus;
  tags: string[];
  accent: "cyan" | "violet" | "emerald" | "amber";
};

export const modules: Module[] = [
  {
    id: "smartagri",
    title: "Attested Field Data",
    subtitle: "smartagri.tech",
    description:
      "Sensori di campo e protocollo di attestazione per certificati digitali evento utilizzabili da compagnie, broker e periti nella liquidazione del sinistro agricolo.",
    url: "https://smartagri.tech",
    status: "live",
    tags: ["B2B", "Assicurazioni", "IoT"],
    accent: "emerald",
  },
  {
    id: "cer",
    title: "CER Genius",
    subtitle: "cer.genius.finance",
    description:
      "Competenze e strumenti per comunità energetiche rinnovabili: monitoraggio, ottimizzazione e gestione dati energetici sensibili.",
    url: "https://cer.genius.finance",
    status: "beta",
    tags: ["CER", "Energia", "SaaS"],
    accent: "cyan",
  },
  {
    id: "dcf",
    title: "DCF Model",
    subtitle: "dcf.genius.finance",
    description:
      "Valutazione d'impresa con discounted cash flow — modelli interattivi per analisi finanziaria e due diligence.",
    url: "https://dcf.genius.finance",
    status: "live",
    tags: ["Finanza", "Modelli", "Streamlit"],
    accent: "violet",
  },
  {
    id: "patent",
    title: "Patent Analysis",
    subtitle: "patent.genius.finance",
    description:
      "Analisi brevetti e landscape IP per startup e progetti di innovazione agritech ed energy.",
    url: "https://patent.genius.finance",
    status: "live",
    tags: ["IP", "R&D", "Startup"],
    accent: "amber",
  },
  {
    id: "licensing",
    title: "Licensing Dashboard",
    subtitle: "licensing.genius.finance",
    description:
      "Dashboard finanziaria per modelli di licensing e royalty — supporto a negoziazioni e strutturazione deal.",
    url: "https://licensing.genius.finance",
    status: "live",
    tags: ["Finanza", "Licensing"],
    accent: "violet",
  },
  {
    id: "esg",
    title: "ESG Genius",
    subtitle: "esg.genius.finance",
    description:
      "Certificazione del valore sostenibile — modulo in sviluppo, integrato con dati CER e smart farming.",
    url: "https://esg.genius.finance",
    status: "soon",
    tags: ["ESG", "Sostenibilità"],
    accent: "emerald",
  },
];

export const ecosystem = [
  {
    label: "Profilo professionale",
    url: "https://agostinodeangelis.com",
    hint: "CV, portfolio, consulenza",
  },
  {
    label: "Educazione finanziaria",
    url: "https://wealth.finance",
    hint: "Economia aziendale, divulgazione",
  },
  {
    label: "Export territorio",
    url: "https://agrovalore.it",
    hint: "Agrovalore · Daunia",
  },
] as const;

export const pillars = [
  {
    title: "Dati attestati",
    text: "Dal sensore al certificato: integrità crittografica e prove opponibili a terzi.",
  },
  {
    title: "Modelli finanziari",
    text: "DCF, licensing, actuarial thinking — precisione per broker, investitori e startup.",
  },
  {
    title: "Energia e territorio",
    text: "CER, agricoltura intelligente e export multisettoriale dalla Daunia.",
  },
] as const;
