import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({toy}) => {
    const {_id, category, toyName, quantity, price, name} = toy;
    return (
        <tr>
            <th>{name}</th>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td><Link className='btn btn-outline btn-sm' to={`/all-toys/${_id}`} >Details</Link></td>
        </tr>
    );
};

export default AllToyRow;