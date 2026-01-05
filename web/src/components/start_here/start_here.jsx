import { Box, Container } from "@mui/material";
import { startHereContainerStyles } from "./start_here.styles";
import Faqs from "./subcomponents/faqs";
import { MuiMarkdown } from "mui-markdown";
import title from "./copy/title_section.md?raw";
import beforeTheEvent from "./copy/before_the_event.md?raw";
import whenYouArrive from "./copy/when_you_arrive.md?raw";

function StartHere() {
  return (
    <Box>
      <Container sx={{ ...startHereContainerStyles }}>
        <MuiMarkdown>{title}</MuiMarkdown>
        <MuiMarkdown>{beforeTheEvent}</MuiMarkdown>
        <MuiMarkdown>{whenYouArrive}</MuiMarkdown>
      </Container>
      <Faqs />
    </Box>
  );
}

export default StartHere;
