declare interface Menu {
  menu: {
    id: number;
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    sitemap_exclude: boolean;
    items: MenuItem[];
  };
}

declare interface MenuItem {
  id: number;
  order: number;
  title: string;
  url: string;
  target: string;
  createdAt: string;
  updatedAt: string;
  sitemap_exclude: boolean;
  parent: unknown;
}
