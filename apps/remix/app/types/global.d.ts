export interface StructuredData {
  Test: string;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Attributes2 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface MetaImage {
  data: Data;
}

export interface Large2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats2 {
  large: Large2;
  small: Small2;
  medium: Medium2;
  thumbnail: Thumbnail2;
}

export interface Attributes3 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data2 {
  id: number;
  attributes: Attributes3;
}

export interface StrapiImage {
  data: Data2;
}

export interface MetaSocial {
  id: number;
  socialNetwork: string;
  title: string;
  description: string;
  image: StrapiImage;
}

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string;
  structuredData: StructuredData;
  metaViewport: string;
  canonicalURL: string;
  metaImage: MetaImage;
  metaSocial: MetaSocial[];
}

export interface Button {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  title: string;
  type: string;
}

export interface Large3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats3 {
  large: Large3;
  small: Small3;
  medium: Medium3;
  thumbnail: Thumbnail3;
}

export interface Attributes4 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats3;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data3 {
  id: number;
  attributes: Attributes4;
}

export interface Logo {
  data: Data3;
}

export interface Large4 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small4 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium4 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail4 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats4 {
  large: Large4;
  small: Small4;
  medium: Medium4;
  thumbnail: Thumbnail4;
}

export interface Attributes5 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats4;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data4 {
  id: number;
  attributes: Attributes5;
}

export interface MobileLogo {
  data: Data4;
}

export interface Link2 {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  title: string;
}

export interface Link {
  id: number;
  url: string;
  title: string;
  text: string;
  newTab: boolean;
  links: Link2[];
}

export interface Navbar {
  id: number;
  button: Button;
  logo: Logo;
  mobileLogo: MobileLogo;
  links: Link[];
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface StrapiImage {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data5 {
  id: number;
  attributes: StrapiImage;
}

export interface Logo2 {
  data: Data5;
}

export interface Link3 {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  title: string;
}

export interface Column {
  id: number;
  title: string;
  links: Link3[];
}

export interface StrapiFooter {
  id: number;
  smallText: string;
  logo: Logo2;
  columns: Column[];
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  SEO: SEO;
  navbar: Navbar;
  footer: StrapiFooter;
}

export interface StrapiGlobal {
  id: number;
  attributes: Attributes;
}
