import { useState } from "react";
import lgLogin from "../../assets/images/lgLogin.png";
import dots from "../../assets/images/dots.svg";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const LoginPC = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="mx-auto container hidden lg:block p-12 ">
      <div className="flex justify-between items-center gap-[10%] poppins ">
        <div className="w-[40%]">
          <img src="/LOGO.png" alt="Logo" />
          <h2 className="poppins text-2xl font-semibold mt-7 mb-4">
            {signUp ? "Sign In" : "Log In"} To Your Account
          </h2>
          {signUp ? (
            <p className="text-[#5C635A] text-sm">
              Welcome Back! By click the sign up button, you're agree to
              Zenitood Terms and Service and acknowledge the{" "}
              <span className="text-light underline cursor-pointer">
                Privacy and Policy
              </span>
            </p>
          ) : (
            <p className="text-[#5C635A] text-sm">
              Welcome Back! Select a method to log in:
            </p>
          )}

          {!signUp && (
            <><div className=" flex justify-around items-center my-8">
              
            <button className="flex items-center gap-2 bg-[linear-gradient(91deg,_#E4E4E4_3.94%,_#FFF9_69.53%)] shadow-[0px_4px_7px_0px_rgba(131,131,131,0.23)] px-10 py-4 rounded-[6px]"><FcGoogle className="text-2xl" />Google</button>
            <button className="flex items-center gap-2 px-10 py-4 rounded-[10px] bg-[linear-gradient(89deg,_#298FFF_0.18%,_#0778F5_79.28%)] text-white"><FaFacebookF className="text-2xl"/>Facebook</button>
          </div>
          <p className="text-[#5C635A] text-center mb-4">Or Continue with Email</p></>
          )}

          {/* form start */}

          <form action="" className="space-y-4">
            {signUp && (
              <>
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="@username"
                  className="input input-bordered w-full"
                  required
                />
              </>
            )}
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
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
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              {visible ? (
                <IoEyeOutline
                  onClick={() => {
                    setVisible(!visible);
                  }}
                  className="absolute z-20 cursor-pointer  right-2 top-[60%] translate-y-[50%]"
                />
              ) : (
                <IoEyeOffOutline
                  onClick={() => {
                    setVisible(!visible);
                  }}
                  className="absolute z-20 cursor-pointer  right-2 top-[60%] translate-y-[50%]"
                />
              )}
            </div>

            {signUp ? (
              <div className="relative">
                <label className="label">
                  <span className="label-text font-medium mb-4">Password</span>
                </label>
                <input
                  type={visible2 ? "text" : "password"}
                  placeholder="Re-type password"
                  className="input input-bordered w-full"
                  required
                />
                {visible2 ? (
                  <IoEyeOutline
                    onClick={() => {
                      setVisible2(!visible2);
                    }}
                    className="absolute z-20 cursor-pointer  right-2 top-[60%] translate-y-[50%]"
                  />
                ) : (
                  <IoEyeOffOutline
                    onClick={() => {
                      setVisible2(!visible2);
                    }}
                    className="absolute z-20 cursor-pointer  right-2 top-[60%] translate-y-[50%]"
                  />
                )}
              </div>
            ) : (
              <></>
            )}
            {signUp ? (
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  required
                  className="checkbox  checkbox-info"
                />{" "}
                <p className="text-light ">Accept Terms of Service</p>
              </div>
            ) : (
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" required className="checkbox  " />
                  <p className="text-[#5C635A] ">Remember me</p>
                </div>
                <p className="text-[#156BCA] underline cursor-pointer">
                  Forgot Password?
                </p>
              </div>
            )}
            <button
              type="submit"
              className="btn bg-light text-white px-10 w-[200px] py-4 flex  mx-auto"
            >
              {signUp ? "Sign up" : "Sign in"}
            </button>
          </form>

          <p className="mx-auto w-fit mt-4">
            {signUp ? "Already Have an Account? " : "Don’t Have an Account? "}
            <Link
              onClick={() => {
                setSignUp(!signUp);
              }}
              className="underline text-dark"
            >
              {signUp ? "Log in" : "Create Account"}
            </Link>
          </p>

          {/* form end  */}
        </div>

        <div className="relative w-[50%] ">
          <Swiper
            pagination={true}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={lgLogin} alt="Background image goes here" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={lgLogin} alt="Background image goes here" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={lgLogin} alt="Background image goes here" />
            </SwiperSlide>
          </Swiper>
          <div className="min-h-[20%] w-1/2 absolute z-20 bottom-[50%] left-[50%] -translate-x-[50%] rounded-[10px] translate-y-[50%] bg-[#152a16bc] poppins text-xl p-8 flex flex-col justify-center items-center text-center">
            {signUp ? (
              <>
                <p className="text-[#156BCA] font-semibold">Create Account</p>
                <p className="text-white font-medium">
                  Fill in Your Information
                </p>
              </>
            ) : (
              <p className="text-white font-semibold tracking-wider">
                <span className="text-[#156BCA] ">Sign In</span> to view all the
                massage therapists
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPC;
