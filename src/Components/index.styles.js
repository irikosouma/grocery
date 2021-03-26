import styled from 'styled-components'
const WrapMain = styled.div`
margin: 120px auto 300px auto;
width: 500px;
height: calc(100% - 420px);
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
color: #063252;
font-size: 28px;
line-height: 28px;
font-weight: 700;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 30px ;
    .title {
        margin-bottom: 30px;
    }
    .wrap-input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        #input {
            flex: 1 1 auto;
            height: 28px;
            border: none;
            background-color: #F1F5F8;
            border-radius: 3px 0 0 3px;
            padding-left: 15px;
            color: #617d98;
            font-size: 16px;
        }
        .btn-submit {
            border: none;
            appearance: none;
            outline: none;
            background-color: #a5d5f8;
            height: 30px;
            border-radius: 0px 3px 3px 0;
            
        }
    }
`;
export {WrapMain}