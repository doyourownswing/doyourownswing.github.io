import { Box, Link, Typography } from "@mui/material";
import locationStyles from "./location.styles";

function Location() {
  return (
    <Box sx={locationStyles.locationContainer}>
      <Typography variant="h6">Location</Typography>
      <Link
        href="https://maps.app.goo.gl/SaV1ZcT82wXA2CHFA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant="body2" sx={locationStyles.address}>
          Studio M Ballroom Club
        </Typography>
        <Typography variant="body2" sx={locationStyles.address}>
          3550 Stevens Creek Blvd
        </Typography>
        <Typography variant="body2" sx={locationStyles.address}>
          San Jose, CA 95117 USA
        </Typography>
      </Link>
    </Box>
  );
}

export default Location;
