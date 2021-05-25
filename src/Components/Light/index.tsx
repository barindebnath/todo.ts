import { Pane, majorScale, Heading, IconButton, Checkbox, CrossIcon } from "evergreen-ui";

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
    <Pane flex='1' background='gray50' padding={majorScale(4)}>
      <div
        style={{
          color: "#101840",
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Heading paddingTop={majorScale(8)} size={900}>
          To Do {toDoList.length ? `: ${toDoList.length}` : null}
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
                        max-width='300px'
                        style={{
                          textDecoration: item.isChecked ? "line-through" : "none",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.value}
                      </Heading>
                    </div>
                    <IconButton
                      icon={CrossIcon}
                      borderRadius='50%'
                      onClick={() => handleDeleteTodo(item.key)}
                      marginY='auto'
                    />
                  </Pane>
                );
              })
          : null}
      </div>
    </Pane>
  );
};

export default Light;
