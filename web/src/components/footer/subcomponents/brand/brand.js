import { Box, SvgIcon, Typography } from "@mui/material";
import brandStyles from "./brand.styles";
import messages from "common/messages";
import { ColorLogo } from "components/common/logos";

function Brand() {
  return (
    <Box sx={brandStyles.brandContainerContainer}>
      <Box>
        <Box sx={brandStyles.logoContainer}>
          <ColorLogo sx={brandStyles.logoImage} />
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
