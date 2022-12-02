import styled from "styled-components"
import postin from '../../assets/icons/post-in.png';
import postac from '../../assets/icons/post-ac.png';
import addin from '../../assets/icons/add-in.png';
import addac from '../../assets/icons/add-ac.png';
import deletein from "../../assets/icons/delete-in.png";
import deleteac from "../../assets/icons/delete-ac.png";

export const CreatePostContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 560px;
height: fit-content;
background: rgb(36,37,38);
box-shadow: 0px 0px 1px rgba(82, 68, 255, 0.4), 0px 10px 20px rgba(82, 68, 255, 0.4);
border-radius: 4px;
border: 1px solid rgba(82, 68, 255, 0.4);
margin-bottom: 32px;

-webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
page-break-inside: avoid; /* Firefox */
break-inside: avoid; /* IE 10+ */

/* {
    border: 1px solid red;
}*/


.right,
.left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 105px;
}

.left {
    > button {
        height: 25px;
        width: 25px;
        background-image: url(${deletein});
        background-size: 22px 22px;
        background-repeat: no-repeat;
        background-position: center;
        background-color: transparent;
        border: none;
        margin-top: 30px;
        margin-bottom: 30px; 
        :hover {
            background-image: url(${deleteac});
            cursor: pointer;
        }
    }
}

img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    margin: 30px;
}

.text {
    width: 300px;
    height: 100%;
    background: none;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-top: 41px;
    :hover,
    :focus {
        outline: none;
    }
}

textarea {
    width: 300px;
    border: none;
    margin-top: 40px;
    margin-bottom: 30px;
    font-size: 12px;
    resize: vertical;
    border-bottom: 2px solid (255, 255, 255, .5);
    outline: none;
    background: none;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
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

.file {
    height: 35px;
    width: 35px;
    cursor: pointer;
    background-image: url(${addin});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35px 35px;
    margin-top: 5px;
    ::-webkit-file-upload-button {
        visibility: hidden;
    }
    :hover {
        background-image: url(${addac});
        cursor: pointer;
    }
}

.send {
    cursor: pointer;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    margin: 30px;
    border: none;
    background-repeat: no-repeat;
    background-image: url(${postin});
    background-position: center;
    background-size: 45px 45px;
    background-color: transparent;
    :hover {
        background-image: url(${postac});
    }
}

.right {
    > .postimg {
        width: 95px;
        height: 60px;
        border-radius: 4px;
        border: 1px solid rgba(82, 68, 255, 0.8);
        margin-top: -10px;
        position: relative;
    }
    > .deleteimg {
        position: relative;
        width: 35px;
        height: 35px;
        border-radius: 1px;
        top: -108px;
        z-index: 10;
        margin-bottom: -50px;
        :hover {
            cursor: pointer;
        }
    }
}
`;