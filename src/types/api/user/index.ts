import { CreatedModified } from '../../createdModified';

export interface UserReadSerializer extends CreatedModified {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  is_superuser: boolean;
  last_login: string | null;
}