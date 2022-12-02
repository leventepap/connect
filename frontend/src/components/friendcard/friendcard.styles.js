import styled from "styled-components";

export const FriendCardContainer = styled.div`
width: 362px;
height: 500px;
background: rgb(36,37,38);
border-radius: 4px;
border: 1px solid rgba(61, 138, 228, 0.4);
box-shadow: 0px 0px 1px rgba(61, 138, 228, 0.4), 0px 10px 20px rgba(61, 138, 228, 0.4);
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

/* {
    border: 1px solid red;
}*/

> img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    margin-top: 30px;
    margin-bottom: 15px;
    :hover {
        cursor: pointer;
    }
}

.name,
.location {
    :hover {
        cursor: pointer;
    }
}

.name,
.location,
.about {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: white;
}

.name {
    font-size: 22px;
    margin-bottom: 10px;
}

.location,
.about {
    font-size: 14px;
}

.about {
    width: 310px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 310px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.follow,
.add {
    font-size: 9px;
    font-weight: 400;
    width: 142px;
    height: 40px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal; 
    :before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #002bff, #7a00ff, #ff00c8, #ff00c8, #7a00ff, #002bff, #ff0000);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        transition: opacity .3s ease-in-out;
        border-radius: 30px;
    }
    :active {
        color: #fff
    }
    :active:after {
        background: transparent;
    }
    :after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #111;
        left: 0;
        top: 0;
        border-radius: 30px;
    }
}

.follow {
    :before {
        animation: glowing 100s linear infinite;
    }
}
.add {
    :before {
        animation: glowing 130s ease-in-out infinite;
    }
}

.tags {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 310px;
    margin-top: 30px;
    > p {
        background: #111;
        border: none;
        color: white;
        height: fit-content;
        width: fit-content;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 400;
        padding: 7px 12px;
        box-shadow: 0px 0px 5px rgba(82, 68, 255, 0.4), 0px 0px 10px rgba(82, 68, 255, 0.4);
    }
}

`;