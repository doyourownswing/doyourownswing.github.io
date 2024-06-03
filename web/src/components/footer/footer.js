import { Box } from "@mui/material";
import footerStyles from "./footer.styles";
import Brand from "./subcomponents/brand/brand";
import Contact from "./subcomponents/contact/contact";
import Location from "./subcomponents/location/location";
import Browse from "./subcomponents/browse/browse";
import Policies from "./subcomponents/policies/policies";
import FeatureFlags from "infra/feature_flags";

function Footer() {
  return (
    <Box sx={footerStyles.footerContainer}>
      <Brand />
      <Browse />
      {(FeatureFlags.showHealthTab || FeatureFlags.showCodeOfConductTab) && (
        <Policies />
      )}
      <Location />
      <Contact />
    </Box>
  );
}

export default Footer;
