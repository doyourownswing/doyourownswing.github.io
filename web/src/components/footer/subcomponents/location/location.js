import { Box, Link, Typography } from "@mui/material";
import locationStyles from "./location.styles";

<<<<<<< HEAD
const locationLines = [
  "Studio M Ballroom Club",
  "3550 Stevens Creek Blvd",
  "San Jose, CA 95117 USA",
];

=======
>>>>>>> 9d5ff75 (Creates the first version of the footer component)
function Location() {
  return (
    <Box sx={locationStyles.locationContainer}>
      <Typography variant="h6">Location</Typography>
<<<<<<< HEAD
      <Link
        href="https://maps.app.goo.gl/SaV1ZcT82wXA2CHFA"
        target="_blank"
        rel="noopener noreferrer"
      >
        {locationLines.map((line) => (
          <Typography variant="body2" sx={locationStyles.address}>
            {line}
          </Typography>
        ))}
=======
      <Link href="https://maps.app.goo.gl/SaV1ZcT82wXA2CHFA" target="_blank">
        <Typography variant="body2" sx={locationStyles.address}>
          Studio M Ballroom Club
        </Typography>
        <Typography variant="body2" sx={locationStyles.address}>
          3550 Stevens Creek Blvd
        </Typography>
        <Typography variant="body2" sx={locationStyles.address}>
          San Jose, CA 95117 USA
        </Typography>
>>>>>>> 9d5ff75 (Creates the first version of the footer component)
      </Link>
    </Box>
  );
}

export default Location;
