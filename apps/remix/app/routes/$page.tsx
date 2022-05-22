// getPageData

import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ params }) => {
  params.page; // "123"
};

export default function Page() {
  return (
    <>
      <div>
        <h1>Page</h1>
      </div>
    </>
  );
}
