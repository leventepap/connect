import styled from "styled-components"
import searchin from '../../assets/icons/search-in.png';
import searchac from '../../assets/icons/search-ac.png';

export const SearchBarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: calc(100vw - (100vw - 100%));
height: 80px;
background: /*rgb(36,5,109)*/ rgb(36, 37, 38);
border-bottom: 1px solid rgba(255, 77, 166, 0.4);
z-index: 0;

/*{
    border: 1px solid red;
}*/

.left {
    margin-left: 150px;
}

input {
    width: 250px;
    height: 100%;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 400;
    color: white;
    background: url(${searchin});
    background-repeat: no-repeat;
    background-size: 28px 28px;
    background-position: 15px 26px;
    padding-left: 52px;
}

input:focus,
input:hover {
    outline: none;
    background: url(${searchac});
    background-repeat: no-repeat;
    background-size: 28px 28px;
    background-position: 15px 26px;
}

.right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 200px;
    align-items: center;
    width: 275px;
}

.option {
    display: flex;
    height: 100%;
    align-items: center;
}

p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: white;
}

.option:hover {
    color: rgb(214, 241, 241);
    text-shadow: 
        0 0 30px rgb(61, 138, 228),
        0 0 28px rgb(61, 138, 228), 
        0 0 26px rgb(61, 138, 228),
        0 0 24px rgb(61, 138, 228),
        0 0 22px rgb(61, 138, 228),
        0 0 20px rgb(61, 138, 228),
        0 0 18px rgb(61, 138, 228),
        0 0 16px rgb(61, 138, 228),
        0 0 14px rgb(61, 138, 228),
        0 0 12px rgb(61, 138, 228),
        0 0 10px rgb(61, 138, 228);
    cursor: pointer;
}
`;