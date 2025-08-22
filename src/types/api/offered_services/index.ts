import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';


export interface TimeStampedUUIDModel {
  pkid: number;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface ServiceCategory extends TimeStampedUUIDModel {
  name: string;
  description: string;
  icon: string;
  is_active: boolean;
}

export interface ServiceType extends TimeStampedUUIDModel {
  category: string; // UUID of ServiceCategory
  name: string;
  description: string;
  is_active: boolean;
}

export interface ServiceProviderProfile extends TimeStampedUUIDModel {
  user: string; // UUID of User
  bio: string;
  skills: any[]; // JSONField
  experience_years: number;
  total_earnings: number;
  total_orders: number;
  average_rating: number;
  is_verified: boolean;
}

export interface Service extends TimeStampedUUIDModel {
  provider: string; // UUID of ServiceProviderProfile
  service_type: string; // UUID of ServiceType
  title: string;
  description: string;
  is_featured: boolean;
  status: 'active' | 'inactive' | 'paused' | 'draft';
  view_count: number;
  booking_count: number;
  rating_average: number;
  rating_count: number;
}

export interface ServiceImage extends TimeStampedUUIDModel {
  service: string; // UUID of Service
  image: string; // URL to image
  caption: string;
  is_primary: boolean;
}

export interface ServicePackage extends TimeStampedUUIDModel {
  service: string; // UUID of Service
  name: string;
  billing_type: 'fixed' | 'hourly' | 'daily' | 'weekly' | 'monthly';
  description: string;
  price: number;
  delivery_time: number; // in days
  revision_count: number;
  features: any[]; // JSONField
}

export interface ServiceBooking extends TimeStampedUUIDModel {
  service: string; // UUID of Service
  client: string; // UUID of User
  package: string; // UUID of ServicePackage
  status: 'pending' | 'accepted' | 'completed' | 'cancelled' | 'rejected';
  requirements: string;
  total_amount: number;
  delivery_date: string; // ISO date string
  accepted_at: string | null; // ISO date string
  completed_at: string | null; // ISO date string
}

export interface ServiceReview extends TimeStampedUUIDModel {
  booking: string; // UUID of ServiceBooking
  reviewer: string; // UUID of User
  rating: number; // 1-5
  comment: string;
  is_public: boolean;
}

// Extended Service interface with relationships
export interface ServiceWithRelations extends Service {
  provider_profile?: ServiceProviderProfile;
  service_type_detail?: ServiceType;
  category_detail?: ServiceCategory;
  images?: ServiceImage[];
  packages?: ServicePackage[];
  reviews?: ServiceReview[];
  booking_count: number;
  rating_average: number;
}



// export interface ServiceCategory extends CreatedModified {
//   name: string;
//   description: string;
//   icon: string;
//   is_active: boolean;
// }

// export interface ServiceType extends CreatedModified {
//   category: ServiceCategory;
//   name: string;
//   description: string;
//   is_active: boolean;
// }

// export interface ServiceProviderProfile extends CreatedModified {
//   user: UserReadSerializer;
//   bio: string;
//   skills: Record<string, any>;
//   experience_years: number;
//   total_earnings: number;
//   total_orders: number;
//   average_rating: number;
//   is_verified: boolean;
// }

// export interface Service extends CreatedModified {
//   provider: ServiceProviderProfile;
//   service_type: ServiceType;
//   title: string;
//   description: string;
//   is_featured: boolean;
//   status: string;
//   view_count: number;
//   booking_count: number;
//   rating_average: number;
//   rating_count: number;
// }

// export interface ServiceImage extends CreatedModified {
//   service: Service;
//   image: string;
//   caption: string;
//   is_primary: boolean;
// }

// export interface ServicePackage extends CreatedModified {
//   service: Service;
//   name: string;
//   billing_type: string;
//   description: string;
//   price: number;
//   delivery_time: number;
//   revision_count: number;
//   features: Record<string, any>;
// }

// export interface ServiceBooking extends CreatedModified {
//   service: Service;
//   client: UserReadSerializer;
//   package: ServicePackage;
//   status: string;
//   requirements: string;
//   total_amount: number;
//   delivery_date: string;
//   accepted_at: string | null;
//   completed_at: string | null;
// }

// export interface ServiceReview extends CreatedModified {
//   booking: ServiceBooking;
//   reviewer: UserReadSerializer;
//   rating: number;
//   comment: string;
//   is_public: boolean;
// }

// export interface ServiceReviewImage extends CreatedModified {
//   review: ServiceReview;
//   image: string;
//   caption: string;
// }
