import styled from "styled-components"


export const ProfileCardContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: calc(100vw - (100vw - 100%));

/* {
    border: 1px solid red;
}*/

.cover {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border: 1px solid rgba(82, 68, 255, 0.4);
    box-shadow: 0px 0px 1px rgba(82, 68, 255, 0.4), 0px 10px 20px rgba(82, 68, 255, 0.4);
    > img {
        width: 100%;
        position: absolute;
        top: -9999px;
        left: -9999px;
        right: -9999px;
        bottom: -9999px;
        margin: auto;
    }
}   

.card {
    display: flex;
    flex-direction: row;
    z-index: 0;
    margin-top: -265px;
    width: 1152px;
    height: 400px;
    background: rgb(36,37,38);
    border-radius: 4px;
    box-shadow: 0px 0px 1px rgba(82, 68, 255, 0.4), 0px 10px 20px rgba(82, 68, 255, 0.4);
    border: 1px solid rgba(82, 68, 255, 0.4);
}

.left {
    width: 320px;
    height: 400px;
    border-right: 1px solid rgba(82, 68, 255, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    > img {
        width: 85px;
        height: 85px;
        border-radius: 50%;
        margin-top: 50px;
    }
}

.name {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 15px;
}

.location {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-top: 8px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

.friend,
.follow {
    width: 158px;
    height: 40px;
    font-size: 9px;
    font-weight: 400;

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

.friend {
    margin-top: 30px;
    :before {
        animation: glowing 100s linear infinite;
    }
}
.follow {
    margin-top: 20px;
    :before {
        animation: glowing 130s ease-in-out infinite;
    }
}

.right {
    display: flex;
    flex-direction: column;
    > .top {
        width: 832px;
        height: 262px;
        border-bottom: 1px solid rgba(82, 68, 255, 0.4);;
        display: flex;
        flex-direction: row;
    }
}

.topleft {
    width: 450px;
    height: 262px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > .about {
        width: 450px;
        height: 152px;
        > h3 {
            padding-left: 60px;
            margin-top: 30px;
        }
        > p {
            padding-right: 70px;
            padding-left: 60px;
        }
    }
}

h3 {
    font-size: 12px;
    font-weight: 400;
    color: white;
}

p {
    font-size: 16px;
    font-weight: 400;
    color: white;
}

.contact {
    display: flex;
    flex-direction: row;
    > .email {
        width: 320px;
        height: 110px;
        > h3 {
            margin-block-start: 25px;
            padding-left: 60px;
        }
        > p {
            padding-left: 60px;
        }
    }
    > .phone {
        width: 130px;
        height: 110px;
        > h3 {
            margin-block-start: 25px;
            padding-left: 10px;
        }
        > p {
            padding-left: 10px;
        }
    }
}

.interests {
    width: 382px;
    height: 262px;
    > h3 {
        margin-top: 30px;
    }
    > .tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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
            margin-right: 15px;
            margin-block-start: 6px;
            margin-block-end: 6px;
            box-shadow: 0px 0px 5px rgba(82, 68, 255, 0.4), 0px 0px 10px rgba(82, 68, 255, 0.4);

        }
    }
}

.bottom {
    display: flex;
    flex-direction: row;
    > .sub {
        width: 20%;
        height: 137px;
        :hover {
            box-shadow: 
                inset 0px 0px 5px rgba(82, 68, 255, 0.4),
                inset 0px 0px 10px rgba(82, 68, 255, 0.4),
                inset 0px 0px 15px rgba(82, 68, 255, 0.4), 
                inset 0px 0px 20px rgba(82, 68, 255, 0.4);
            cursor: pointer;
        }
        > p {
            padding-left: 40px;
            font-size: 24px;
            font-weight: 500;
            color: white;
        }
        > h3 {
            padding-left: 40px;
            font-size: 16px;
        }
    }
}

`;