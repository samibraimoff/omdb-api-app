import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import { useDispatch } from 'react-redux';

import { GoSearch } from 'react-icons/go';
import { getMovies, getShows } from '../../redux/actions/movieActions';

import './header.scss';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchInput === '') {
      alert('Please enter movie or show name in search bar');
      return;
    }
    dispatch(getMovies(searchInput));
    dispatch(getShows(searchInput));
    setSearchInput('');
  };

  return (
    <header>
      <Link to='/'>
        <div className='logo'>MyIMDB</div>
      </Link>
      <div className='searchBar'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='Search..'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit'>
            <GoSearch />
          </button>
        </form>
      </div>

      <div className='user-image'>
        <img src={user} alt='user' />
      </div>
    </header>
  );
};

export default Header;
