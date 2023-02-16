import React from 'react';
import Blog from '../Blog/Blog';

const Pakages = () => {
    return (
        
        <div className="-fluid py-5">
        <div className=" py-5">
            <div className="text-center mx-auto mb-5" style={{maxWidth:"500px"}}>
                <h1 className="display-5">Latest Articles From Travel B Blog</h1>
                <hr className="w-25 mx-auto text-primary" style={{opacity:1}}/>
           </div>
           <Blog></Blog>
        </div>
    </div>
    );
};

export default Pakages;