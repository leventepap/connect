import styled from "styled-components"

export const PostCardContainer = styled.div`
display: flex;
flex-direction: column;
width: 560px;
height: fit-content;
background: rgb(36,37,38);
align-items: center;
margin-bottom: 32px;

border-radius: 4px;
border: 1px solid rgba(61, 138, 228, 0.4);
box-shadow: 0px 0px 1px rgba(61, 138, 228, 0.4), 0px 10px 20px rgba(61, 138, 228, 0.4);

-webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
page-break-inside: avoid; /* Firefox */
break-inside: avoid; /* IE 10+ */


/* {
    border: 1px solid red;
}*/

.top,
.bottom,
.text {
    width: 500px;
    display: flex;
    flex-direction: row;
}
.top {
    margin-top: 30px;
}
.bottom {
    margin-bottom: 30px;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
}
.text {
    margin-top: 20px;
    height: fit-content;
}

.top > img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    :hover {
        cursor: pointer;
    }
}

.poster {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
}

h4,
h5,
h6 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    margin-block-end: 0px;
    margin-block-start: 0px;
    color: white;
}
h5,
h6 {
    font-size: 14px;
}
h4 {
    font-size: 16px;
}

.image {
    margin-top: 20px;
}

.s1 {
    height: 500px;
    width: 500px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    :hover {
        cursor: pointer;
    }
}

.left,
.like,
.share {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.like {
    margin-right: 40px;
}

.icon {
    height: 20px;
    width: 20px;
    margin-right: 18px;
}
`;