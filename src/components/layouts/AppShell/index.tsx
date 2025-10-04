import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavigation = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { pathname } = useRouter();

  const showNavigation = !disableNavigation.includes(pathname);

  const { children } = props;
  return (
    <main>
      {showNavigation && <Navbar />}
      {children}
      {showNavigation && <Footer />}
    </main>
  );
};

export default AppShell;
