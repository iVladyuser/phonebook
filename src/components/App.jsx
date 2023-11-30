import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'services/fetchAuth';

const Home = lazy(() => import('pages/HomePage'));
// const SignOut = lazy(() => import('pages/SignOutPage'));
const Register = lazy(() => import('pages/RegisterPage'));
const SignIn = lazy(() => import('pages/LogInPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
