import { Box, Link, Typography } from "@mui/material";
import contactStyles from "./contact.styles";

const contactOptions = [
  { href: "https://discord.gg/EwXq7EYS7e", displayText: "DYOS Discord" },
  {
    href: "mailto:doyourownswing@gmail.com",
    displayText: "doyourownswing@gmail.com",
  },
  {
    href: "https://www.facebook.com/doyourownswing",
    displayText: "facebook.com/doyourownswing",
  },
  {
    href: "https://www.instagram.com/doyourownswing",
    displayText: "instagram.com/doyourownswing",
  },
];

function Contact() {
  return (
    <Box style={contactStyles.contactContainer}>
      <Typography variant="h6">Contact</Typography>
      {contactOptions.map((info) => (
        <Link href={info.href} target="_blank" rel="noopener noreferrer">
          <Typography variant="body2" sx={contactStyles.link}>
            {info.displayText}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}

export default Contact;
