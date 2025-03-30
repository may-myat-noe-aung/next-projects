import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return (
    <div>
      <h1 className="text-3xl border mt-5 p-5 font-bold">
        {" "}
        My Product - {params.id}{" "}
      </h1>
      <div>
        <h3 className="text-2xl my-2 font-semibold">{data.title}</h3>
        <p>{data.description}</p>
        <Image src={data.images[0]} alt={data.title} width={300} height={300} />
        <Link href="/products" className="text-blue-500 underline">
          Back to products
        </Link>
      </div>
    </div>
  );
}
