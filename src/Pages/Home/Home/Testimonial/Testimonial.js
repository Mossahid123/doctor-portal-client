import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Review from './Review';






const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            address: "Bangladesh",
            img:people1,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            name: "Winson Herry",
            address: "India",
            img:people2,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            name: "Winson Herry",
            address: "Pakistan",
            img: people3 ,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
    return (
        <div className='mt-10'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} alt="quote" className='w-24 lg:w-48' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                { reviews.map(review => <Review
                key={review._id}
                review={review}
                ></Review>)}
            </div>
        </div>
    );
};

export default Testimonial;