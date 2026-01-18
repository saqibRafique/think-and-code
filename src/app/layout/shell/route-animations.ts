import { animate, style, transition, trigger } from '@angular/animations';

export const routeFade = trigger('routeFade', [
    transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(6px)' }),
        animate('260ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);
