import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from "reactstrap";
import styled from "styled-components";

const todo = () => {
  return (
    <>
      <Todo__background>
        <Todo__area>
          <Todo__info>
            <InputGroup>
              <Input placeholder='username' className='inputbar'/>
              <InputGroupAddon addonType='append'>
                {/* <InputGroupText> */}
                  <Button>Add</Button>
                {/* </InputGroupText> */}
              </InputGroupAddon>
            </InputGroup>
          </Todo__info>
          <Todo__list>
            <ul>list</ul>
            <ul>list</ul>
            <ul>list</ul>
            <ul>list</ul>
          </Todo__list>
        </Todo__area>
      </Todo__background>
    </>
  );
};

export default todo;

const Todo__background = styled.div`
  background-color: #eed8f7;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;
const Todo__area = styled.div`
  background-color: skyblue;
  box-shadow: 5px 8px 31px -2px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 5px 8px 31px -2px rgba(0, 0, 0, 1);
  -moz-box-shadow: 5px 8px 31px -2px rgba(0, 0, 0, 1);  
  height: 800px;
  border-radius: 20px;
  width: 60%;
`;
const Todo__info = styled.div`
  margin-top: 20px;

  padding: 1.2em;
  display: flex;
  justify-content: center;
  .inputbar{
    width: 50px;
}
`;
const Todo__list = styled.div`

`
