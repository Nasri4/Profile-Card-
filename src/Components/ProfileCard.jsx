import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileDetails from './ProfileDetails';
import ProfileActions from './ProfileActions';

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col items-center p-6">
        <ProfileImage />
        <ProfileDetails />
        <ProfileActions />
      </div>
    </div>
  );
};

export default ProfileCard;
