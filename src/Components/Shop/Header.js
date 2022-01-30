import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
          <h1>Merchandise Shop</h1>
      </div>
      <div>

          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        {' '}
      </div>
    </header>
  );
}