import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';
import { Service } from '../offered_services';
import { Product } from '../marketplace';
import { Transaction } from '../transaction';

export interface Dashboard extends CreatedModified {
  user: UserReadSerializer;
}

export interface DashboardService {
  id: number;
  dashboard: Dashboard;
  service: Service;
  created_at: string;
}

export interface DashboardProduct {
  id: number;
  dashboard: Dashboard;
  product: Product;
  created_at: string;
}

export interface DashboardTransaction {
  id: number;
  dashboard: Dashboard;
  transaction: Transaction;
  created_at: string;
}

export interface DashboardSummary {
  id: number;
  dashboard: Dashboard;
  total_spent: number;
  total_earned: number;
  total_services_offered: number;
  total_products_listed: number;
  total_services_availed: number;
  total_products_purchased: number;
  last_updated: string;
}