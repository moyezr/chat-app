
import Image from "next/image";
import AuthForm from "./components/AuthForm";
import { TbBrandHipchat } from "react-icons/tb"
const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-900
        text-white
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        /> */}
        <TbBrandHipchat
          size={60}
          className="mx-auto text-blue-500"
        />
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-white
          "
          >
            Sign in to your account
        </h2>
      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;