import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import MyToyRow from '../cards/MyToyRow';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import useTitle from '../../hooks/Title';
const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);
    useTitle("My Toys")

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/mytoys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMytoys(data)
            })
    }, []);
    // delete operation
    const handleDelete = (id) => {
        const deleteItem = confirm("Are you sure you want to delete?")
        if (deleteItem) {
            fetch(`https://b7a11-toy-marketplace-server-side-ashaansojib.vercel.app/alltoys/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const alert = Swal.fire(
                            'The Item Deleted Successfully!',
                            'Permission Access!',
                            'success'
                        )
                        const remaining = mytoys.filter(toy => toy._id !== id);
                        setMytoys(remaining)
                    }
                })
        }
    }
    return (
        <div className='my-container'>
            <div className="overflow-x-auto w-full p-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>Admin Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(toy => <MyToyRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></MyToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;