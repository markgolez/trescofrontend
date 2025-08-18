import { CreatedModified } from '../../createdModified';
import { UserReadSerializer } from '../user';

export interface PostCategory extends CreatedModified {
  name: string;
  description: string;
  is_active: boolean;
  post_count: number;
}

export interface Post extends CreatedModified {
  user: UserReadSerializer;
  category: PostCategory;
  content: string;
  content_type: string;
  media_file: string;
  link_url: string;
  is_public: boolean;
  is_deleted: boolean;
  comment_count: number;
  share_count: number;
  agree_count: number;
  disagree_count: number;
  neutral_count: number;
  like_count: number;
  heart_count: number;
}

export interface Comment extends CreatedModified {
  post: Post;
  user: UserReadSerializer;
  content: string;
  parent: Comment | null;
  is_deleted: boolean;
  agree_count: number;
  disagree_count: number;
  neutral_count: number;
  like_count: number;
  heart_count: number;
}

export interface Like extends CreatedModified {
  post: Post;
  user: UserReadSerializer;
}

export interface Share extends CreatedModified {
  original_post: Post;
  user: UserReadSerializer;
  caption: string;
}

export interface Hashtag extends CreatedModified {
  name: string;
  post_count: number;
  is_active: boolean;
}

export interface PostHashtag extends CreatedModified {
  post: Post;
  hashtag: Hashtag;
}

export interface Agreement extends CreatedModified {
  post: Post | null;
  comment: Comment | null;
  user: UserReadSerializer;
  agreement_type: string;
}

export interface Reaction extends CreatedModified {
  post: Post | null;
  comment: Comment | null;
  user: UserReadSerializer;
  reaction_type: string;
}