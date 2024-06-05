import { Box, Typography } from "@mui/material";
import prideLogo from "../../../../assets/images/color_logo_512.png";
import brandStyles from "./brand.styles";
import messages from "../../../../common/messages";

function Brand() {
  return (
    <Box sx={brandStyles.brandContainer}>
      <Box sx={brandStyles.logoContainer}>
        <Box
          component="img"
          sx={brandStyles.logoImage}
          alt="Do Your Own Swing progress-themed logo"
          src={prideLogo}
        />
        <Typography variant="h5">{messages.dyos}</Typography>
      </Box>
      <Typography>{messages.doYourOwnSwingYear}</Typography>
    </Box>
  );
}

export default Brand;
