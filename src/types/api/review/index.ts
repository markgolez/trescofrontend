import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';
import { UserProfile } from '../userprofile';

export interface Review extends CreatedModified {
  rater: UserReadSerializer;
  provider: UserProfile;
  rating: number;
  comment: string;
}