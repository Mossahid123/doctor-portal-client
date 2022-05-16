import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading';

const Register = () => {
    const navigation = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle,gUser , gLoading , gError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (loading || gLoading || updating) {
    return <Loading></Loading>
  }
  let registerError;
  if (error || gError || updateError) {
    registerError = <p className='text-red-500'>{error.message}</p>
  }

  const onSubmit = async data =>{ 
    await createUserWithEmailAndPassword(data.email , data.password);
    await updateProfile({displayName:data.name})
    navigation("/appointment")
    console.log(data)};
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="text-center text-2xl">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please Enter your name"
                    },
                  })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
              </div>
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
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
              </div>
              <input type="submit" value="Login" className='btn btn-block' />
            </form>
            <span>Already have an account?<Link className='text-secondary' to="/login">Please login!</Link></span>
  
            <div className="divider">OR</div>
            <button className="btn btn-secondary" onClick={() => signInWithGoogle()}>Connect with Google</button>
          </div>
        </div>
      </div>
    );
};

export default Register;