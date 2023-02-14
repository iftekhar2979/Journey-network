import React from 'react';

const SideComponent = ({loginImg}) => {
    // console.log(loginImg)
    return (
        <>
         <img className="img-fluid" src={loginImg} alt=""  />
        </>
    );
};

export default SideComponent;