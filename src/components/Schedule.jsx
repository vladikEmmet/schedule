import { MenuItem, MenuList, Menu, MenuButton, IconButton } from "@chakra-ui/react";
import { useSchedule } from "../store/store";
import { scheduleClasses } from "../utils/scheduleClasses";
import { HamburgerIcon } from "@chakra-ui/icons";
import DaySchedule from "./DaySchedule";


const Schedule = () => {
  const schedule = useSchedule();

  const onClick = (day) => {
    schedule.open(day.name);
  }
    
  return (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
            color={"black"}
            position="absolute"
            top={20}
            right={20}
        />
        <MenuList>
            {scheduleClasses.map(day => 
                <DaySchedule day={day} key={day.name}/>
            )}
        </MenuList>
    </Menu>
  )
}

export default Schedule