import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../../hooks/Title';

const ToyDetails = () => {
    const details = useLoaderData();
    const { _id, image, toyName, quantity, price, description, rating, category } = details;
    const [showRating, setShowRating] = useState(4);
    useTitle("Toy Detail Page")
    return (
        <div className='my-container'>
            <div className="grid grid-cols-2 justify-between items-center py-4">
                <div>
                    <img src={image} className="max-w-sm" />
                    <div className='lg:w-[400px] hidden lg:block'>
                        <h2 className='font-semibold text-xl'>Availabe Product</h2>
                        <div className='flex justify-between items-center'>
                            <img className='w-32' src="https://www.shutterstock.com/image-photo/krivoy-rog-ukraine-dec-25-260nw-240628708.jpg" alt="" />
                            <img className='w-32' src="https://thumbs.dreamstime.com/z/toy-sports-car-white-background-50039101.jpg" alt="" />
                            <img className='w-32' src="https://media.istockphoto.com/id/183804142/photo/crane.jpg?s=612x612&w=0&k=20&c=LmR5VrnK2iSSQjrznyOFFQVi_PIZJrVWUf2brGSWodU=" alt="" />
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className="text-2xl">{toyName}</h1>
                    <h3 className='font-medium text-gray-400 text-2xl'>$ {price} </h3><small>Regular Price</small>
                    <Rating style={{ maxWidth: 100 }} value={showRating} onChange={setShowRating} />
                    <p>{description}</p>
                    <div className='p-4 bg-slate-200 my-4 lg:space-y-4'>
                        <p>Item Category: {category}</p>
                        <p>Available Quantity: {quantity}</p>
                        <p>Coustomer Review: {rating} Stars</p>
                    </div>
                    <div className='p-8 text-gray-700 space-y-2 text-right'>
                        <p>Security policy (edit with Customer reassurance module)</p>
                        <p>Delivery policy (edit with Customer reassurance module)</p>
                        <p>Return policy (edit with Customer reassurance module)</p>
                        <Link className="btn btn-outline">Add To Card</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;