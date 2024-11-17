"use client";

import { getProducts } from "@/lib/api/getProducts";
import { Product, ProductDetailsProps } from "@/type-props/interfaces";
// import { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Next Pick || Product Details page",
// };

const MovieDetails = ({ params: { id } }: ProductDetailsProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [crurProduct, setCurrProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const product = await getProducts();

      setCurrProduct(product.filter((item) => item.id === id));
      setIsLoading(false);
    };

    getItems();
  }, []);

  if (!crurProduct) {
    console.error("Movie details not found");
    return;
  }

  const { image, title, description, rating, genres, category, price } =
    crurProduct[0];

  //   const wishedMovie = { image, title, id, release_date, genres };

  return (
    <div className="py-10 px-3 md:px-10 min-h-[500px]">
      <section className=" flex flex-col lg:flex-row items-center gap-5 mb-20 lg:mb-32">
        <div className="w-full rounded-md overflow-hidden group  flex-1">
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
          />
        </div>
        <div className="w-full flex flex-col gap-2 flex-1 h-auto ">
          <h2 className="text-2xl font-semibold underline decoration-[1px]">
            {title}
          </h2>
          <p className="text-sm leading-6 tracking-wide mt-2 flex-grow">
            {description}
          </p>

          <p className="text-gray-600 text-sm">
            Genres:{" "}
            {/* {genres.map((item: Genre) => (
              <span
                key={item?.id}
                className="text-secondary-text font-medium mr-1"
              >
                {item?.name},
              </span>
            ))} */}
          </p>

          <p className="text-gray-600 text-sm">
            Release Data:{" "}
            <span className="text-secondary-text font-medium">{price}</span>
          </p>

          <p className="text-gray-600 text-sm">Cast:</p>

          {/* <div>
            <WishListActionButtons movie={wishedMovie} />
          </div> */}
        </div>
      </section>
    </div>
  );
};

// Exporting revalidate settings directly from the page component
export const revalidate = 60; // Revalidate every 60 seconds

export default MovieDetails;
