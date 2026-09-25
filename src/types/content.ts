export interface SiteSettings {
  name: string; shortName: string; logo: string; phone: string; phoneHref: string; whatsappUrl: string; instagramUrl: string;
  address: { street: string; neighborhood: string; city: string; state: string; postalCode: string };
  plusCode: string; mapUrl: string;
}
export interface BusinessHours { day: string; open: boolean; opensAt?: string; closesAt?: string; }
export interface Service { title: string; description: string; image?: string; order: number; active: boolean; }
export interface Testimonial { name: string; text: string; rating?: number; date?: string; ownerResponse?: string;}
export interface Facility { title: string; description: string; icon: 'accessibility' | 'amenities' | 'parking' | 'payment'; order: number; }
export interface SiteContent { settings: SiteSettings; businessHours: BusinessHours[]; services: Service[]; testimonials: Testimonial[]; facilities: Facility[]; }
