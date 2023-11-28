import React from 'react';

const ShowErrors = ({ errors }) => {
  if (!errors || errors.length === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <ul className="m-4 p-4 list-disc bg-red-100 border border-red-400 text-red-700">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};


export default ShowErrors