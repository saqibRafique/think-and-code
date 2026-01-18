import { Component, Inject } from '@angular/core';
import { SITE_CONTENT, SiteContent } from '../../core/tokens/site-content.token';

@Component({
    standalone: true,
    templateUrl: './privacy-page.component.html',
    styleUrls: ['./privacy-page.component.scss'],
})
export class PrivacyPageComponent {
    constructor(@Inject(SITE_CONTENT) public readonly content: SiteContent) { }
}
