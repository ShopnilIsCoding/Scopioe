/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";

const Form = ({ signUp, setSignUp }) => {
  // Access authentication functions and loading state from AuthContext
  const { signIn, googleLogin, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // State for password visibility toggles
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        toast.success("Successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.warning("Invalid Credentials");
      });
  };

  // Handle registration form submission
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    const rePassword = form.get("rePassword");
    const acceptTerms = form.get("acceptTerms");

    // Validate passwords match
    if (password !== rePassword) {
      toast.warning("Passwords do not match");
      return;
    }

    // Validate terms acceptance
    if (!acceptTerms) {
      toast.warning("You must accept the terms of service");
      return;
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 6 characters and contain at least one uppercase and one lowercase letter.');
      return;
    }

    // Create user and update profile
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            toast.success('Registered Successfully');
            window.location.reload();
          })
          .catch((err) => {
            console.error(err);
            toast.error('Failed to update profile');
          });
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to register');
      });
  };

  return (
    <div>
      {/* Third-party login buttons */}
      {!signUp && (
        <>
          <div className="flex justify-around items-center my-8">
            <button
              onClick={() => googleLogin()
                .then(() => {
                  toast.success("Successfully logged in");
                  navigate(location?.state ? location.state : '/');
                })}
              className="flex items-center gap-2 bg-[linear-gradient(91deg,_#E4E4E4_3.94%,_#FFF9_69.53%)] shadow-[0px_4px_7px_0px_rgba(131,131,131,0.23)] px-4 lg:px-10 py-4 rounded-[6px]"
            >
              <FcGoogle className="text-3xl" />
              <span className="text-xl font-semibold"> Google</span>
            </button>
            <button className="flex items-center gap-2 px-4 lg:px-10 py-4 rounded-[10px] bg-[linear-gradient(89deg,_#298FFF_0.18%,_#0778F5_79.28%)] text-white ">
              <FaFacebookF className="text-2xl" />
              Facebook
            </button>
          </div>
          <p className="text-[#5C635A] text-center mb-4">Or Continue with Email</p>
        </>
      )}

      {/* Form start */}
      <form action="" className="space-y-4" onSubmit={signUp ? handleRegister : handleLogin}>
        {signUp && (
          <>
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="@username"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <span className="label-text font-medium">Profile Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Profile Photo URL"
              className="input input-bordered w-full"
            />
          </>
        )}
        <label className="label">
          <span className="label-text font-medium">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          required
        />
        <div className="relative">
          <label className="label">
            <span className="label-text font-medium mb-4">Password</span>
          </label>
          <input
            type={visible ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            required
          />
          {visible ? (
            <IoEyeOutline
              onClick={() => setVisible(!visible)}
              className="absolute z-20 cursor-pointer right-2 top-[60%] translate-y-[50%]"
            />
          ) : (
            <IoEyeOffOutline
              onClick={() => setVisible(!visible)}
              className="absolute z-20 cursor-pointer right-2 top-[60%] translate-y-[50%]"
            />
          )}
        </div>

        {signUp && (
          <div className="relative">
            <label className="label">
              <span className="label-text font-medium mb-4">Re-type Password</span>
            </label>
            <input
              type={visible2 ? "text" : "password"}
              name="rePassword"
              placeholder="Re-type password"
              className="input input-bordered w-full"
              required
            />
            {visible2 ? (
              <IoEyeOutline
                onClick={() => setVisible2(!visible2)}
                className="absolute z-20 cursor-pointer right-2 top-[60%] translate-y-[50%]"
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => setVisible2(!visible2)}
                className="absolute z-20 cursor-pointer right-2 top-[60%] translate-y-[50%]"
              />
            )}
          </div>
        )}

        {signUp ? (
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="acceptTerms"
              className="checkbox checkbox-info"
              required
            />
            <p className="text-light">Accept Terms of Service</p>
          </div>
        ) : (
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="checkbox" />
              <p className="text-[#5C635A]">Remember me</p>
            </div>
            <p className="text-[#156BCA] underline cursor-pointer">Forgot Password?</p>
          </div>
        )}
        <button
          type="submit"
          className="btn bg-light text-white px-10 w-[200px] py-4 flex mx-auto"
        >
          {signUp ? "Sign up" : "Sign in"}
        </button>
      </form>

      <p className="mx-auto w-fit mt-4">
        {signUp ? "Already Have an Account? " : "Don’t Have an Account? "}
        <Link
          onClick={() => setSignUp(!signUp)}
          className="underline text-dark"
        >
          {signUp ? "Log in" : "Create Account"}
        </Link>
      </p>
    </div>
  );
};

export default Form;
