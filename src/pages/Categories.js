import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import 'tachyons';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div className="pl4">
      <button className="pointer" onClick={() => dispatch(checkStatus)} type="button">Check Status</button>
    </div>
  );
};

export default Categories;
