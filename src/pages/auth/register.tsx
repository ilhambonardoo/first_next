import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        Sudah punya akun silahkan login <Link href={'/auth/login'}>DISINI</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
