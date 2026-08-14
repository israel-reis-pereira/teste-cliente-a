// src/constants/tenants.ts
import type { TenantConfig } from '../types/config';

export const tenants: Record<string, TenantConfig> = {
  "empresa-a": {
    id: "empresa-a",
    nomeSite: "Cliente A",
    links: [
      { nome: "Home", url: "/" },
      { nome: "Serviços", url: "/servicos" },
      { nome: "Sobre", url: "/sobre" }
    ],
    theme: {
      primaryColor: "#2563eb",       // Azul Elétrico
      navBackgroundColor: "#ffffff", // Fundo Branco
      textColor: "#1f2937"           // Texto Escuro
    },
    features: {
      hasThemeToggle: true,
      hasCtaButton: true
    }
  },
  "empresa-b": {
    id: "Cliente B",
    nomeSite: "Studio Eco Design",
    links: [
      { nome: "Portfólio", url: "/portfolio" },
      { nome: "Manifesto", url: "/sobre" },
      { nome: "Contato", url: "/contato" }
    ],
    theme: {
      primaryColor: "#10b981",       // Verde Ecológico
      navBackgroundColor: "#f3f4f6", // Fundo Cinza Claro
      textColor: "#065f46"           // Texto Verde Escuro
    },
    features: {
      hasThemeToggle: false,         // Desativa o Dark Mode para este cliente
      hasCtaButton: true
    }
  }
};
