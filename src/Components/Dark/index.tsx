import { Pane, majorScale, Heading, IconButton, Checkbox, CrossIcon } from "evergreen-ui";

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
    <Pane flex='1' background='gray900' padding={majorScale(4)}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Heading paddingTop={majorScale(8)} size={900} color='#FAFBFF'>
          Done {doneList.length ? `: ${doneList.length}` : null}
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
                      <Heading marginY='auto' overflow='hidden' max-width='300px' color='#FAFBFF'>
                        {item.value}
                      </Heading>
                    </div>
                    <IconButton
                      icon={CrossIcon}
                      borderRadius='50%'
                      borderColor='#FAFBFF'
                      backgroundColor='#101840'
                      onClick={() => handleDeleteDone(item.key)}
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

export default Dark;
