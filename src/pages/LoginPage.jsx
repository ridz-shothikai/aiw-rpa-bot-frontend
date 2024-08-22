import { useState } from "react";
import logo from "../assets/logo.png";
import googleLogo from "../assets/google.svg";
import microsoftLogo from "../assets/Microsoft_Logo.png";
import bankAsiaLogo from "../assets/bankAsiaLogo.svg";
import bankDrawLogo from "../assets/bankdraw.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email & password for api call:", email, password);
  };

  return (
    <div className="grid md:grid-cols-2 bg-[#f7fffd]">
      <div>
        <div className="shadow-xl rounded-lg m-10 p-8 md:ml-2 bg-[#f9f9f9]">
          <div className="flex justify-center mb-5">
            <img src={logo} alt="brand-logo" />
          </div>
          <h1 className="text-center font-bold text-3xl text-[#441151] mb-10">
            Login to your account
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1" htmlFor="email">
                Email
              </label>
              <div className="relative w-full mb-5">
                <input
                  type="email"
                  className="w-full px-3 py-3 bg-[#e8f0fe] rounded-none focus:outline-none focus:ring-0"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#02839f]transition-all duration-500 ease-out input-progress"></span>
              </div>
            </div>
            <div>
              <label className="block mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative w-full">
                <input
                  id="password"
                  type="text"
                  className="w-full px-3 py-3 bg-[#e8f0fe] rounded-none focus:outline-none focus:ring-0"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#02839f]transition-all duration-500 ease-out input-progress"></span>
              </div>
            </div>

            <div className="mt-5">
              <button className="bg-[#02839f] rounded-md py-2 w-full font-bold text-white cursor-pointer">
                Log In
              </button>
            </div>
            <div className="flex-col xl:flex-row flex xl:space-x-3 xl:space-y-0 mt-5 space-y-3">
              <button
                className="flex-1 items-center justify-center border border-[#02839f] text-[#02839f] p-2 rounded-md "
                disabled
              >
                <div className="flex justify-center items-center space-x-3 ">
                  <img src={googleLogo} alt="google-icon" />
                  <span>Continue with Google</span>
                </div>
              </button>
              <button
                className="flex-1 items-center justify-center border border-[#02839f] text-[#02839f] p-2 rounded-md"
                disabled
              >
                <div className="flex justify-center items-center space-x-3 ">
                  <img
                    className="w-5 h-5"
                    src={microsoftLogo}
                    alt="microsoft-icon"
                  />
                  <span>Continue with Microsoft</span>
                </div>
              </button>
            </div>
          </form>
          <div className="mt-5 flex flex-col items-center justify-center">
            <p className="text-sm font-normal">Powered By</p>
            <img src={logo} width={70} height={48} alt="brand-logo-small" />
          </div>
        </div>
      </div>
      <div className="pt-10 pr-8 hidden md:block">
        <div className="flex justify-end">
          <img src={bankAsiaLogo} alt="" />
        </div>
        <div className="mt-8">
          <h1 className="text-4xl font-semibold">
            Smart <span className="text-[#2160af]">Banking Portal</span>
          </h1>
          <p className="text-xl font-semibold my-2">
            Welcome, Bank Asia Agents!
          </p>
          <p className="text-lg">
            Securely access your portal to ease banking experience.
          </p>
          <div className="mt-10 h-[400px] flex items-center">
            <img
              className="w-full h-auto align-middle"
              src={bankDrawLogo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
