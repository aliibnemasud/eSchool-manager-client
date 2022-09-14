import { EyeIcon, PencilSquareIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Teachers = () => {
    return (
        <div className="overflow-x-auto">
            <h1 className=' text-2xl'>Teachers</h1>
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
                            <td>
                                <button>
                                    <EyeIcon className="h-6 w-6 text-green-500" />
                                </button>
                                <button className='mx-3'>
                                    <PencilSquareIcon className="h-6 w-6 text-blue-500" />
                                </button>
                                <button >
                                    <TrashIcon className="h-6 w-6 text-red-600 " />
                                </button>
                            </td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Teachers;