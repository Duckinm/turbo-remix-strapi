import qs from "qs";

export function getStrapiURL(path: string) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
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
  const menu: Menu = await fetchAPI("/menus/menu");
  const footer = await fetchAPI("/menus/footer");
  return { menu, footer };
}

export async function getAllPages() {
  const pages = await fetchAPI("/pages?populate=true");
  return pages;
}

export async function getSinglePage(slug: string) {
  const page = await fetchAPI("/pages?filters[slug][$eq]=" + slug);

  return page;
}
