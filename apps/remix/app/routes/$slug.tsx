// getPageData

import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getSinglePage } from "~/utils/api";

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug;

  if (!slug) {
    throw new Error("slug not found");
  }

  const page = await getSinglePage(slug);

  if (!page) {
    throw new Response("page Not Found", { status: 404 });
  }

  return page;
};

export default function Page() {
  const data = useLoaderData();
  return (
    <>
      <div>
        <h1>Page</h1>
        <pre>{JSON.stringify(data.data, null, 2)}</pre>
      </div>
    </>
  );
}
