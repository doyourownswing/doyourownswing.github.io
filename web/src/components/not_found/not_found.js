import { Box, Button, Container, Stack, Typography } from "@mui/material";
import MimiPic from "assets/images/pets/mimi_1.jpg";
import notFoundStyles from "./not_found.styles";
import messages from "./messages";

function NotFound() {
  return (
    <Box>
      <Container>
        <Stack flexDirection={{ md: "row" }}>
          <Box
            component="img"
            sx={notFoundStyles.image}
            alt="A picture of a really cute cat"
            src={MimiPic}
          />
          <Box sx={notFoundStyles.rightContent}>
            <Typography variant="h3">{messages.lost}</Typography>
            <Button variant="contained" sx={notFoundStyles.button} href="#/">
              {messages.goHome}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default NotFound;
