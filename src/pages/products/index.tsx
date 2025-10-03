import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductPage = () => {
  const { push } = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    if (!isLogin) {
      push('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>ProductPage</div>;
};

export default ProductPage;
