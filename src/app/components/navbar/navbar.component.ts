import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    private readonly router = inject(Router);

    isMenuOpen = false;
    isPagesOpen = false;
    isScrolled = false;

    get isPagesRoute(): boolean {
        const pageRoutes = ['/price', '/team', '/open', '/testimonial', '/404'];
        return pageRoutes.some((route) => this.router.url.startsWith(route));
    }

    @HostListener('window:scroll')
    onWindowScroll(): void {
        this.isScrolled = window.scrollY > 80;
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    togglePages(event: Event): void {
        event.preventDefault();
        this.isPagesOpen = !this.isPagesOpen;
    }

    closeMenu(): void {
        this.isMenuOpen = false;
        this.isPagesOpen = false;
    }
}
