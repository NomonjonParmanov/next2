import Header from "@/components/header/Header";
import ProductsWrapper from "@/components/productsWrapper/ProductsWrapper";
async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=12&skip=59");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Home = async () => {
  let data = await getData();
  return (
    <div>
      <Header />
      <ProductsWrapper data={data} />
    </div>
  );
};
export default Home;
