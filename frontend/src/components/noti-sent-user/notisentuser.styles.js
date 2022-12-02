import styled from "styled-components";
import clockin from "../../assets/icons/clock-in.png";
import clockac from "../../assets/icons/clock-ac.png";

export const NotiSentUserContainer = styled.div`
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
}

.pending {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
}

.pending {
    background-image: url(${clockin});
    background-size: 30px 30px;
    border: 1px solid rgba(245, 38, 252, 0.7);
    box-shadow: 0px 0px 1px rgba(245, 38, 252, 0.4), 0px 0px 20px rgba(245, 38, 252, 0.4);
    :hover {
        background-image: url(${clockac});
        box-shadow: 0px 0px 1px rgba(245, 38, 252, 0.4), 0px 0px 20px rgba(245, 38, 252, 0.4), inset 0px 0px 20px rgba(245, 38, 252, 0.4);
        cursor: pointer;
    }
}



`;