import {
  Pane,
  majorScale,
  Heading,
  TextInput,
  IconButton,
  PlusIcon,
  Card,
  Checkbox,
  CrossIcon,
  toaster,
} from "evergreen-ui";

type LightProps = {
  toDoList: Array<{
    key: string;
    value: string;
    isChecked: boolean;
  }>;
  handleDeleteTodo: (key: string) => void;
  handleCheck: (key: string, value: string) => void;
};

const Light = ({ toDoList, handleDeleteTodo, handleCheck }: LightProps) => {
  return (
    <Pane height='100vh' width='100%' background='gray50' padding={majorScale(4)}>
      <div
        style={{
          color: "#101840",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxWidth: "400px",
          overflowY: "auto",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Heading paddingTop={majorScale(8)} size={900}>
          To Do
        </Heading>
        {toDoList.length
          ? toDoList
              .slice(0)
              .reverse()
              .map((item) => {
                return (
                  <Pane display='flex' justifyContent='space-between' marginTop={majorScale(2)}>
                    <div style={{ display: "inline-flex", textAlign: "left" }}>
                      <Checkbox
                        marginRight={majorScale(2)}
                        checked={item.isChecked}
                        onChange={() => handleCheck(item.key, item.value)}
                      ></Checkbox>
                      <Heading
                        marginY='auto'
                        overflow='hidden'
                        width='300px'
                        style={{
                          textDecoration: item.isChecked ? "line-through" : "none",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.value}
                      </Heading>
                    </div>
                    <IconButton icon={CrossIcon} onClick={() => handleDeleteTodo(item.key)} marginY='auto' />
                  </Pane>
                );
              })
          : null}
      </div>
    </Pane>
  );
};

export default Light;
