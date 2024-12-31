import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return <div>DashBoard</div>;
};

export default DashBoard;
