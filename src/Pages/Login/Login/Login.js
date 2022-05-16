import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../../Shared/Loading';
import { Link } from 'react-router-dom';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  if (loading || gLoading) {
    return <Loading></Loading>
  }
  let singInError;
  if (error || gError) {
    singInError = <p className='text-red-500'>{error.message}</p>
  }
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
    console.log(data)
  };
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="text-center text-2xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please Enter your email"
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Provide a valid email'
                  }
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please Enter your password"
                  },
                  minLength: {
                    value: 6,
                    message: 'Provide a valid password'
                  }
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            <input type="submit" value="Login" className='btn btn-block' />
          </form>
          <span>New to Doctors Portal?<Link className='text-secondary' to="/register">Create new account</Link></span>
          <div className="divider">OR</div>
          <button className="btn btn-secondary" onClick={() => signInWithGoogle()}>Connect with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;