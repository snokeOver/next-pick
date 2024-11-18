"use client";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { getProducts } from "@/lib/api/getProducts";
import { Product } from "@/type-props/interfaces";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const MovieDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [crurProduct, setCurrProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getItems = async () => {
      const product = await getProducts();

      setCurrProduct(product.find((item) => item.id == id) || null);
      setIsLoading(false);
    };

    getItems();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!crurProduct) {
    console.error("Movie details not found");
    return;
  }

  const { image, title, description, rating, category, price } = crurProduct;

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
          <h2 className="text-2xl font-semibold decoration-[1px]">{title}</h2>
          <p className="text-sm leading-6 tracking-wide mt-2 flex-grow">
            {description}
          </p>

          <p className="text-gray-600 text-sm">
            Category:
            {
              <span className="text-secondary-text font-medium ml-1">
                {category}
              </span>
            }
          </p>

          <p className="text-gray-600 text-sm">
            Price:
            <span className="text-secondary-text font-medium"> ${price}</span>
          </p>

          <div className="text-gray-600 text-sm">
            <Rating style={{ maxWidth: 250 }} value={Math.floor(rating.rate)} />
          </div>

          {/* <div>
            <WishListActionButtons movie={wishedMovie} />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
