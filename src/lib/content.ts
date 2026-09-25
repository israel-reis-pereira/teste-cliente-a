import { businessHours, facilities, services, siteSettings, testimonials } from '../data/cfa';
import type { BusinessHours, Facility, Service, SiteContent, SiteSettings, Testimonial } from '../types/content';
const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET;
const apiVersion = import.meta.env.SANITY_API_VERSION ?? '2025-02-19';
const query = `{"settings":*[_type=="siteSettings"][0]{name,"shortName":"CFA","logo":logo.asset->url,phone,phoneHref,whatsappUrl,instagramUrl,address,plusCode,mapUrl},"businessHours":*[_type=="businessHours"]|order(order asc){"day":day,"open":open,"opensAt":opensAt,"closesAt":closesAt},"services":*[_type=="service"]|order(order asc){title,description,"image":image.asset->url,order,active},"testimonials":*[_type=="testimonial"]|order(date desc){name,text,"rating":rating,date,ownerResponse},"facilities":*[_type=="facility"]|order(order asc){title,description,icon,order}}`;
const fallback = (): SiteContent => ({ settings: siteSettings, businessHours, services: services.filter((item) => item.active).sort((a,b) => a.order-b.order), testimonials, facilities: facilities.sort((a,b) => a.order-b.order) });
const logFallback = (reason: string, error?: unknown) => { if (import.meta.env.DEV) console.warn(`[content] ${reason}. Fonte usada: fallback local.`, error ?? ''); };
let contentPromise: Promise<SiteContent> | undefined;

async function loadContent(): Promise<SiteContent> {
  if (!projectId || !dataset) { logFallback('Sanity não configurado (defina SANITY_PROJECT_ID e SANITY_DATASET para ativá-lo)'); return fallback(); }
  try { const response = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`); if (!response.ok) throw new Error(`Consulta Sanity falhou (${response.status})`); const result = (await response.json() as { result?: Partial<SiteContent> }).result; if (!result?.settings || !result.businessHours || !result.services || !result.testimonials || !result.facilities) throw new Error('Consulta Sanity retornou documentos incompletos'); return result as SiteContent; } catch (error) { logFallback('Falha na consulta Sanity', error); return fallback(); }
}

function getContent(): Promise<SiteContent> {
  contentPromise ??= loadContent();
  return contentPromise;
}

export async function getSiteSettings(): Promise<SiteSettings> { return (await getContent()).settings; }
export async function getBusinessHours(): Promise<BusinessHours[]> { return (await getContent()).businessHours; }
export async function getServices(): Promise<Service[]> { return (await getContent()).services; }
export async function getTestimonials(): Promise<Testimonial[]> { return (await getContent()).testimonials; }
export async function getFacilities(): Promise<Facility[]> { return (await getContent()).facilities; }
