import React from 'react';
import { EyeIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import AddStudentModal from './AddStudentModal';


const Students = () => {

    
    const [addStudentModal, setaddStudentModal] = useState(null);



    return (
        <div className="overflow-x-auto">
            <div className='flex justify-between items-center'> 
                <h1 className="text-2xl">All Students</h1>
                <label onClick={() => setaddStudentModal(1)} htmlFor="add-student" className='btn btn-primary my-2'><PlusCircleIcon className="h-6 w-6 text-white mr-2" />Add Student</label>                
            </div>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Father's Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Ali Ibne Masud</td>
                        <td>Five</td>
                        <td>Md Shafiqul Alam</td>

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
                </tbody>
            </table>

            { addStudentModal && <AddStudentModal/>}
        </div>
    );
};

export default Students;