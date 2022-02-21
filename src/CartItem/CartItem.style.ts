import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 20px;
    border-bottom: 1px solid lightblue;
    div{
        flex: 1;
    }
    .information, .buttons{
        display: flex;
        justify-content:space-between;
    }
    img{
        max-width: 80px;
        margin-left: 40px;
        object-fit: cover;
    }
`;