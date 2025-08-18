import { CreatedModified, Dict } from '../../createdModified';
import { UserReadSerializer } from '../user';

export interface PostingCategory extends CreatedModified {
  name: string;
  description: string;
  icon: string;
  parent: PostingCategory | null;
  is_active: boolean;
}

export interface Posting extends CreatedModified {
  seller: UserReadSerializer;
  category: PostingCategory;
  title: string;
  description: string;
  posting_type: string;
  status: string;
  starting_price: number;
  reserve_price: number;
  buy_now_price: number;
  current_price: number;
  start_date: string;
  end_date: string;
  min_bid_increment: number;
  location: string;
  condition: string;
  brand: string;
  model: string;
  year: number;
  view_count: number;
  bid_count: number;
  favorite_count: number;
  allow_negotiation: boolean;
  auto_extend: boolean;
  require_verification: boolean;
}

export interface PostingImage extends CreatedModified {
  posting: Posting;
  image: string;
  caption: string;
  is_primary: boolean;
  order: number;
}

export interface Bid extends CreatedModified {
  bidder: UserReadSerializer;
  posting: Posting;
  amount: number;
  status: string;
  is_auto_bid: boolean;
  max_amount: number;
  is_anonymous: boolean;
}

export interface Negotiation extends CreatedModified {
  buyer: UserReadSerializer;
  seller: UserReadSerializer;
  posting: Posting;
  status: string;
  initial_offer: number;
  current_offer: number;
  accepted_price: number;
  accepted_at: string | null;
  expired_at: string | null;
}

export interface NegotiationMessage extends CreatedModified {
  negotiation: Negotiation;
  sender: UserReadSerializer;
  message_type: string;
  content: string;
  offer_amount: number;
  is_read: boolean;
}

export interface PostingFavorite extends CreatedModified {
  user: UserReadSerializer;
  posting: Posting;
}

export interface Proposal extends CreatedModified {
  posting: Posting;
  sender: UserReadSerializer;
  recipient: UserReadSerializer;
  description: string;
  price: number;
  status: string;
  response_message: string;
  responded_at: string | null;
}

export interface PostingTag extends CreatedModified {
  name: string;
  post_count: number;
}

export interface PostingTagRelation extends CreatedModified {
  post: Posting;
  tag: PostingTag;
}

export interface PostingView extends CreatedModified {
  post: Posting;
  viewer: UserReadSerializer | null;
  ip_address: string;
}

export type Postings = Dict<Posting>;