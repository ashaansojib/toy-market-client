import React, { useEffect, useState } from 'react';
import AllToyRow from '../cards/AllToyRow';
import useTitle from '../../hooks/Title';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [showAll, setShowAll] = useState(false);
    useTitle("All Toys")
    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);
    const handleSearch = () => {
        fetch(`https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/searchBy/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
    // to show all data
    const hnadleShowAll = () => {
        setShowAll(true);
    };
    return (
        <div className='my-container p-10'>
            <div className="overflow-x-auto">
                <div className='text-center pb-4 my-4'>
                    <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search By Toy Name" className="input input-bordered w-full max-w-xs" />
                    <button className='btn btn-primary ml-4' onClick={handleSearch}>Search</button>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.slice(0, showAll ? toys.length : 20).map(toy => <AllToyRow
                                key={toy._id}
                                toy={toy}
                            ></AllToyRow>)
                        }
                    </tbody>
                </table>
                {
                   !showAll && toys?.length > 20 && <button onClick={hnadleShowAll} className="btn btn-primary">
                    Load More
                </button>
                }
            </div>
        </div>
    );
};

export default AllToys;