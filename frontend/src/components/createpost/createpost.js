import React, { useInsertionEffect, useState } from "react";
import avatar from "../../assets/images/defavatar.jpg";
import trashac from "../../assets/icons/trash-ac.png";
import { CreatePostContainer } from "./createpost.styles";

const CreatePost = () => {

    const [textren, setTextren] = useState(false)
    const [pic, setPic] = useState()

    const handleImageChange = (event) => {
        event.preventDefault();
        setPic(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <CreatePostContainer>
            <div className="left">
                <img src={avatar} />
                {textren ? 
                    <>
                    <input className="file" type="file" onChange={handleImageChange}/> 
                    <button className="postclose" onClick={() => {setTextren(!textren); setPic(undefined)}}></button>
                    </>
                : ""}
            </div>
            
            {textren ?  
            
            <textarea placeholder="What's on your mind, Patricia?" className='about' type='textarea' rows={3}></textarea>
            
            : 
            
            <input className="text" type="text" placeholder="What's on your mind, Patricia?" onClick={() => setTextren(!textren)}></input>
            }
            
            <div className="right">
                <button className="send"></button>
                {pic === undefined ? "" : 
                <>
                <img className="postimg" src={pic}/>
                <img className="deleteimg" src={trashac} onClick={() => setPic(undefined)}/>
                </>
                }
            </div>
        </CreatePostContainer>
    )

}

export default CreatePost;