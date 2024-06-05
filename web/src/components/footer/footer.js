import { Box } from "@mui/material";
import footerStyles from "./footer.styles";
import Brand from "./subcomponents/brand/brand";
import Contact from "./subcomponents/contact/contact";
import Location from "./subcomponents/location/location";

function Footer() {
  return (
    <Box sx={footerStyles.footerContainer}>
      <Box sx={footerStyles.brand}>
        <Brand></Brand>
      </Box>
      <Location></Location>
      <Contact></Contact>
    </Box>
  );
}

export default Footer;
