import { useState } from "react";
import loginMobile from "../../assets/images/smLogin.png";
import Form from "../Shared/Form";

const LoginMobile = ({signUp,setSignUp}) => {
    const [popup,setPopup]=useState(false);

    const handlePopup=()=>
    {
        setPopup(true);
    }
  return (
    <div className="block lg:hidden relative min-h-screen poppins">
      <img
        src={loginMobile}
        alt=""
        className="absolute -z-10 w-full h-full"
      />

      <div className="absolute z-20 h-full w-full ">
        <img src="/LOGO.png" alt="Logo" className="flex mx-auto mt-12 animate__slideInDown animate__animated" />

        {!popup?
        <>
        <h3 className="font-semibold text-xl text-[#1A2531] text-center mt-4 animate__animated animate__zoomIn">
          Sign In To Your Account
        </h3>
        <p className="text-[#D1D1D1] text-center mt-4  text-sm animate__animated animate__zoomIn">
              Welcome Back! By click the sign up button, you're agree to
              Zenitood Terms and Service and acknowledge the{" "}
              <span className="text-light underline cursor-pointer">
                Privacy and Policy
              </span>
            </p>
            <div className="bg-[#1F2833B3] text-center py-6 mx-auto mt-16 px-8 w-fit rounded-[10px] animate__animated animate__slideInUp">
                <p className="text-[#156BCA] font-semibold animate-pulse cursor-pointer link-hover" onClick={handlePopup}>Create Account</p>
                <p className="text-white font-medium">
                  Fill in Your Information
                </p>
              </div></>:signUp?<p className="font-medium mt-4 text-white text-center animate__animated animate__zoomIn mb-8">Create Account <br />
              Fill in Your Information</p>:<p className="font-medium mt-4 text-white text-center animate__animated animate__zoomIn mb-8">Sign In to view all the <br /> massage therapists</p>}

            {
                popup && <div className="animate__animated animate__slideInUp bg-white h-full px-2 pt-6 rounded-t-3xl">
                    {signUp? <p className="text-2xl font-semibold my-8 text-center">Sign In</p>:
                    <div className="mt-8 mb-12 text-center">
                        <p className="text-2xl font-semibold mb-2">Log In To Your Account</p>
                        <p className="text-sm text-[#5C635A]">Welcome Back! Select a method to log in:</p>
                        </div>}
                <Form signUp={signUp} setSignUp={setSignUp}></Form>
                </div>
            }
      </div>
    </div>
  );
};

export default LoginMobile;
