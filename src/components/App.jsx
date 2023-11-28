import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const SignOutPage = lazy(() => import('pages/SignOutPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" elements={<HomePage />} />
          <Route path="/contacts" elements={<ContactsPage />} />
          <Route path="/register" elements={<SignOutPage />} />
          <Route path="/login" elements={<SignInPage />} />
          <Route path="*" elements={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
