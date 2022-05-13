import React from 'react';

const Service = ({cardTitle , img ,bg}) => {
    return (
        <div class="card w-96 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{cardTitle}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto minima minus impedit qui.</p>
        </div>
      </div>
    );
};

export default Service;