import Banner from "@/components/shared/Banner";
import { getProducts } from "@/lib/api/getProducts";

const Home = async () => {
  const product = await getProducts();

  return (
    <main>
      {/* Banner section */}
      <Banner bannerItmes={product} />
    </main>
  );
};

export default Home;
