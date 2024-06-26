import { Routes, Route } from 'react-router-dom';
import './globals.css';
import { Home } from './_root/pages';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/forms/AuthLayout';
import RootLayout from './_root/pages/RootLayout';
const App = () => {
    return (
       <main className='flex h-screen'>
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
          <Route path="/sign-in"  element={<SignInForm />}/>
          <Route path="/sign-up"  element={<SignUpForm />}/>
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />} >
          <Route index  element={<Home />}/>
          </Route>
        </Routes>
        </main>
    )
}

export default App