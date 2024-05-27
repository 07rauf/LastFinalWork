import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../TotalCss/total.css';
import img3 from '../img/img3.png';
import img4 from '../img/img4.jpg';

const Nav = ({ setSearchBrand }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    setSearchBrand(searchInput);
  };

  return (
    <>
      <img src={img4} className='img4' alt="Background" />
      <div className='nav-list'>
        <img src={img3} alt="Logo" className="logo" />
        <div className="input-container">
          <input
            type="text"
            placeholder="Axtar..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className='searchbtn' type='button' onClick={handleSearch}>
            <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
