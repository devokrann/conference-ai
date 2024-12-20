export interface Speaker {
  name: string;
  bio: string[];
  occupation: { position?: string; pow?: string; image?: string };
  image: string;
  poster: string;
  contact?: {
    email: string;
    phone?: string | string[];
    socials?: { label: string; link: string }[];
  } | null;
  category: string[];
}
