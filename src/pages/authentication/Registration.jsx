import { Link } from "react-router-dom";
import login from '../../../public/login.svg'
import useAuth from "../../hooks/useAuth";

const Registration = () => {
    const { createUser } = useAuth();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                alert('Success')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
            form.email.value = ''
            form.password.value = ''
    }


    return (
        <div className="hero min-h-[calc(100vh-90px)] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card card-body shrink-0 lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full name" className="input input-bordered" />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600 ">Already have an account?
                        <Link to='/login' className="text-base text-violet-700"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;