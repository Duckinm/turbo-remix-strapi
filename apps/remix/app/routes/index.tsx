// http://localhost:1337/api/menus/footer

import type { LoaderFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { Link, useLoaderData } from "@remix-run/react";

import { getAllPages } from "~/utils/api";

export const loader: LoaderFunction = async () => {
  const pages = await getAllPages();
  return pages;
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      {/* <pre>{JSON.stringify(data.data, null, 2)}</pre> */}
      {data.data.map((page) => (
        <div key={page.id}>
          <Link to={`/${page.attributes.slug}`}>
            <h2>{page.attributes.shortName}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
