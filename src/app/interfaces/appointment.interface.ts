export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Appointment {
    id: number;
    userId: number;
    serviceId: number;
    date: string;
    time: string;
    status: AppointmentStatus;
}