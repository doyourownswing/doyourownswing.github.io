import { Box } from "@mui/material";
import footerStyles from "./footer.styles";
import Brand from "./subcomponents/brand/brand";
import Contact from "./subcomponents/contact/contact";
import Location from "./subcomponents/location/location";
import Browse from "./subcomponents/browse/browse";
import Policies from "./subcomponents/policies/policies";
import { PolicyOptions, BrowseOptions } from "components/nav_bar/nav_options";

function Footer() {
  return (
    <Box sx={footerStyles.footerContainer}>
      <Brand />
      {BrowseOptions.length > 0 && <Browse />}
      {PolicyOptions.length > 0 && <Policies />}
      <Location />
      <Contact />
    </Box>
  );
}

export default Footer;
