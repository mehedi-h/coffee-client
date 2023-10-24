import { useContext } from "react";
import { authContext } from "../Providers/AuthProviders";

const Signin = () => {

    const { signInUser } = useContext(authContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser( email, password )
        .then(result => {
            console.log(result.user);
            const user = {
                email,
                lastLogIn: result.user?.metadata?.lastSignInTime
            }
            fetch(`https://coffee-server-ftz8lwl7e-m-h-shamims-projects.vercel.app/user`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        })
        .catch(error => {
            console.error(error);
        })
    }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-1/3">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
                <h1 className="my-5 text-gray-700 text-4xl font-bold">Login now!</h1>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
