import React from 'react';
import { EyeIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const StudentsRow = ({student, index, setStudentInfo}) => {
    const {name, fatherName, motherName, class:clsssNo, _id} = student;

    const handleDelete = id => {
        const confrimDelete = window.confirm(`Are you sure want to delete ${name}`);
        
        if(confrimDelete){
           axios.delete(`http://localhost:5000/student/${id}`)
           .then(res => {
            toast.success(`${name} profile has been deleted.`)
           })            
        }       
    }



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
                <button onClick={()=> handleDelete (_id)} className=' mx-3'>
                    <TrashIcon className="h-6 w-6 text-red-600 " />
                </button>
                <label htmlFor='view-student-info' onClick={()=> setStudentInfo(student)}>
                    <EyeIcon className="h-6 w-6 text-green-500" />
                </label>
            </td>
        </tr>
    );
};

export default StudentsRow;