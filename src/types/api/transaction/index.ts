import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';
import { Wallet } from '../wallet';

export interface Transaction extends CreatedModified {
  user: UserReadSerializer;
  wallet: Wallet;
  transaction_type: string;
  status: string;
  amount: number;
  fee: number;
  source_module: string;
  related_object_id: string;
  description: string;
  reference_number: string;
  processed_at: string | null;
  completed_at: string | null;
}