import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  productName: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const { push } = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setLogin] = useState(false);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((response) => setProducts(response.data));
  });

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>{product.productName}</div>
      ))}
    </div>
  );
};

export default ProductPage;
