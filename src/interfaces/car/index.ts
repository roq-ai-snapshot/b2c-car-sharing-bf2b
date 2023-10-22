import { BookingInterface } from 'interfaces/booking';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  license_plate: string;
  location?: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];

  _count?: {
    booking?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  location?: string;
  status?: string;
}
