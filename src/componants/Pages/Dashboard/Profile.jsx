import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    if(!user){
        navigate('/login')
    }

    return (
        <div>

            { user && <button onClick={()=> signOut(auth)} className='btn btn-primary'>Sign Out</button>
              
            }
            
        </div>
    );
};

export default Profile;