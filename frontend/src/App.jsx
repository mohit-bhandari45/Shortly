import LandingPage from "@/pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import DashBoard from "./pages/DashBoard";
import { Toaster } from "react-hot-toast";
import URLs from "./pages/URLs";
import Notifications from "./pages/Notifications";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/urls" element={<URLs />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
