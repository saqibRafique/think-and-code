import { InjectionToken } from '@angular/core';

export type SiteContent = Readonly<{
    brand: { name: string; tagline: string };
    nav: ReadonlyArray<{ label: string; path: string }>;
    hero: { headline: string; subhead: string; ctaPrimary: string; };
    services: ReadonlyArray<{ title: string; bullets: string[] }>;
    whyChooseUs: ReadonlyArray<{ title: string; body: string }>;
    techStacks: ReadonlyArray<{ title: string; items: string[] }>;
    howWeWork: ReadonlyArray<{ title: string; body: string }>;
    contact: { phone: string; address: string; email: string; website: string };
}>;

export const SITE_CONTENT = new InjectionToken<SiteContent>('SITE_CONTENT');
