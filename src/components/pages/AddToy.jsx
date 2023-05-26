import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import useTitle from '../../hooks/Title';

const AddToy = () => {
    const {user} = useContext(AuthContext);
    useTitle("Add A Toy")
    const handleAddToy = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const toyName = form.toy.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const category = form.category.value;

        const toyDetails = {
            name, email, image, toyName, price, rating, quantity, description, category
        }
        console.log(toyDetails)
        fetch('https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/all-toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyDetails)
        })
        .then( res => res.json())
        .then( data => {
            // console.log(data)
            if(data.acknowledged){
                const alert = Swal.fire(
                    'The Item Added Successfully!',
                    'Posted By Author!',
                    'success'
                  )
            }
        })
        form.reset();
    }
    return (
        <div className='my-container'>
            <form onSubmit={handleAddToy} className="p-2">
                <div className='lg:grid lg:grid-cols-2 gap-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user && user.displayName} required placeholder="Type Seller Name" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" required defaultValue={user && user.email} name='email' className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toy' required placeholder="Type Toy Name" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Image Link</span>
                        </label>
                        <input type="text" name='image' required placeholder="Put toy imagae link" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name='category' required placeholder="Type sub category" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' required placeholder="Regular Price" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' required placeholder="Give rating" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name='quantity' required placeholder="Available Quantity" className="input input-bordered input-accent" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Description</span>
                        </label>
                        <input type="text" name='description' required placeholder="Type here" className="input input-bordered input-accent" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline">Add Your Toy</button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;