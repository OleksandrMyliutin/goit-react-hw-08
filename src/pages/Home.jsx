import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">Your contacts</h1>
          <p className="py-6">
            Make your life easier by managing your contacts in one place.
          </p>
          <Link to='/contacts'><button className="btn btn-primary">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
