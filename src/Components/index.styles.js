import styled from 'styled-components'
const WrapMain = styled.div`
margin: 128px auto 300px auto;
width: 90vw;
max-width: 500px;
height: calc(100% - 420px);
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
/* width: 90vw; */
/* margin: 8rem auto 0; */
padding: 32px ;
transition: all .3s linear;

    .add-announcement, .delete-announcement {
        background-color: #D4EDDA;
        color: #155724;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        padding: 5px 0;
        margin:5px 0 20px 0;
    }
    .delete-announcement {
        background-color: #f8d7da;
        color: #721c24;
    }
    .title {
        margin-bottom: 30px;
        color: #063252;
        font-size: 28px;
        line-height: 28px;
        font-weight: 700;
    }
    .wrap-input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
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
            width: 80px;
            border-radius: 0px 3px 3px 0;
            transition: all 0.5s linear;
            :hover {
                background-color: #49A6E9;
                color: #fff;
            }
            
        }
    }
    .item-list {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        height: 35px;
        border-radius: 3px;
        :hover {
            color: #617d98;
            background-color: #F1F5F8;
            
        }
        .item-style {
            color: #102a42;
            margin-left: 15px;
        }
    }
    .btn-group {
        margin-right: 15px;
        .btn-style {
            appearance: none;
            outline: none;
            border: none;
            background: none;
            .edit-btn {
                fill: #6be675;
                :hover {
                    fill: #25bb32;
                }
            }
            .delete-btn {
                fill: #e66b6b;
                :hover {
                    fill: #bb2525;
                }
            }
        }
    }
    .btn-clear-all {
        color: #e66b6b;
        
        border: none;
        background-color: transparent;
        font-size:15px;
        width: 156px;
        height: 20px;
        :hover {
            color: #bb2525;
        }
    }
`;
export {WrapMain}