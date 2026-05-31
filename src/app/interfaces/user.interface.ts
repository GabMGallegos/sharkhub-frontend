export type UserRole = 'customer' | 'barber' | 'owner';

export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}