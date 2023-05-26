import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const UpdateCard = () => {
    const toys = useLoaderData();
    const {_id, image, toyName, price, rating, quantity} = toys;
    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const toyName = form.toy.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;

        const toyDetails = {
            image, toyName, price, rating, quantity
        }
        fetch(`https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/updating/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyDetails),
        })
        .then( res => res.json())
        .then( data => {
            if(data.modifiedCount > 0){
                const alert = Swal.fire(
                    'The Item Updated Successfully!',
                    'Posted By Author!',
                    'success'
                  )
            }
        })
        form.reset();
    }
    return (
        <div className='my-container'>
            <h2 className='font-semibold text-2xl text-center py-4'>Update Now</h2>
            <form onSubmit={handleUpdate}>
                <div className='lg:grid lg:grid-cols-2 gap-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toy' defaultValue={toyName} required placeholder="Type Toy Name" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Image Link</span>
                        </label>
                        <input type="text" name='image' defaultValue={image} required placeholder="Put toy imagae link" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} required placeholder="Regular Price" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' defaultValue={rating} required placeholder="Give rating" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} required placeholder="Available Quantity" className="input input-bordered input-accent" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline">Updating Info</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCard;