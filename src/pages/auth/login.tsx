import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    push('/products');
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()} className="cursor-pointer">
        LOGIN
      </button>
      <p>
        Belum punya akun silahkan Register <Link href={'/auth/register'}>DISINI</Link>
      </p>
    </div>
  );
};

export default LoginPage;
