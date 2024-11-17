import { SectionContainerProps } from "@/type-props/interfaces";
import LoadingSpinner from "./LoadingSpinner";
import ItemCard from "./ItemCard";

const SectionContainer = ({
  title,
  isLoading,
  products,
}: SectionContainerProps) => {
  return (
    <div className="container mx-auto">
      {/* Popular movies */}

      <div className="flex text-center justify-center w-full text-2xl lg:text-4xl font-bold my-10">
        <h1 className="border-dashed border-y-2 py-2 border-sky-500 px-5">
          {title}
        </h1>
      </div>
      {isLoading && <LoadingSpinner />}
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] p-7 lg:p-3">
        {products.map((item, index) => (
          <ItemCard key={index.toString()} item={item} />
        ))}
      </div>

      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default SectionContainer;
