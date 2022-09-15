import React from 'react';
import { EyeIcon, PencilSquareIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { toast } from 'react-toastify';


const StudentsRow = ({ student, index, setStudentInfo, setUpadateInfo }) => {
    const { name, fatherName, motherName, class: clsssNo, _id } = student;

    const handleDelete = id => {
        const confrimDelete = window.confirm(`Are you sure want to delete ${name}`);

        if (confrimDelete) {
            axios.delete(`https://guarded-spire-40443.herokuapp.com/student/${id}`)
                .then(res => {
                    toast.success(`${name} profile has been deleted.`)
                })
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{clsssNo}</td>
            <td>{fatherName}</td>
            <td>{motherName}</td>
            <td className='flex'>
                <label title='View' htmlFor='view-student-info' onClick={() => setStudentInfo(student)}>
                    <EyeIcon className="h-6 w-6 text-green-500 cursor-pointer" />
                </label>
                <label title='Edit' className='mx-3' htmlFor='update-student-info' onClick={() => setUpadateInfo(student)}>
                    <PencilSquareIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
                </label>
                <label title='Delete' onClick={() => handleDelete(_id)} >
                    <TrashIcon className="h-6 w-6 text-red-600 cursor-pointer" />
                </label>
            </td>
        </tr>
    );
};

export default StudentsRow;