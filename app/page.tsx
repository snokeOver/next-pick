"use client";

import Banner from "@/components/shared/Banner";
import SectionContainer from "@/components/shared/SectionContainer";
import { getProducts } from "@/lib/api/getProducts";
import { Product } from "@/type-props/interfaces";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const product = await getProducts();
      setProducts(product);
      setIsLoading(false);
    };

    getItems();
  }, []);

  return (
    <main>
      {/* Banner section */}
      <Banner bannerItmes={products} />

      <div id="popular-products-section">
        <SectionContainer
          title="Popular Products"
          isLoading={isLoading}
          products={products}
        />
      </div>
    </main>
  );
};

export default Home;
