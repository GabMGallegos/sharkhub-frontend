import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [
        RouterLink
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
    activeSlide = 0;
    private carouselInterval?: ReturnType<typeof setInterval>;

    ngOnInit(): void {
        this.carouselInterval = setInterval(() => {
            this.nextSlide();
        }, 6000);
    }

    ngOnDestroy(): void {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
        }
    }

    previousSlide(): void {
        this.activeSlide = this.activeSlide === 0 ? 1 : this.activeSlide - 1;
    }

    nextSlide(): void {
        this.activeSlide = this.activeSlide === 1 ? 0 : this.activeSlide + 1;
    }
}
