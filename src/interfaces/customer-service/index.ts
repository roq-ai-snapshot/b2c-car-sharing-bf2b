import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerServiceInterface {
  id?: string;
  service_name: string;
  service_description?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  service_name?: string;
  service_description?: string;
  user_id?: string;
}
