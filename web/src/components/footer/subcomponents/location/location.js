import { Box, Link, Typography } from "@mui/material";
import locationStyles from "./location.styles";

const locationLines = [
  "Studio M Ballroom Club",
  "3550 Stevens Creek Blvd",
  "San Jose, CA 95117 USA",
];

function Location() {
  return (
    <Box sx={locationStyles.locationContainer}>
      <Typography variant="h6">Location</Typography>
      <Box sx={locationStyles.linkContainer}>
        <Link
          href="https://maps.app.goo.gl/SaV1ZcT82wXA2CHFA"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={locationStyles.address}
        >
          {locationLines.map((line) => (
            <Typography variant="body2">{line}</Typography>
          ))}
        </Link>
      </Box>
    </Box>
  );
}

export default Location;
