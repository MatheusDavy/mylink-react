import styled from 'styled-components';

export const Container = styled.div`
    width: 700px;
    height: 90%;
    background:  rgba(255, 255, 255, 0.349);
    border-radius: 20px;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    top: 5%;
    display: flex;
    flex-direction: column;

    .container-links{
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 0px;
        row-gap: 3rem;
        margin-top: 30px;
    }


`
export const Myself = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px auto;
    font-weight: bold;
    color: black;
    

    img{
        width: 150px;
        margin 0 auto 15px;
        border-radius: 50%;
        border: solid black;
    }

`
export const BtnLink = styled.button`
    width: 250px;
    height: 40px;
    background-color: white;
    border: none;
    border-radius: 100px;
    display: flex;
    cursor: pointer;
    margin: 0 auto;
    transition: 0.4s;

    :hover{
        transform: scale(1.05);
        box-shadow: 0px 7px 10px -3px rgba(0,0,0,0.68);

        ion-icon{
            color: #4122F2;
            transform: scale(1.15)
        }
        span{
            color:#4122F2;
            font-weight:bold;
        }
    }
    
    ion-icon{
        width: 25px;
        height: 25px;
        color: black;
        align-self: flex-start;
        align-self: center;
        transition: 0.4s;
    }

    span{
        margin: 0 auto;
        align-self: center;
        color: black;
        font-size: 15px; 
    }
    
`







