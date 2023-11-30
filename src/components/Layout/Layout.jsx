import { MyAppBar } from '../MyAppBar/MyAppBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <MyAppBar />
      </header>
      <main>
        <main>{children}</main>
      </main>
    </div>
  );
};
