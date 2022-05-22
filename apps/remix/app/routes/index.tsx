// http://localhost:1337/api/menus/footer

import type { LoaderFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";

import { Footer } from "~/components/sections/Footer";
import { Navbar } from "~/components/sections/Navbar";
import { getFooter, getMenu } from "~/utils/api";

export const loader: LoaderFunction = async () => {
  return null;
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
