import { useState } from "react";
import LoginMobile from "../components/Mobile/LoginMobile";
import LoginPC from "../components/PC/LoginPC";


const Login = () => {
  const [signUp, setSignUp] = useState(true);

    return (
        <div>
            <LoginPC setSignUp={setSignUp} signUp={signUp}></LoginPC>
            <LoginMobile setSignUp={setSignUp} signUp={signUp}></LoginMobile>
        </div>
    );
};

export default Login;