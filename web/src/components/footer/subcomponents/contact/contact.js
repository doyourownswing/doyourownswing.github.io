import { Box, Link, Typography } from "@mui/material";
import contactStyles from "./contact.styles";

function Contact() {
  return (
    <Box style={contactStyles.contactContainer}>
      <Typography variant="h6">Contact</Typography>
      <Link
        href="mailto:doyourownswing@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant="body2" sx={contactStyles.link}>
          doyourownswing@gmail.com
        </Typography>
      </Link>
      <Link
        href="https://discord.gg/EwXq7EYS7e"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant="body2" sx={contactStyles.link}>
          DYOS Discord
        </Typography>
      </Link>
      <Link
        href="https://www.facebook.com/doyourownswing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant="body2" sx={contactStyles.link}>
          facebook.com/doyourownswing
        </Typography>
      </Link>
      <Link
        href="https://www.instagram.com/doyourownswing/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant="body2" sx={contactStyles.link}>
          instagram.com/doyourownswing
        </Typography>
      </Link>
    </Box>
  );
}

export default Contact;
