import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Notices} from 'components/Notices/Notices'

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Notices/>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
