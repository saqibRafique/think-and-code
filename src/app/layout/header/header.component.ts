import { Component, HostListener, Inject, signal } from '@angular/core';
import { SITE_CONTENT, SiteContent } from '../../core/tokens/site-content.token';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    constructor(@Inject(SITE_CONTENT) public readonly content: SiteContent) { }

    readonly open = signal(false);

    toggle() { this.open.update(v => !v); }
    close() { this.open.set(false); }

    @HostListener('window:keydown.escape')
    onEsc() { this.close(); }


    scrollToTop(ev: Event): void {
        ev.preventDefault();
        this.close();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.replaceState(null, '', '/');
    }

    /** Called from ngFor items */
    onNavClick(item: { label: string; path: string }, ev: Event): void {
        ev.preventDefault();

        // If your nav uses "/#services" or "#services", extract the id
        const id = item.path.includes('#') ? item.path.split('#')[1] : item.path;

        // Home → scroll top
        if (!id || id === 'home' || item.label.toLowerCase() === 'home') {
            this.scrollToTop(ev);
            return;
        }

        this.goTo(id, ev);
    }

    /** Smooth scroll to a section id */
    goTo(id: string, ev?: Event): void {
        ev?.preventDefault();
        this.close();

        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${id}`);
    }
}
