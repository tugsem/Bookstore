import React from 'react';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      name: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      name: 'CATEGORIES',
    },
  ];
  return (
    <div className="navBar">
      <h1 className="colorBlue">Booksore CMS</h1>
      <ul className="navLinks">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.path}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
