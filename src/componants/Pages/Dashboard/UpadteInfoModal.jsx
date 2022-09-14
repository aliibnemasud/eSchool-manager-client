import axios from 'axios';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const UpadteInfoModal = ({studentinfo}) => {

    const {name, fatherName, motherName, class:clsssNo, _id} = studentinfo;
    console.log(name)

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

        axios.put(`https://guarded-spire-40443.herokuapp.com/student/${_id}`, studentInfo )
        .then (res => toast.success(`${studentName} Information Updated Successfully!`))        
    }


    return (
        <div>
            {/* <!-- The button to open modal --> */}

            <input type="checkbox" id="update-student-info" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-center">
                <div className="modal-box relative">
                    <label htmlFor="update-student-info" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Student Information</h3>

                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Student name</span>
                            </label>
                            <input defaultValue={name} ref={studentNameRef} type="text" placeholder="Jhone Doe" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Father's Name</span>
                            </label>
                            <input defaultValue={fatherName} ref={fatherNameRef} type="text" placeholder="Father's Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Mother's Name</span>
                            </label>
                            <input defaultValue={motherName}  ref={motherNameRef} type="text" placeholder="Mother's Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Class</span>
                            </label>
                            <input defaultValue={clsssNo} ref={classRef} type="number" placeholder="One" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="update-student-info" onClick={addStudent} className="btn">Update Student Information</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpadteInfoModal;