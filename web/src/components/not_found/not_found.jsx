import { Box, Button, Container, Stack, Typography } from "@mui/material";
import MimiPic from "@/assets/images/pets/mimi_1.jpg";
import notFoundStyles from "./not_found.styles";
import messages from "./messages";
import { printfulLink } from "../home/subcomponents/merch/merch";
import { REGISTRATION_FORM_LINK } from "@/common/constants";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// A map from URL segments that don't correspond to a link
// to pages that the segment should redirect to
const pageRedirects = {
  merch: printfulLink,
  register: REGISTRATION_FORM_LINK,
};

function NotFound() {
  const location = useLocation();
  useEffect(() => {
    const pathWithoutSlashes = location.pathname.replaceAll("/", "");
    if (pageRedirects[pathWithoutSlashes]) {
      window.location.replace(pageRedirects[pathWithoutSlashes]);
    }
  }, [location.pathname]);

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
            <Button variant="contained" sx={notFoundStyles.button} href="/">
              {messages.goHome}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default NotFound;
