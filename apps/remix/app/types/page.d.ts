export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords?: any;
  metaRobots?: any;
  structuredData?: any;
  metaViewport?: any;
  canonicalURL?: any;
}

export interface Component {
  id: number;
  __component: string;
  title: string;
  content: string;
  label?: any;
  description: string;
  smallTextWithLink: string;
}

export interface Attributes {
  shortName: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  SEO: SEO;
  Components: Component[];
}

export interface Page {
  id: number;
  attributes: Attributes;
}
