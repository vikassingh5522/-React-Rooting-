import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userid } = useParams(); // ✅ useParams must be called inside the function body

  return (
    <div className='text-center text-3xl font-bold text-blue-500'>
      User: {userid}
    </div>
  );
};

export default User;
