import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private readonly mockUsers: User[] = [
        {
            id: 1,
            name: 'Usuario de prueba',
            email: 'cliente@sharkhub.com',
            role: 'customer'
        },
        {
            id: 2,
            name: 'Barbero de prueba',
            email: 'barbero@sharkhub.com',
            role: 'barber'
        },
        {
            id: 3,
            name: 'Administrador de prueba',
            email: 'owner@sharkhub.com',
            role: 'owner'
        }
    ];

    getUsers(): Observable<User[]> {
        return of(this.mockUsers);
    }

    getUserById(id: number): Observable<User | undefined> {
        return of(this.mockUsers.find((user) => user.id === id));
    }
}