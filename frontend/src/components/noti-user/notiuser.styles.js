import styled from "styled-components";
import yesin from "../../assets/icons/yes-in.png";
import yesac from "../../assets/icons/yes-ac.png";
import noin from "../../assets/icons/no-in.png";
import noac from "../../assets/icons/no-ac.png";

export const NotiUserContainer = styled.div`
display: flex;
flex-direction: row;
width: 300px;
margin-left: 30px; 
align-items: center;
justify-content: space-between;
margin-bottom: 25px;

/* {
    border: 1px solid red;
}*/

.notileft {
    display: flex;
    flex-direction: row;
}

img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
}

.user {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    justify-content: space-between;
    > .name,
      .location {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }

    > .name {
        color: white;
    }

    > .location {
        color: gray;     
    }
}

.notiright {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 87px;
}

.yes,
.no {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
}

.yes {
    background-image: url(${yesin});
    background-size: 30px 30px;
    border: 1px solid rgba(92, 224, 57, 0.7);
    box-shadow: 0px 0px 1px rgba(92, 224, 57, 0.4), 0px 0px 20px rgba(92, 224, 57, 0.4);
    :hover {
        background-image: url(${yesac});
        box-shadow: 0px 0px 1px rgba(92, 224, 57, 0.4), 0px 0px 20px rgba(92, 224, 57, 0.4), inset 0px 0px 20px rgba(92, 224, 57, 0.4);
        cursor: pointer;
    }
}

.no {
    background-image: url(${noin});
    background-size: 25px 25px;
    border: 1px solid rgba(255, 37, 37, 0.7);
    box-shadow: 0px 0px 1px rgba(255, 37, 37, 0.4), 0px 0px 20px rgba(255, 37, 37, 0.4);
    align-self: right;
    :hover {
        background-image: url(${noac});
        box-shadow: 0px 0px 1px rgba(255, 37, 37, 0.4), 0px 0px 20px rgba(255, 37, 37, 0.4), inset 0px 0px 20px rgba(255, 37, 37, 0.4);
        cursor: pointer;
    }
}

`;