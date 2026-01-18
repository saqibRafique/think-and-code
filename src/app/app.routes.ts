import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PrivacyPageComponent } from './pages/privacy/privacy-page.component';

export const routes: Routes = [
    // Routes WITH header/footer
    {
        path: '',
        component: ShellComponent,
        children: [
            { path: '', component: HomePageComponent, title: 'Think And Code' },
        ],
    },

    // Route WITHOUT header/footer
    {
        path: 'privacy-policy',
        component: PrivacyPageComponent,
        title: 'Privacy Policy - Think And Code',
    },

    { path: '**', redirectTo: '' },
];
