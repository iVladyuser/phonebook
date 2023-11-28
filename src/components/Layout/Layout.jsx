import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MyAppBar } from '../MyAppBar/MyAppBar';

export const Layout = () => {
  return (
    <>
      <header>
        <MyAppBar />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
