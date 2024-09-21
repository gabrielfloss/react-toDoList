import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  
`

export const DivContent = styled.div`
  background-color: #ffffff;
  padding: 30px 20px;
  width: 541px;
  border-radius: 5px;
  max-height: 700px;
  
`

export const Input = styled.input`
  width: 342px;
  height: 45px;
  border: 2px solid #D1D3D466;
  border-radius: 5px;
  padding-left: 10px;
  color: #000000;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.58px;
  margin-right: 18px;
  
`

export const Button = styled.button`
  width: 130px;
  height: 40px;
  background-color: #8052EC;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 900;
  line-height: 2.5;
  cursor: pointer;

`

export const DivList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`

export const List = styled.div`
  background: ${(props) => (props.isFinished ? "#E8FF8B" : "#e4e4e4")};
  width: 500px;
  height: 60px;
  border-radius: 5px;
  box-shadow: 1px 4px 10px 0px #00000033;
  margin: 6px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  
  .check{
    cursor: pointer;
    transition: 0.5s;
  }
  .check:hover{
    background-color: white;
    width: 20px;
    height: 20px;
  }
`

