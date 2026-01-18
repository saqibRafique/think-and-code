import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormBuilder,
    ReactiveFormsModule,
    Validators,
    FormControl,
    FormGroup,
} from '@angular/forms';
import { SITE_CONTENT, SiteContent } from '../../core/tokens/site-content.token';

type ContactFormGroup = FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    message: FormControl<string>;
}>;

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
    contactForm!: ContactFormGroup;

    constructor(
        @Inject(SITE_CONTENT) public readonly content: SiteContent,
        private readonly fb: FormBuilder
    ) {
        this.contactForm = this.fb.nonNullable.group({
            name: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(2)]),
            email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
            message: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(10)]),
        });
    }

    // Optional convenience getters
    get nameCtrl() { return this.contactForm.controls.name; }
    get emailCtrl() { return this.contactForm.controls.email; }
    get messageCtrl() { return this.contactForm.controls.message; }

    submit(): void {
        this.contactForm.markAllAsTouched();

        if (this.contactForm.invalid) return;

        const { name, email, message } = this.contactForm.getRawValue();

        const subject = encodeURIComponent(`Website Inquiry — ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:info@thinkandcode.co?subject=${subject}&body=${body}`;
    }
}
