import React from 'react';
import { EyeIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import AddStudentModal from './AddStudentModal';
import { useEffect } from 'react';
import axios from 'axios';
import StudentsRow from './StudentsRow';
import StudentViewModal from './StudentViewModal';
import UpadteInfoModal from './UpadteInfoModal';


const Students = () => {

    const [allSudents, setAllStudents] = useState([]);

    const [studentInfo, setStudentInfo] = useState (null);    
    const [addStudentModal, setaddStudentModal] = useState(null);
    const [studentinfo, setUpadateInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allstudents')
            .then((res) => setAllStudents(res.data))
    }, [])
    
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
                        <th>Mother's Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allSudents && allSudents.map((student, index) => <StudentsRow student={student} index={index} key={student._id} setStudentInfo={setStudentInfo} setUpadateInfo={setUpadateInfo} /> )
                    }

                </tbody>
            </table>

            {addStudentModal && <AddStudentModal />}
            {studentInfo && <StudentViewModal studentInfo={studentInfo} />}
            {
                studentinfo && <UpadteInfoModal studentinfo={studentinfo} />
            }
            
        </div>
    );
};

export default Students;