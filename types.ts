export interface MuralProject {
  id: number;
  title: string;
  location: string;
  year: string;
  imageUrl: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export enum ImageSize {
  OneK = "1K",
  TwoK = "2K",
  FourK = "4K"
}

export enum AspectRatio {
  Square = "1:1",
  Landscape = "16:9",
  Portrait = "9:16"
}
