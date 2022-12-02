import React from "react";
import { ProfileCardContainer } from "./profile.styles";
import { useEffect, useState } from "react";

const ProfileCard = (props) => {

    const bla = ['sunshine', 'movies', 'running', 'lazysundays', 'sustainablethinking', 'chips']
    const int = []
    
    const [user, setUser] = useState([]);

    const get = "GET"
    const header = new Headers({
        'content-type': 'application/json'
    })
    const getconfig = {
        method: get,
        headers: header
    }

    useEffect(() => {
        fetch(`http://localhost:8000/users/${props.id}/`, getconfig)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.log(error))
    },[])

    return (
        <ProfileCardContainer>
            <div className="cover">
                <img src={`http://localhost:8000${user?.cover}`} />
            </div>
            <div className="card">
                <div className="left">
                    <img src={`http://localhost:8000${user?.avatar}`} />
                    <div className="name">{user?.first_name} {user?.last_name}</div>
                    <div className="location">{user?.city}, {user?.country}</div>
                    <button className="friend">ADD FRIEND</button>
                    <button className="follow">FOLLOW</button>
                </div>
                <div className="right">
                    <div className="top">
                        <div className="topleft">
                            <div className="about">
                                <h3>About</h3>
                                <p>{user?.description}</p>
                            </div>
                            <div className="contact">
                                <div className="email">
                                    <h3>Email</h3>
                                    <p>{user?.email}</p>
                                </div>
                                <div className="phone">
                                    <h3>Phone</h3>
                                    <p>0798403225</p>
                                </div>
                            </div>
                        </div>
                        <div className="topright">
                            <div className="interests">
                                <h3>Things I like</h3>
                                <div className="tags">
                                    {user.interest_tags === undefined || user.interest_tags.length === 0 ? "" : user.interest_tags.split(' ').map(e => <p>{e}</p> )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="sub">
                            <p>156</p>
                            <h3>Posts</h3>
                        </div>
                        <div className="sub">
                            <p>219</p>
                            <h3>Likes</h3>
                        </div>
                        <div className="sub">
                            <p>{user.friends === undefined ? 'LDNG...' : user.friends.length}</p>
                            <h3>Friends</h3>
                        </div>
                        <div className="sub">
                            <p>{user.followers === undefined ? 'LDNG...' : user.followers.length}</p>
                            <h3>Followers</h3>
                        </div>
                        <div className="sub">
                            <p>{user.following === undefined ? 'LDNG...' : user.following.length}</p>
                            <h3>Following</h3>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileCardContainer>
    )

}

export default ProfileCard;

// {props.user.friends.length}