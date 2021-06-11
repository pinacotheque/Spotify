
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap"
import { useState } from "react"
import { withRouter } from 'react-router-dom'

const Cards = (props) => {
  const [album, setAlbum] = useState('');

  const handleClose = () => setAlbum('');
  return (
    <>
      {/* <img src={props.img} className="thumbnail" alt="thumbnail" onClick={() => props.history.push('/details/' + props.id)} />
      <Modal album={album} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        
      </Modal> */}
    <div className="mt-5 d-flex">
            <div className="px-0 mb-4 mr-4" style={{height:'200px',width:'200px'}}>
            
            <a href="artist.html"><img src={props.img} className="card-img-top" alt="..."/></a>

            <div className=" text-center p-3 " >
                <h5 style={{color:'white',fontSize:'14px'}} >{props.title} </h5>
            </div>
            </div>
    </div>

    </>
    
  );
};

export default withRouter(Cards);

{/*  */}