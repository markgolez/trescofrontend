import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';

export interface Address extends CreatedModified {
  street: string;
  barangay: string;
  city_municipality: string;
  province: string;
  region: string;
  country: string;
  zipcode: string;
}

export interface UserProfile extends CreatedModified {
  user: UserReadSerializer;
  bio: string;
  profile_picture: string;
  date_of_birth: string | null;
  address: Address;
  website: string | null;
  social_media_handle: string | null;
  phone_number: string | null;
  gender: string;
  is_agent: boolean;
  is_verified: boolean;
}

export interface VerifiedAccount extends CreatedModified {
  user: UserReadSerializer;
  valid_id: string;
  selfie_with_id: string;
  proof_of_address: string;
}