import styled from "styled-components";
import trashin from "../../assets/icons/trash-in.png";
import trashac from "../../assets/icons/trash-ac.png";
import uploadin from "../../assets/icons/upload-in.png";
import uploadac from "../../assets/icons/upload-ac.png";

export const ProfilePicContainer = styled.div`
    width: 181px;
    height: 96px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    background-color: #111;
    border-radius: 4px;
    margin-right: 10px;
    justify-content: space-around;
    position: relative;
    top: 15px;
    left: 5px;
    border: 1px solid rgba(82, 68, 255, 0.4);
    box-shadow: 0px 0px 1px rgba(82, 68, 255, 0.4), 0px 10px 20px rgba(82, 68, 255, 0.4);

.remove,
.picupload {
    width: 181px;
    height: 40px;
    border-radius: 4px;
    border: none;
    background-color: #111;
}

.picupload {
    background-image: url(${uploadin});
    background-repeat: no-repeat;
    background-size: 25px 25px;
    background-position: 15px 7px;
    ::-webkit-file-upload-button {
        visibility: hidden;
    }
    ::before {
        content: 'Upload';
        font-size: 14px;
        display: inline-block;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        padding-left: 64px;
        padding-top: 12px;
        color: white;
    }
    :hover {
        background-image: url(${uploadac});
        box-shadow: 
            inset 0px 0px 5px rgba(82, 68, 255, 0.4),
            inset 0px 0px 10px rgba(82, 68, 255, 0.4),
            inset 0px 0px 15px rgba(82, 68, 255, 0.4), 
            inset 0px 0px 20px rgba(82, 68, 255, 0.4);
        border-radius: 4px;
        cursor: pointer;
    }
}

.remove {
    background-image: url(${trashin});
    background-repeat: no-repeat;
    background-size: 25px 25px;
    background-position: 15px 7px;
    font-size: 14px;
    color: white;
    :hover {
        background-image: url(${trashac});
        box-shadow: 
            inset 0px 0px 5px rgba(82, 68, 255, 0.4),
            inset 0px 0px 10px rgba(82, 68, 255, 0.4),
            inset 0px 0px 15px rgba(82, 68, 255, 0.4), 
            inset 0px 0px 20px rgba(82, 68, 255, 0.4);
        border-radius: 4px;
        cursor: pointer;
    }
}
`;