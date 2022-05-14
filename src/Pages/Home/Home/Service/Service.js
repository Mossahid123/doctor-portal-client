import React from 'react';

const Service = ({cardTitle , img ,bg}) => {
    return (
        <div className="card w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto minima minus impedit qui.</p>
        </div>
      </div>
    );
};

export default Service;