import styled from "styled-components"
import s1 from "../../assets/images/sample1.jpg";
import s2 from "../../assets/images/sample2.jpg";
import s3 from "../../assets/images/sample3.jpg";
import s4 from "../../assets/images/sample4.jpg";

export const PostCardContainer = styled.div`
display: flex;
flex-direction: column;
width: 560px;
height: fit-content;
background: rgb(36,37,38);
align-items: center;
margin-bottom: 32px;
border-radius: 4px;

border: 1px solid rgba(245, 38, 252, 0.4);
box-shadow: 0px 0px 1px rgba(245, 38, 252, 0.4), 0px 10px 20px rgba(245, 38, 252, 0.4);


-webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
page-break-inside: avoid; /* Firefox */
break-inside: avoid; /* IE 10+ */

/* {
    border: 1px solid red;
}*/

.top,
.bottom,
.text,
.topimg,
.bottomimg {
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
}

.top > img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
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
    height: 500px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: space-between;
}

.topimg,
.bottomimg {
    justify-content: space-between
}

.s1,
.s2,
.s3,
.s4 {
    height: 240px;
    width: 240px;
    background-size: cover;
    background-repeat: no-repeat;
}

.s1 {
    background-image: url(${s1});
}
.s2 {
    background-image: url(${s2});
}
.s3 {
    background-image: url(${s3});
}
.s4 {
    background-image: url(${s4});
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