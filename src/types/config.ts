// src/types/config.ts

export interface LinkItem {
  nome: string;
  url: string;
}

export interface TenantConfig {
  id: string;
  nomeSite: string;
  links: LinkItem[];
  theme: {
    primaryColor: string;
    navBackgroundColor: string;
    textColor: string;
  };
  features: {
    hasThemeToggle: boolean;
    hasCtaButton: boolean;
  };
}
