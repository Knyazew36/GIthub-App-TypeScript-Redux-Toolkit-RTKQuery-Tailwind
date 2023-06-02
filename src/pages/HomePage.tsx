import React from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';

import { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/debounce';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  });

  console.log(data);

  useEffect(() => {
    console.log(search);
  }, [debounced]);

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {isError && (
        <p className='text-center text-red-600 '>Something went wrong...</p>
      )}

      <div className='relative w-[560px]'>
        <input
          type='text'
          className='border py-2 px-4 w-full h-[42px] mb-2'
          placeholder='Search for Github username...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className='absolute list-none top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white'>
          {isLoading && <p className='text-center'></p>}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
