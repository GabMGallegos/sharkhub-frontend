import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        NavbarComponent,
        FooterComponent,
        SpinnerComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    showBackToTop = false;

    @HostListener('window:scroll')
    onWindowScroll(): void {
        this.showBackToTop = window.scrollY > 300;
    }

    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
