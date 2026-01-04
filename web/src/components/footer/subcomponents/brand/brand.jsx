import { Box, Typography } from "@mui/material";
import brandStyles from "./brand.styles";
import messages from "@/common/messages";
import { ColorLogo } from "@/components/common/logos";

function Brand() {
  const thisYear = new Date().getFullYear();
  return (
    <Box sx={brandStyles.brandContainerContainer}>
      <Box>
        <Box sx={brandStyles.logoContainer}>
          <ColorLogo sx={brandStyles.logoImage} />
          <Typography sx={brandStyles.logoText}>{messages.dyos}</Typography>
        </Box>
        <Typography variant="caption">
          {messages.doYourOwnSwing} {thisYear}
        </Typography>
      </Box>
    </Box>
  );
}

export default Brand;
