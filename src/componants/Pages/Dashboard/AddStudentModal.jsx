import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const AddStudentModal = () => {
    const studentNameRef = useRef('');
    const fatherNameRef = useRef('');
    const motherNameRef = useRef('');
    const classRef = useRef('');

    const addStudent = () => {
        // e.preventDefault();        
        const studentName = studentNameRef.current.value;
        const fatherName = fatherNameRef.current.value;
        const motherName = motherNameRef.current.value;
        const classNo = classRef.current.value;
        
        const studentInfo = {
            name: studentName,
            fatherName: fatherName,
            motherName: motherName,
            class: classNo,
        }

        axios.post('https://guarded-spire-40443.herokuapp.com/addstudent', studentInfo )
        .then (res => toast.success(`${studentName} added Successfully!`))        
    }


    return (
        <div>
            {/* <!-- The button to open modal --> */}

            <input type="checkbox" id="add-student" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-center">
                <div className="modal-box relative">
                <label htmlFor="add-student" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Student Information</h3>

                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Student name</span>
                            </label>
                            <input required ref={studentNameRef} type="text" placeholder="Jhone Doe" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Father's Name</span>
                            </label>
                            <input required ref={fatherNameRef} type="text" placeholder="Father's Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Mother's Name</span>
                            </label>
                            <input required ref={motherNameRef} type="text" placeholder="Mother's Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Class</span>
                            </label>
                            <input required ref={classRef} type="number" placeholder="One" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="add-student" onClick={addStudent} className="btn">Add Student</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddStudentModal;