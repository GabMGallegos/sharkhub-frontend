import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Service } from '../interfaces/service.interface';

@Injectable({
    providedIn: 'root'
})
export class ServicesService {
    private readonly mockServices: Service[] = [
        {
            id: 1,
            name: 'Corte clásico',
            description: 'Corte tradicional con acabado profesional.',
            price: 8,
            durationMinutes: 30,
            imageUrl: '/img/service-1.jpg'
        },
        {
            id: 2,
            name: 'Corte y barba',
            description: 'Servicio completo de corte de cabello y arreglo de barba.',
            price: 12,
            durationMinutes: 45,
            imageUrl: '/img/service-2.jpg'
        },
        {
            id: 3,
            name: 'Afeitado premium',
            description: 'Afeitado detallado con acabado limpio.',
            price: 10,
            durationMinutes: 35,
            imageUrl: '/img/service-3.jpg'
        }
    ];

    getServices(): Observable<Service[]> {
        return of(this.mockServices);
    }

    getServiceById(id: number): Observable<Service | undefined> {
        return of(this.mockServices.find((service) => service.id === id));
    }
}