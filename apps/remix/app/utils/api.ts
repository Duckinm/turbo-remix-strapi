export function getStrapiURL(path: string) {
  //  console.log(process.env.NEXT_PUBLIC_STRAPI_API_URL)
  return `${process.env.STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error("fetchAPI Error", response.url, response.statusText);
    throw new Error(
      `An error occured please try again ${response.status} ${response.statusText} ${response.url}`
    );
  }
  const data = await response.json();
  return data;
}

export async function getNavigation() {
  const menu: Menu = await fetchAPI("/api/menus/menu");
  const footer = await fetchAPI("/api/menus/footer");
  return { menu, footer };
}
