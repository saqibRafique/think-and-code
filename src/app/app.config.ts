import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { SITE_CONTENT, SiteContent } from './core/tokens/site-content.token';

const content: SiteContent = {
  brand: {
    name: 'Think And Code',
    tagline: 'Delivering Innovative Software Solutions',
  },
  nav: [
    { label: 'Home', path: '/#home' },
    { label: 'Services', path: '/#services' },
    { label: 'Why Us', path: '/#why-us' },
    { label: 'Tech Stack', path: '/#tech-stack' },
  ],
  hero: {
    headline: 'Crafting high-quality software and IT solutions for a global clientele.',
    subhead:
      'From MVPs to enterprise modernization—robust architecture, clean code, and transparent delivery.',
    ctaPrimary: 'Request a Consultation',
  },
  services: [
    { title: 'Web Development', bullets: ['Responsive, user-centric websites', 'Modern frameworks: React, Angular, Vue'] },
    { title: 'Mobile App Development', bullets: ['iOS & Android', 'Cross-platform: Flutter, React Native'] },
    { title: 'Full Stack Development', bullets: ['Node.js, Python, .NET and more', 'From architecture to deployment'] },
    { title: 'ERP Development', bullets: ['Workflow-tailored solutions', 'Real-time analytics, scalable builds'] },
    { title: 'Cloud & DevOps', bullets: ['AWS, Azure, Google Cloud', 'CI/CD for faster, safer releases'] },
  ],
  whyChooseUs: [
    { title: 'High-Quality Code & Documentation', body: 'Best practices with documentation that makes maintenance easy.' },
    { title: 'Clean Architecture', body: 'Modular, scalable foundations that grow with your business.' },
    { title: 'On-Time Delivery', body: 'Agile planning and disciplined execution to meet deadlines.' },
    { title: 'Transparent Communication', body: 'Regular updates and clear checkpoints—no surprises.' },
    { title: 'Global Expertise, Local Focus', body: 'Experience across regions with market-aware delivery.' },
  ],
  techStacks: [
    { title: 'Front-End', items: ['React', 'Angular', 'Vue.js'] },
    { title: 'Back-End', items: ['Node.js', 'Python (Django/Flask)', '.NET', 'Java', 'PHP (Laravel)'] },
    { title: 'Mobile', items: ['iOS (Swift)', 'Android (Kotlin/Java)', 'React Native', 'Flutter'] },
    { title: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server'] },
    { title: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins'] },
    { title: 'Emerging Tech', items: ['AI/ML', 'IoT', 'Data Analytics'] },
  ],
  howWeWork: [
    { title: 'Discovery & Consultation', body: 'We analyze needs and craft a tailored proposal.' },
    { title: 'Team Assembly', body: 'We handpick the right engineers, designers, and QA.' },
    { title: 'Delivery & Ongoing Support', body: 'Post-launch maintenance and feature enhancements.' },
  ],
  contact: {
    phone: '+92-339-4041177',
    address: '47 CCA, 3rd Floor Commercial Phase-6 DHA Lahore',
    email: 'info@thinkandcode.co',
    website: 'www.thinkandcode.co',
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
    ),
    { provide: SITE_CONTENT, useValue: content },
  ],
};
