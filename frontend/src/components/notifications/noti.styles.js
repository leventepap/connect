import styled from "styled-components";

export const NotiContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;

    top: 70px;
    right: 250px;
    width: 360px;
    background-color: rgb(36, 37, 38);

    border: 1px solid rgba(245, 38, 252, 0.4);
    border-radius: 4px;
    box-shadow: 0px 0px 1px rgba(245, 38, 252, 0.4), 0px 10px 20px rgba(245, 38, 252, 0.4);
    

.sent,
.received {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: white;
    margin-left: 30px;
}

.received {
    margin-top: 30px;
    margin-bottom: 40px;
}

.sent {
    margin-top: 15px;
    margin-bottom: 40px;
}
`;