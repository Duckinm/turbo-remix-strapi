// http://localhost:1337/api/menus/footer

import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { Link, useLoaderData } from "@remix-run/react";

import { Footer } from "~/components/sections/Footer";
import { Navbar } from "~/components/sections/Navbar";
import type { StrapiGlobal } from "~/types/global";
import type { Page } from "~/types/page";
import { getAllPages, getGlobals, getGlobalsDeep } from "~/utils/api";

type LoaderData = {
  pages: Page[];
  global: StrapiGlobal;
};

export const loader: LoaderFunction = async () => {
  const pages = await getAllPages();
  const global = await getGlobalsDeep();
  // const global = await getGlobals()
  return json({ pages, global });
};

export default function Index() {
  const { pages, global } = useLoaderData<LoaderData>();
  return (
    <div>
      {/* <Navbar data={global.attributes.navbar} /> */}
      {pages.map((page) => (
        <div key={page.id}>
          <Link to={`/${page.attributes.slug}`}>
            <h2>{page.attributes.shortName}</h2>
          </Link>
        </div>
      ))}
      <Footer data={global.attributes.footer} />
    </div>
  );
}
