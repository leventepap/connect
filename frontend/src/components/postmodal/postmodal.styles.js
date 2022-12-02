import styled from "styled-components";
import likein from "../../assets/icons/like-in.png";
import likeac from "../../assets/icons/like-ac.png";
import sharein from "../../assets/icons/share-in.png";
import shareac from "../../assets/icons/share-ac.png";
import trashin from "../../assets/icons/trash-in.png";
import trashac from "../../assets/icons/trash-ac.png";
import deletein from "../../assets/icons/delete-in.png";
import deleteac from "../../assets/icons/delete-ac.png";
import yesin from "../../assets/icons/yes-in.png";
import yesac from "../../assets/icons/yes-ac.png";
import noin from "../../assets/icons/no-in.png";
import noac from "../../assets/icons/no-ac.png";

export const PostModalContainer = styled.div`
height: 100vh;
width: 100vw;
z-index: 3;
position: fixed;

/* {
    border: 1px solid red;
}*/
 
.modal {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > .exit {
        width: 1152px;
        display: flex;
        flex-direction: row;
        > button {
            height: 25px;
            width: 25px;
            margin-left: auto;
            margin-bottom: 5px;
            background-image: url(${deletein});
            background-size: 22px 22px;
            background-repeat: no-repeat;
            background-position: center;
            :hover {
                background-image: url(${deleteac});
            }
        }
    }
}

.postmodal {
    background: rgb(25,26,27);
    width: 1152px;
    height: 560px;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    border: 1px solid rgba(82, 68, 255, 0.4);
    box-shadow: 0px 0px 1px rgba(82, 68, 255, 0.4), 0px 10px 20px rgba(82, 68, 255, 0.4);
    .modalleft {
        height: 560px;
        width: 792px;
        background-color: black;
        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}


.modalright {
    display: flex;
    flex-direction: column;
    .modaluser {
        display: flex;
        flex-direction: row;
        align-items: center;
        > img {
            height: 45px;
            width: 45px;
            border-radius: 50%;
            margin: 30px 15px 30px 30px;
            :hover {
                cursor: pointer;
            }
        }
        > .modalname {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 14px;
            color: white;
            p:nth-child(2) {
                color: grey;
            }
        }
        > .modaldelete {
            height: 25px;
            width: 25px;
            margin-left: auto;
            margin-right: 30px;
            background-image: url(${trashin});
            background-size: 22px 22px;
            background-repeat: no-repeat;
            background-position: center;
            :hover {
                background-image: url(${trashac});
            }
        }
    }
}

.modalconfirm {
    z-index: 4;
    position: absolute;
    height: 90px;
    width: 360px;
    background: rgb(36,37,38);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: 
        inset 0px 0px 5px rgba(82, 68, 255, 0.4),
        inset 0px 0px 10px rgba(82, 68, 255, 0.4),
        inset 0px 0px 15px rgba(82, 68, 255, 0.4), 
        inset 0px 0px 20px rgba(82, 68, 255, 0.4);
    > .left {
        > p {
        padding-left: 30px;
        color: white;
        }
    }
    > .right {
        margin-right: 30px;
        width: 75px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        > .modalyes,
        .modalno {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: transparent;
            background-position: center;
            background-repeat: no-repeat;
        }

        > .modalyes {
            background-image: url(${yesin});
            background-size: 25px 25px;
            border: 1px solid rgba(92, 224, 57, 0.7);
            box-shadow: 0px 0px 1px rgba(92, 224, 57, 0.4), 0px 0px 20px rgba(92, 224, 57, 0.4);
            :hover {
                background-image: url(${yesac});
                box-shadow: 0px 0px 1px rgba(92, 224, 57, 0.4), 0px 0px 20px rgba(92, 224, 57, 0.4), inset 0px 0px 20px rgba(92, 224, 57, 0.4);
                cursor: pointer;
            }
        }

        > .modalno {
            background-image: url(${noin});
            background-size: 20px 20px;
            border: 1px solid rgba(255, 37, 37, 0.7);
            box-shadow: 0px 0px 1px rgba(255, 37, 37, 0.4), 0px 0px 20px rgba(255, 37, 37, 0.4);
            align-self: right;
            :hover {
                background-image: url(${noac});
                box-shadow: 0px 0px 1px rgba(255, 37, 37, 0.4), 0px 0px 20px rgba(255, 37, 37, 0.4), inset 0px 0px 20px rgba(255, 37, 37, 0.4);
                cursor: pointer;
            }
        }
    }
}



.modaltext {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    color: white;
    width: 300px;
    height: 270px;
    overflow-y: scroll;
    padding: 0px 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    ::-webkit-scrollbar {
    width: 8px;
    }
    ::-webkit-scrollbar-track {
    background: rgb(25,26,27);
    }
    ::-webkit-scrollbar-thumb {
    background: rgba(82, 68, 255, 0.4);
    }
    ::-webkit-scrollbar-thumb:hover {
    background: rgb(176, 179, 184);
    }
}

.modallikes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    margin-top: 30px;
    padding-bottom: 15px;
    border-bottom: 1.5px solid rgba(82, 68, 255, 0.4);
    .modalimages {
        display: flex;
        flex-direction: row;
        align-items: center;
        > img {
            height: 35px;
            width: 35px;
            border-radius: 50px;
            margin-right: -9px;
            border: 1.5px solid rgba(82, 68, 255, 0.6);
            :hover {
                cursor: pointer;
            }
        }
    }
    > p {
        color: white;
        margin-right: 30px;
    }
}

.modalbuttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
    height: 80px;
}

button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: white;
    border: none;
    background: transparent;
    :hover {
        cursor: pointer;
    }
}

.modallike {
    background-image: url(${likein});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    padding-left: 38px;
    background-position: center left;
    margin-right: 35px;
    :hover {
        background-image: url(${likeac});
    }
}

.modalshare {
    background-image: url(${sharein});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    padding-left: 38px;
    background-position: center left;
    :hover {
        background-image: url(${shareac});
    }
}
`;