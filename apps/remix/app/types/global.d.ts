declare interface Menu {
  menu: {
    id: number;
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    sitemap_exclude: boolean;
    items: [];
  };
}
