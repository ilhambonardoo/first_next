import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    push("/products");
  };
  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()} className="cursor-pointer">
        LOGIN
      </button>
      <p>
        Belum punya akun silahkan Register{" "}
        <Link href={"/auth/register"}>DISINI</Link>
      </p>
    </div>
  );
};

export default LoginViews;
