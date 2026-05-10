import { Box, Button, Container, Fade, Stack, Typography } from "@mui/material";
import MimiPic from "@/assets/images/pets/mimi_1.jpg";
import notFoundStyles from "./not_found.styles";
import messages from "./messages";
import { REGISTRATION_FORM_LINK, MERCH_STORE_LINK } from "@/common/constants";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// A map from pathnames that should redirect to an external site
// to the external URL the path should redirect to
const pageRedirects = {
  merch: MERCH_STORE_LINK,
  register: REGISTRATION_FORM_LINK,
};

function NotFoundMessage() {
  return (
    // Adds a 1 second delay to avoid the flash of the 404 page before the next page renders
    // This is because the client side performs a redirect which will trigger the catch-all routing
    // prior to the network request to fetch the next page. A delay of 1s is not fool-proof,
    // but should catch the majority of cases.
    <Fade in={true} sx={{ transitionDelay: "1s" }}>
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
    </Fade>
  );
}

/**
 * A component for unknown routes that can also handle redirecting to
 * external sites. If the path isn't in `pageRedirects`, displays a generic
 * 404/not found message.
 */
function NotFound() {
  const location = useLocation();

  useEffect(() => {
    // Note: react-snap hasn't been maintained, so as a result we have to use
    // String.replace() with regex in place of String.replaceAll(), as the latter
    // was introduced recently as part of ES2021
    const pathWithoutSlashes = location.pathname.replace(/\//g, "");
    if (pageRedirects[pathWithoutSlashes]) {
      window.location.replace(pageRedirects[pathWithoutSlashes]);
    }
  }, [location.pathname]);

  return <NotFoundMessage />;
}

export default NotFound;
