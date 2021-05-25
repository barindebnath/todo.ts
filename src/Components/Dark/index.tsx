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
  doneList: Array<{
    key: string;
    value: string;
    isChecked: boolean;
  }>;
  handleDeleteDone: (key: string) => void;
  handleUnCheck: (key: string, value: string) => void;
};

const Dark = ({ doneList, handleDeleteDone, handleUnCheck }: LightProps) => {
  return (
    <Pane height='100vh' width='100%' background='gray900' padding={majorScale(4)}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxWidth: "400px",
          overflowY: "auto",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Heading paddingTop={majorScale(8)} size={900} color='#FAFBFF'>
          Done
        </Heading>
        {doneList.length
          ? doneList
              .slice(0)
              .reverse()
              .map((item) => {
                return (
                  <Pane display='flex' justifyContent='space-between' marginTop={majorScale(2)}>
                    <div style={{ display: "inline-flex", textAlign: "left" }}>
                      <Checkbox
                        marginRight={majorScale(2)}
                        checked={item.isChecked}
                        onChange={() => handleUnCheck(item.key, item.value)}
                      ></Checkbox>
                      <Heading marginY='auto' overflow='hidden' width='300px' color='#FAFBFF'>
                        {item.value}
                      </Heading>
                    </div>
                    <IconButton icon={CrossIcon} onClick={() => handleDeleteDone(item.key)} marginY='auto' />
                  </Pane>
                );
              })
          : null}
      </div>
    </Pane>
  );
};

export default Dark;
