
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/Auth/LoginReg";
import ResetPassword from "./components/pages/Auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/Auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg/>} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail/>} />
            <Route path="reset" element={<ResetPassword/>} />
          </Route>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="*" element={<h1>404 : ERROR : Page not found !! </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
