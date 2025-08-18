import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';

export interface ProductCategory extends CreatedModified {
  name: string;
  description: string;
  icon: string;
  parent: ProductCategory | null;
  is_active: boolean;
}

export interface Product extends CreatedModified {
  seller: UserReadSerializer;
  category: ProductCategory;
  title: string;
  description: string;
  condition: string;
  price: number;
  original_price: number;
  quantity: number;
  status: string;
  brand: string;
  model: string;
  color: string;
  size: string;
  weight: number;
  dimensions: string;
  location: string;
  shipping_available: boolean;
  local_pickup_available: boolean;
  view_count: number;
  favorite_count: number;
  rating_average: number;
  rating_count: number;
}


export const normalizePrice = (price: number | string): number => {
  if (typeof price === 'number') return price;
  if (typeof price === 'string') {
    // Remove any non-numeric characters except decimal point
    const numericValue = parseFloat(price.replace(/[^0-9.]/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
  }
  return 0;
};

export interface ProductImage extends CreatedModified {
  product: Product;
  image: string;
  caption: string;
  is_primary: boolean;
  order: number;
}

export interface ProductFavorite extends CreatedModified {
  user: UserReadSerializer;
  product: Product;
}

export interface ProductOrder extends CreatedModified {
  buyer: UserReadSerializer;
  product: Product;
  quantity: number;
  unit_price: number;
  total_amount: number;
  shipping_cost: number;
  status: string;
  payment_status: string;
  shipping_address: string;
  shipping_method: string;
  tracking_number: string;
  confirmed_at: string | null;
  shipped_at: string | null;
  delivered_at: string | null;
}

export interface ProductReview extends CreatedModified {
  reviewer: UserReadSerializer;
  product: Product;
  order: ProductOrder;
  rating: number;
  title: string;
  comment: string;
  is_verified_purchase: boolean;
  helpful_votes: number;
  unhelpful_votes: number;
}

export interface SellerProfile extends CreatedModified {
  user: UserReadSerializer;
  business_name: string;
  business_description: string;
  business_address: string;
  business_phone: string;
  business_email: string;
  website: string;
  is_verified: boolean;
  verification_date: string | null;
  total_sales: number;
  total_products: number;
  rating_average: number;
  rating_count: number;
  auto_accept_orders: boolean;
  shipping_policy: string;
  return_policy: string;
}