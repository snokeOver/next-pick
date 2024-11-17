import { Product } from "@/type-props/interfaces";

const fetcher = async <T>(url: URL, cacheTime?: number): Promise<T> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: {
      cache: "force-cache",
      revalidate: cacheTime || 3600,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as T;

  return data;
};

// To get products for banner cached for 24 hours
export const getProducts = async (): Promise<Product[]> => {
  const url = new URL("https://fakestoreapi.com/products");

  try {
    const data = await fetcher<Product[]>(url, 86400);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
