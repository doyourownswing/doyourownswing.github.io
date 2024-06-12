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
      <Link
        href="https://maps.app.goo.gl/SaV1ZcT82wXA2CHFA"
        target="_blank"
        rel="noopener noreferrer"
      >
        {locationLines.map((line) => (
          <Typography key={line} variant="body2" sx={locationStyles.address}>
            {line}
          </Typography>
        ))}
      </Link>
    </Box>
  );
}

export default Location;
