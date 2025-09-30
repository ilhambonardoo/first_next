import Navbar from '../Navbar';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
      <div className="text-2xl font-semibold ml-5">footer</div>
    </main>
  );
};

export default AppShell;
