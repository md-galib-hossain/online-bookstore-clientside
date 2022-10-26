import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  //   Get user information by google signin
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-100 "
                  required
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-100"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className=" text-center  mt-6">
                <button className="btn btn-primary w-100">Login</button>
              </div>
              <ButtonGroup vertical>
                <Button
                  onClick={handleGoogleSignIn}
                  className="mb-2"
                  variant="outline-primary"
                >
                  <FaGoogle className="d-inline me-3" />
                  Login With Google
                </Button>
                <Button variant="outline-dark">
                  <FaGithub className="d-inline me-3" />
                  Login With Github
                </Button>
              </ButtonGroup>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
