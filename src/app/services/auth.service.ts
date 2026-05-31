import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from '../interfaces/user.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly currentUserSubject = new BehaviorSubject<User | null>(null);

    currentUser$ = this.currentUserSubject.asObservable();

    login(email: string, password: string): Observable<AuthResponse> {
        const mockUser: User = {
            id: 1,
            name: 'Usuario de prueba',
            email,
            role: 'customer'
        };

        const response: AuthResponse = {
            accessToken: 'mock-jwt-token',
            user: mockUser
        };

        this.currentUserSubject.next(mockUser);
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('current_user', JSON.stringify(mockUser));

        return of(response);
    }

    register(name: string, email: string, password: string): Observable<AuthResponse> {
        const mockUser: User = {
            id: 2,
            name,
            email,
            role: 'customer'
        };

        const response: AuthResponse = {
            accessToken: 'mock-jwt-token',
            user: mockUser
        };

        this.currentUserSubject.next(mockUser);
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('current_user', JSON.stringify(mockUser));

        return of(response);
    }

    logout(): void {
        this.currentUserSubject.next(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('current_user');
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('access_token');
    }
}