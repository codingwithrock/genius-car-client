import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import login from '../../assets/images/login/login.svg'
const Login = () => {

    const {signUpWithEmail } = useContext(AuthContext);


    // Getting Location 
    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const onSubmitForm = (event)=> 
    {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signUpWithEmail(email,password)
        .then(res=> {
            // alert('login successful')
            navigate(from, {replace: true})
            console.log(res);
        })
        .catch(error=> alert(error))
    }



    return (
        <div className="hero bg-base-200">
            <div className="hero-content grid grid-cols-2">
                <div className="">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
                    <form onSubmit={onSubmitForm}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="# "  className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn  bg-red-500">Login</button>
                        </div>
                    </form>
                    <p className='mt-2'>New to Genius Car? <Link to='/register' className='text-orange-600'> Sign UP</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;