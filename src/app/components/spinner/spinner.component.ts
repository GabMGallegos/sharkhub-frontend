import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-spinner',
    imports: [],
    templateUrl: './spinner.component.html',
    styleUrl: './spinner.component.css'
})
export class SpinnerComponent implements OnInit {
    isVisible = true;

    ngOnInit(): void {
        setTimeout(() => {
            this.isVisible = false;
        }, 300);
    }
}
