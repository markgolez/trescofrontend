import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';
import { Product } from '../marketplace';

export interface Order extends CreatedModified {
  buyer: UserReadSerializer;
  total_amount: number;
  status: string;
  shipping_address: string;
}

export interface OrderItem {
  id: number;
  order: Order;
  product: Product;
  quantity: number;
  price: number;
}