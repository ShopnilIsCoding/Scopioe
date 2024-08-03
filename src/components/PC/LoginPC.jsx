
import lgLogin from "../../assets/images/lgLogin.png";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Form from "../Shared/Form";

// eslint-disable-next-line react/prop-types
const LoginPC = ({signUp,setSignUp}) => {
 

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

          <Form signUp={signUp} setSignUp={setSignUp}></Form>
          
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
