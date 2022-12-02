import React, { useRef } from "react";
import cover from '../../assets/images/cover2.jpg';
import avatar from "../../assets/images/defavatar.jpg";
import camerain from "../../assets/icons/camera-in.png";
import cameraac from "../../assets/icons/camera-ac.png";
import { ProfileEditContainer } from "./profileedit.styles";
import ProfilePic from "../profile-pic/profilepic";
import Tags from "../tags/tags";
import { useState, useEffect } from "react";

const ProfileEdit = () => {

    let newTag = '';
    const ref = useRef(null)

    const [coverren, setCoverren] = useState(false)
    const [picren, setPicren] = useState(false)
    
    const [user, setUser] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [description, setDescription] = useState();
    const [phone, setPhone] = useState();
    const [tags, setTags] = useState();

    const get = "GET"
    const header = new Headers({
        'content-type': 'application/json'
    })
    const getconfig = {
        method: get,
        headers: header
    }

    useEffect(() => {
        fetch("http://localhost:8000/users/1/", getconfig)
            .then(response => response.json())
            .then((data) => {
                setUser(data);
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setEmail(data.email);
                setCountry(data.country);
                setCity(data.city);
                setDescription(data.description);
                setPhone(data.phone);
                setTags(data.interest_tags);

            })
            .catch(error => console.log(error))
    },[])

    const handleTagAdd = (event) => {
        event.preventDefault();
        setTags(tags + " " + newTag);
        newTag = '';
        ref.current.reset();
    }

    const handleDeleteTag = (event) => {
        let newArray = tags.split(' ')
        newArray.splice(event.target.id, 1);
        let newString = newArray.join(' ')
        setTags(newString)
    }

    return (
        <ProfileEditContainer>
            <div className="cover">
                <img src={`http://localhost:8000${user?.cover}`} />
            </div>
            <div className="editcover">
                <div className="coverright" onMouseEnter={() => setCoverren(!coverren)} onMouseLeave={() => setCoverren(!coverren)}>
                    <img src={coverren ? cameraac : camerain} />
                    Update Cover Photo
                </div>
            </div>
            <div className="card">
                <div className="left">
                    <div className="lefttop">
                        <img src={`http://localhost:8000${user?.avatar}`} />
                        <button className="update" onClick={() => { setPicren(!picren) }}>{picren ? "CLOSE" : "UPDATE IMAGE"}</button>
                        {picren ? <ProfilePic /> : <></>}
                    </div>
                    <div className="leftbottom">
                        <button className="delete">DELETE ACCOUNT</button>
                        <button className="save">SAVE</button>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <div className="topleft">
                            <label htmlFor="firstname">First name</label>
                            <input value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className='firstname' type='text'></input>
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='email' type='text'></input>
                            <label htmlFor="country">Country</label>
                            <input value={country} onChange={(e) => { setCountry(e.target.value) }} className='country' type='text'></input>
                            <label htmlFor="about">About</label>
                            <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className='about' type='textarea' rows={3}></textarea>
                        </div>
                        <div className="topright">
                            <label htmlFor="lastname">Last name</label>
                            <input value={lastName} onChange={(e) => { setLastName(e.target.value) }} className='lastname' type='text'></input>
                            <label htmlFor="phone">Phone</label>
                            <input value={phone} onChange={(e) => { setPhone(e.target.value) }} className='phone' type='number'></input>
                            <label htmlFor="city">City</label>
                            <input value={city} onChange={(e) => { setCity(e.target.value) }} className='city' type='text'></input>
                            <label htmlFor="password">Password</label>
                            <input value='********' className='password' type='password'></input>
                        </div>
                    </div>
                    <div className="bottom">
                        <label>Things I like</label>
                        <div className="tagscontainer">
                            {tags === undefined ? "" : tags.split(' ').map((element, index) => <Tags title={element} id={index} delete={handleDeleteTag} /> )}
                        </div>
                        <div className="interests">
                            <form ref={ref} id='tagform' onSubmit={handleTagAdd} >
                                <input placeholder="Type something..." onChange={(e) => { newTag = e.target.value }} className="interestsList"></input>
                                <button className="add" form='tagform' type="submit">ADD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileEditContainer>
    )

}

export default ProfileEdit;