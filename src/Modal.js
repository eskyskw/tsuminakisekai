import './App.css';
import React, { useState } from "react";

export default function Modal({contain = <p>this is default text on modal window</p>, show=false, setShow=f=>f}){

    const closeModal = () => {setShow(false)};

    if(show){
        return(
            <div id="overlay" onClick={closeModal}>
                <div id="content" onClick={(e) => e.stopPropagation()}>
                    <p>
                        {contain}
                    </p>
                    <button onClick={closeModal}>close</button>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}