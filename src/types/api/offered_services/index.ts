import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';

export interface ServiceCategory extends CreatedModified {
  name: string;
  description: string;
  icon: string;
  is_active: boolean;
}

export interface ServiceType extends CreatedModified {
  category: ServiceCategory;
  name: string;
  description: string;
  is_active: boolean;
}

export interface ServiceProviderProfile extends CreatedModified {
  user: UserReadSerializer;
  bio: string;
  skills: Record<string, any>;
  experience_years: number;
  total_earnings: number;
  total_orders: number;
  average_rating: number;
  is_verified: boolean;
}

export interface Service extends CreatedModified {
  provider: ServiceProviderProfile;
  service_type: ServiceType;
  title: string;
  description: string;
  is_featured: boolean;
  status: string;
  view_count: number;
  booking_count: number;
  rating_average: number;
  rating_count: number;
}

export interface ServiceImage extends CreatedModified {
  service: Service;
  image: string;
  caption: string;
  is_primary: boolean;
}

export interface ServicePackage extends CreatedModified {
  service: Service;
  name: string;
  billing_type: string;
  description: string;
  price: number;
  delivery_time: number;
  revision_count: number;
  features: Record<string, any>;
}

export interface ServiceBooking extends CreatedModified {
  service: Service;
  client: UserReadSerializer;
  package: ServicePackage;
  status: string;
  requirements: string;
  total_amount: number;
  delivery_date: string;
  accepted_at: string | null;
  completed_at: string | null;
}

export interface ServiceReview extends CreatedModified {
  booking: ServiceBooking;
  reviewer: UserReadSerializer;
  rating: number;
  comment: string;
  is_public: boolean;
}