import { ChangeEvent, FormEvent, useState } from "react";
import { Pane, TextInput, IconButton, PlusIcon, Card, toaster } from "evergreen-ui";
import styled from "styled-components";
import Dark from "./Components/Dark";
import Light from "./Components/Light";

const App = () => {
  const [value, setValue] = useState("");
  const [toDoList, setToDoList] = useState<
    Array<{
      key: string;
      value: string;
      isChecked: boolean;
    }>
  >([]);
  const [doneList, setDoneList] = useState<
    Array<{
      key: string;
      value: string;
      isChecked: boolean;
    }>
  >([]);

  const handleAdd = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (value.trim() != "") {
      setToDoList([...toDoList, { value: value, key: Math.random().toString(36).substr(2, 9), isChecked: false }]);
      setValue("");
    } else toaster.warning("Input field is empty.");
  };

  const handleDeleteTodo = (key: string) => setToDoList([...toDoList.filter((item) => item.key !== key)]);

  const handleDeleteDone = (key: string) => setDoneList([...doneList.filter((item) => item.key !== key)]);

  const handleCheck = (key: string, value: string) => {
    setToDoList([...toDoList.filter((item) => item.key !== key)]);
    setDoneList([...doneList, { value: value, key: key, isChecked: true }]);
  };

  const handleUnCheck = (key: string, value: string) => {
    setDoneList([...doneList.filter((item) => item.key !== key)]);
    setToDoList([...toDoList, { value: value, key: key, isChecked: false }]);
  };

  return (
    <Container>
      <Form onSubmit={handleAdd}>
        <Card display='flex' border='default' borderColor='#101840' position='relative'>
          <TextInput
            min-width='100%'
            height='50px'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            value={value.charAt(0).toUpperCase() + value.slice(1)}
            border='none'
            placeholder='Add New Item'
          />
          <IconButton
            icon={PlusIcon}
            font-size='24px'
            onClick={handleAdd}
            border='none'
            position='absolute'
            right='9px'
            top='9px'
            zIndex={9}
            style={{ color: "#101840" }}
          />
        </Card>
      </Form>
      <Light toDoList={toDoList} handleDeleteTodo={handleDeleteTodo} handleCheck={handleCheck} />
      <Dark doneList={doneList} handleDeleteDone={handleDeleteDone} handleUnCheck={handleUnCheck} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 24px);
  max-width: 400px;
`;
