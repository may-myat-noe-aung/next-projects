import Image from "next/image";
import Link from "next/link";

const fetchProducts = async () => {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
};

export default async function Page() {
  const products = await fetchProducts();
  console.log(products);

  return (
    <div className=" mt-5 p-5">
      <h1 className="text-3xl  font-bold">My Product Page</h1>
      <div>
        {/* {products.map((product) => {
          return (
            <div key={product.id} className="border p-5 mt-5">
              <h2 className="text-xl mb-3 font-bold">{product.title}</h2>
              <div className="flex justify-start gap-3 items-center">
                <p>{product.price} MMK</p>
                <Link
                  href={`/products/${product.id}`}
                  className="text-blue-500 px-3 py-2"
                >
                  See More...
                </Link>
              </div>
            </div>
          );
        })} */}
        {products.products.map((product) => {
          return (
            <div key={product.id} className="border p-5 mt-5">
              <h2 className="text-xl mb-3 font-bold">{product.title}</h2>
              <div className="flex justify-start gap-3 items-center">
                <div className="flex items-center justify-center gap-5">
                  <Image
                    src={product?.images?.[0]}
                    width={100}
                    height={100}
                    alt="products image"
                  />
                  <div>
                    <p>{product.price} MMK</p>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-blue-500  py-2"
                    >
                      See More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
