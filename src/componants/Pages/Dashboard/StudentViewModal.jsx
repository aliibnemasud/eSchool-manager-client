import React from 'react';

const StudentViewModal = ({studentInfo}) => {
    return (
        <div>
            <input type="checkbox" id="view-student-info" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-center">
                <div className="modal-box relative">
                <label htmlFor="view-student-info" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Student Information</h3>

                    <h3>Name: {studentInfo?.name} </h3>
                    <h3>Father's Name: </h3>
                    <h3>Mother's Name: </h3>
                    <h3>Class: </h3>                    
                </div>
            </div>

        </div>
    );
};

export default StudentViewModal;