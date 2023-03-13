import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () =>{
    return(
        <div>
            <p className = 'f3'>
                {'The waters will show reflections of the faces in your pictures!'}
            </p>
            <div className = 'center'>
            <div className = 'form center pa4 br3 shadow-5'>
                <input className = 'f3 pa2 w-75 center' type = 'text'/>
                <button className = 'w-30 grow f4 link ph3 pv2 dib purple bg-light-blue'>detect</button>
            </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;