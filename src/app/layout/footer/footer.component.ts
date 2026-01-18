import { Component, Inject } from '@angular/core';
import { SITE_CONTENT, SiteContent } from '../../core/tokens/site-content.token';

@Component({
    standalone: true,
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    constructor(@Inject(SITE_CONTENT) public readonly content: SiteContent) { }
    readonly year = new Date().getFullYear();
}
