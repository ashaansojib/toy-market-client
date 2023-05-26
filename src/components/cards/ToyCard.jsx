import React, { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const ToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const { _id, image, toyName, quantity, price } = toy;
    const [showRating, setShowRating] = useState(4);
    useEffect(() => {
        AOS.init();
    }, []);
    const handleShowToast = () => {
        if (!user) {
            toast('Login First!',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
    }
    return (
        <div className="card transition p-2 hover:shadow-2xl relative" data-aos="fade-down-right">
            <Toaster position="top-center" />
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="p-4">
                <h2 className="card-title py-2">{toyName}</h2>
                <div className='flex justify-between items-center'>
                    <p className='badge badge-lg'>{price} BDT</p>
                    <Rating style={{ maxWidth: 120 }} value={showRating} onChange={setShowRating} />
                </div>
            </div>
            <div className='hover-detail'>
                <div className='flex justify-between items-center'>
                    <p className="p-2 bg-gray-200">On Sale</p>
                    <p className="p-2 bg-gray-200">{quantity} pis</p>
                </div>
                <Link className='p-2 bg-gray-200 absolute top-2/3 right-0' onClick={handleShowToast} to={`toydetails/${_id}`}>View</Link>
            </div>
        </div>
    );
};

export default ToyCard;