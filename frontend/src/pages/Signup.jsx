import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* Shadcn Components */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/* Toast & lucide-react comps & spinners*/
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import toast from "react-hot-toast";
import { CircleLoader } from "react-spinners";

/* Context & api functions*/
import { AppContext } from "@/context/context";
import { signUpHandler } from "./utils/utils";

/* Main Component */
const SignupForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { pageLoading, setPageLoading } = useContext(AppContext);

  useEffect(() => {
    setPageLoading(true);
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    } else {
      setPageLoading(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    /* Fetch */
    const response = await signUpHandler(userData);

    if (response.status == 201) {
      navigate("/login");
    } else {
      toast.error(response.msg);
    }

    setUserData({
      username: "",
      email: "",
      password: "",
    });
    setLoading(false);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  if (pageLoading) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <CircleLoader size={400} />;
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-[Helvetica]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="username"
                  name="username"
                  value={userData.username}
                  placeholder="Enter your username"
                  className="pl-10"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  value={userData.email}
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  value={userData.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center text-sm text-gray-600">
          <div>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-black hover:underline font-medium"
            >
              Sign in
            </Link>
          </div>
          {/* <div className="text-xs">
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-black hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-black hover:underline">
              Privacy Policy
            </a>
          </div> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupForm;
