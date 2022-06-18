export interface PostProps {
    id: string;
    createdAt: string;
    image?: string;
    images?: string[];
    video?: string;
    description: string;
    user: UserProps;
    nofComments: number;
    nofLikes: number;
    comments: CommentProps[];
   }
   
   export interface UserProps {
    id: string;
    username: string;
    image?: string;
    name: string;
    bio?: string;
    posts?: PostProps[];
    website?: string;
   }
   
   export interface CommentProps {
    id: string;
    comment: string;
    user: UserProps;
   }