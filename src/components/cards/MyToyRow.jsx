import React from 'react';
import { Link } from 'react-router-dom';

const MyToyRow = ({ toy, handleDelete }) => {
    const { _id, image, toyName, name, quantity, price, rating } = toy;
    return (
        <tr>
            <th>
                <label>
                    <span className="badge">{name}</span>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">Premium Quality</div>
                    </div>
                </div>
            </td>
            <td>
                <h2>$ {price}</h2>
            </td>
            <td>
                <p>{quantity} items</p>
            </td>
            <td>
                <p>Rating {rating}</p>
            </td>
            <th>
                <Link className="btn btn-ghost btn-xs" to={`/updating/${_id}`}>Edit</Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToyRow;