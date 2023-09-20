import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import Home from "../page/Home";
import { isIOS } from "mobile-device-detect";
import MapProvider from "./MapProvider";
import Schedule from "../components/Schedule";
import DaySchedule from "../components/DaySchedule";

function App() {
  return (
    <MapProvider>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <CSSReset />
            <Home isIOS={isIOS} />
            <Schedule />
            <DaySchedule />
          </ColorModeProvider>
        </ThemeProvider>
      </ChakraProvider>
    </MapProvider>
  );
}

export default App;
