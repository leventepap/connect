import styled from "styled-components";
import deletein from "../../assets/icons/delete-in.png";
import deleteac from "../../assets/icons/delete-ac.png";

export const TagsContainer = styled.div`

width: fit-content;
display: flex;
flex-direction: row;
margin-bottom: 5px;

.tagleft {
    background: rgba(255, 255, 255, .1);
    width: 18px;
    height: 30px;
    border-radius: 15px 0px 0px 15px;
}

.tagmiddle {
    color: white;
    font-size: 12px;
    height: 30px;
    background: rgba(255, 255, 255, .1);
    display: flex;
    align-items: center;
}

.tagright {
    background: rgba(255, 255, 255, .1);
    width: 30px;
    height: 30px;
    border-radius: 0px 15px 15px 0px;
    border: none;
    background-image: url(${deletein});
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 10px;
    cursor: pointer;
}

:hover {
    .tagleft {
       box-shadow:
            inset 0px 8px 6px -6px rgba(82, 68, 255, 0.4),
            inset 0px -8px 6px -6px rgba(82, 68, 255, 0.4),
            inset 8px 0px 6px -6px rgba(82, 68, 255, 0.4);
    }
    .tagmiddle {
        box-shadow:
            inset 0px 8px 6px -6px rgba(82, 68, 255, 0.4),
            inset 0px -8px 6px -6px rgba(82, 68, 255, 0.4);
    }
    .tagright {
        box-shadow:
            inset 0px 8px 6px -6px rgba(82, 68, 255, 0.4),
            inset 0px -8px 6px -6px rgba(82, 68, 255, 0.4),
            inset -8px 0px 6px -6px rgba(82, 68, 255, 0.4);
        background-image: url(${deleteac});
    }
}
`;