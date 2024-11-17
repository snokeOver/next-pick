"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";

import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { Product } from "@/type-props/interfaces";
import { Button } from "../ui/button";

interface ItemsWrapper {
  key: string;
  item: Product;
}

const ItemCard = ({ item }: ItemsWrapper) => {
  const { title, image, price, id, category } = item;
  const router = useRouter();

  //   Handle the view details button click
  const handleButton = (id: string) => {
    router.push(`/product/${id}`);
  };
  return (
    <Card className="flex flex-col flex-shrink-0 cursor-pointer hover:drop-shadow-lg">
      <CardContent>
        <div className="relative w-full">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="rounded-xl rounded-b-none transform hover:scale-105 transition duration-500 ease-out h-[350px] mt-3"
          />
          <div className="absolute top-4 right-4 bg-transparent z-20  text-gray-900">
            <h2 className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-3 py-1">
              Price:
              <span className="text-primary-border font-semibold px-1">
                $ {price.toFixed(1)}
              </span>
            </h2>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-col gap-1 h-full">
        <div className="flex flex-col gap-2 items-start w-full flex-grow">
          <h3 className="text-md w-full text-primary-text">{title}</h3>
        </div>
        <h3 className="w-full">Release: {category}</h3>

        <div className="w-full">
          <Button
            onClick={() => handleButton(id)}
            variant={"outline"}
            className="w-full mt-3"
          >
            <Eye className="text-primary-bg" /> View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
