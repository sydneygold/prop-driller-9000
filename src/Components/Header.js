import React from 'react';
import TransformersSection from '../Containers/TransformersSection'

function Header({proptimusLogo, proptimusii, showTransformers, isToggled}) {

  const handleClick = () => {
    console.log('Im clicked')
    showTransformers()
  }

  return (
    <div>
      <header>
        <img
          onClick={handleClick}
          src ={proptimusLogo}
          alt = "logo"
        />
      </header>
      {isToggled === true 
        ? <TransformersSection proptimusii={proptimusii}/>
        : null
      }
    </div>
  );
}

export default Header;
