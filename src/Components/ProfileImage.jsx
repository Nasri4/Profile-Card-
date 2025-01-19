import React from 'react';
import profileImage from '../assets/Me.jpeg';

const ProfileImage = () => {
  return (
    <img
      className="h-24 w-24 rounded-full object-cover"
      src={profileImage}
      alt="Profile"
    />
  );
};

export default ProfileImage;