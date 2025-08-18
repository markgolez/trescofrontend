import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';

export interface Wallet extends CreatedModified {
  user: UserReadSerializer;
  balance: number;
  is_active: boolean;
  is_verified: boolean;
  daily_withdrawal_limit: number;
  daily_withdrawal_used: number;
}

export interface PaymentMethod extends CreatedModified {
  user: UserReadSerializer;
  method_type: string;
  account_name: string;
  account_number: string;
  is_default: boolean;
  is_verified: boolean;
  verification_date: string | null;
}

export interface WalletTransaction extends CreatedModified {
  wallet: Wallet;
  payment_method: PaymentMethod;
  transaction_type: string;
  status: string;
  amount: number;
  fee: number;
  balance_before: number;
  balance_after: number;
  reference_number: string;
  description: string;
  source_module: string;
  related_object_id: string;
}