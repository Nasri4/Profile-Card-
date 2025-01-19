import React from 'react';
import ProfileCard from './Components/ProfileCard';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <ProfileCard />
      <Footer />
    </div>
  );
};

export default App;