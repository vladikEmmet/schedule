import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { MapContext } from "../shared";
import { useInput } from "../store/store";

const DaySchedule = ({day}) => {
  const setRoom = useInput(state => state.setCabinet);
  const {handleSearchInput} = useContext(MapContext);
  const onClick = (cl) => {
    handleSearchInput(cl.room || "");
  }

  if(!day) return null;
    
  return (
    <Accordion allowToggle>
        <AccordionItem>
            <h2>
                <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                    {day.name}
                </Box>
                </AccordionButton>
            </h2>
                {day.classes.map(cl =>
                    <AccordionPanel pb={4} key={cl.time} onClick={() => onClick(cl)} cursor="pointer">
                        <Box>
                            <h3>{cl.name}</h3>
                            <h5>{cl.time}</h5>
                        </Box>
                        {/* <h4 color={cl.room ? "black" : "green"}>{cl.room || "Online"}</h4> */}
                        {cl.room ?
                            <h4>{cl.room}</h4> :
                            <h4 className="online">Online</h4>
                        }
                    </AccordionPanel>
                )}
        </AccordionItem>
    </Accordion>
  )
}

export default DaySchedule