import React from 'react';
import { EyeIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid';

const StudentsRow = ({student, index}) => {
    const {name, fatherName, motherName, class:clsssNo} = student;
    return (
        <tr>
            <th>{index+1}</th>
            <td>{name}</td>
            <td>{fatherName}</td>
            <td>{clsssNo}</td>
            <td>
                <button>
                    <PlusCircleIcon className="h-6 w-6 text-blue-500" />
                </button>
                <button className=' mx-3'>
                    <TrashIcon className="h-6 w-6 text-red-600 " />
                </button>
                <button className=''>
                    <EyeIcon className="h-6 w-6 text-green-500" />
                </button>
            </td>
        </tr>
    );
};

export default StudentsRow;