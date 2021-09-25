
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"
import { withRouter } from 'react-router-dom'

const Cards = (props) => {
  const [album, setAlbum] = useState('');

  const handleClose = () => setAlbum('');
  return (
    <>
      
    <div className="mt-5 d-flex">
            <div className="px-0 mb-4 mr-4" style={{height:'200px',width:'200px'}}>
            
            <img src={props.img} onClick={()=>props.history.push('/album/' + props.id)} className="card-img-top" alt="..."/>

            <div className=" text-center p-3 " >
                <h5 style={{color:'white',fontSize:'14px'}} >{props.title} </h5>
                <h6 style={{color:'white',fontSize:'14px'}} >{props.title} </h6>
            </div>
            </div>
    </div>

    </>
    
  );
};

export default withRouter(Cards);
