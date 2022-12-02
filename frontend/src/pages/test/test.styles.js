import styled from "styled-components"

export const TestContainer = styled.div`
display: flex;
flex-direction: column;
height: fit-content;
width: calc(100vw - (100vw - 100%));
background-color: rgb(24,25,26);
align-items: center;
overflow-x: hidden;

.container {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    width: 1152px;
    -webkit-column-gap: 32px;
    -moz-column-gap: 32px;
    column-gap: 32px;
    margin-top: 32px;
    margin-bottom: 32px;

    /*height: 800px;
    width: 1152px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;*/
}

/* {
    border: 1px solid red;
}*/

`;