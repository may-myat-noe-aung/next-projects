import Button from "@/components/Button";

export default async function Page() {
  const res = await fetch("https://fakestoreapi.com/products")
  const json = await res.json()
  console.log(json);
  return(
    <section>
      <h1>Products</h1>
      <ul>
        {json.map((product) => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
      <Button />
    </section>  
  )
}