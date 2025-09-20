import { useRouter } from 'next/router';
// Dynamic ROUTING
const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>DetailProductPage</h1>
      <p> Product : {query.product}</p>
    </div>
  );
};

export default DetailProductPage;
