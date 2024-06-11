import { Box, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as Logo } from "assets/svgs/color-logo.svg";
import brandStyles from "./brand.styles";
import messages from "common/messages";

function Brand() {
  return (
    <Box sx={brandStyles.brandContainerContainer}>
      <Box>
        <Box sx={brandStyles.logoContainer}>
          <SvgIcon
            component={Logo}
            viewBox="0 0 640 600"
            sx={brandStyles.logoImage}
          />
          <Typography variant="h5" sx={brandStyles.logoText}>
            {messages.dyos}
          </Typography>
        </Box>
        <Typography variant="caption">{messages.doYourOwnSwingYear}</Typography>
      </Box>
    </Box>
  );
}

export default Brand;
