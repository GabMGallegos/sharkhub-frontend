import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Appointment } from '../interfaces/appointment.interface';

@Injectable({
    providedIn: 'root'
})
export class AppointmentsService {
    private readonly mockAppointments: Appointment[] = [
        {
            id: 1,
            userId: 1,
            serviceId: 1,
            date: '2026-06-01',
            time: '10:00',
            status: 'confirmed'
        },
        {
            id: 2,
            userId: 1,
            serviceId: 2,
            date: '2026-06-03',
            time: '15:30',
            status: 'pending'
        }
    ];

    getAppointments(): Observable<Appointment[]> {
        return of(this.mockAppointments);
    }

    createAppointment(appointment: Appointment): Observable<Appointment> {
        return of(appointment);
    }

    cancelAppointment(id: number): Observable<boolean> {
        return of(true);
    }
}