import React from 'react';

const ProfileActions = () => {
  return (
    <div className="mt-4 flex space-x-3">
      <a
        href=" https://www.facebook.com/share/15teaRgBEf/" 
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600"
      >
        Follow
      </a>
      <a
        href="https://wa.me/252612666888"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-300"
      >
        Message
      </a>
    </div>
  );
};

export default ProfileActions;