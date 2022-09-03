import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Check = () => {
    const [lad,setlad]=useState([]);
    useEffect(()=>{
        fetch('productsd.json')
        .then(res=>res.json())
        .then(data=>{
            console.log("first",data)
            setlad(data)
        })
    })
    return (
        <div>
            leng{lad}
        </div>
    );
};

export default Check;