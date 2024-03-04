import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h2 className='text-4xl text-center '>Welcome to Data fetching app </h2>
      <div className=''>
        <Link className='flex my-8' href={`/posts`}>
          <button className='btn btn-secondary mx-auto'>All Post here </button>
        </Link>
        <Link className='flex my-8' href={`/users`}>
          <button className='btn btn-secondary mx-auto'>All User here </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;