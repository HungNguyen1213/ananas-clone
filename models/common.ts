import { StaticImageData } from "next/image";

export interface SeoData {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
  leftIcon?: any;
  rightIcon?: any;
}

export interface BannerItem {
  label?: string;
  href: string;
  image: StaticImageData;
  description?: string;
}
