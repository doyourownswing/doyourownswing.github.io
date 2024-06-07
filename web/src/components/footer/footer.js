import { Grid } from "@mui/material";
import footerStyles from "./footer.styles";
import Brand from "./subcomponents/brand/brand";
import Contact from "./subcomponents/contact/contact";
import Location from "./subcomponents/location/location";
import Browse from "./subcomponents/browse/browse";
import Policies from "./subcomponents/policies/policies";
import { PolicyOptions, BrowseOptions } from "components/nav_bar/nav_options";

function Footer() {
  return (
    <Grid container sx={footerStyles.footerContainer} rowGap={2}>
      <Grid xs={12} sm={4} md={2}>
        <Brand />
      </Grid>
      {BrowseOptions.length && (
        <Grid xs={6} sm={4} md={2}>
          <Browse />
        </Grid>
      )}
      {PolicyOptions.length && (
        <Grid xs={6} sm={4} md={2}>
          <Policies />
        </Grid>
      )}
      <Grid xs={6} sm={6} md={3}>
        <Location />
      </Grid>
      <Grid xs={6} sm={4} md={2}>
        <Contact />
      </Grid>
    </Grid>
  );
}

export default Footer;
