import { v4 as uuid } from "uuid";
import { useState } from "react";

import { Container, Input, Button, List, DivContent,DivList, } from "./styles";

import { FcFullTrash, FcCheckmark  } from "react-icons/fc";

function App() {
  const [list, setList] = useState([ ]);
  const [task, setTask] = useState(" ");

  function inputChange(event) {
    setTask(event.target.value);
  }

  function buttonClick() {
    setList([...list, { id: uuid(), task, finished: false }]);
  }

  function finalizarTarefa(id){
    const newList = list.map( item => (
      item.id === id ? { ...item, finished: !item.finished} : item
    ))

    setList(newList)
  }
  function deletarTarefa(id){
    const newList = list.filter((item) => (item.id !== id))

    setList(newList)
  }

  return (
    <Container>
      <DivContent>
        <Input
          onChange={inputChange}
          placeholder="O que tenha para fazer..."
        ></Input>
        <Button onClick={buttonClick}>Adicionar</Button>
        <DivList>
          <>
            {list.map((item) => (
              <List key={item.id} isFinished={item.finished}>
              <FcCheckmark className="check" onClick={() => finalizarTarefa(item.id)}/>
              <li >{item.task}</li>
              <FcFullTrash className="check" onClick={() => deletarTarefa(item.id)}/>
              </List>
            ))}
          </>
        </DivList>
      </DivContent>
    </Container>
  );
}

export default App;
