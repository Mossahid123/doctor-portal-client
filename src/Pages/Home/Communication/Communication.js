import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Communication = () => {
    return (
        <div style={{ background: `url(${appointment})` }}>
            <div className='text-center pt-12'>
                <h5 className='text-xl text-primary font-bold'>Contact us</h5>
                <h2 className='text-3xl text-white'> Stay connected with us</h2>
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className='form-control border-solid border-2 border-Slate-100 rounded'>
                                    <textarea name="massage" cols="30" rows="5">Your massage</textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Communication;