import { Box, Link, Typography } from "@mui/material";
import contactStyles from "./contact.styles";

<<<<<<< HEAD
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

=======
>>>>>>> 9d5ff75 (Creates the first version of the footer component)
function Contact() {
  return (
    <Box style={contactStyles.contactContainer}>
      <Typography variant="h6">Contact</Typography>
<<<<<<< HEAD
      {contactOptions.map((info) => (
        <Link href={info.href} target="_blank" rel="noopener noreferrer">
          <Typography variant="body2" sx={contactStyles.link}>
            {info.displayText}
          </Typography>
        </Link>
      ))}
=======
      <Link href="mailto:doyourownswing@gmail.com" target="_blank">
        <Typography variant="body2" sx={contactStyles.link}>
          doyourownswing@gmail.com
        </Typography>
      </Link>
      <Link href="https://discord.gg/EwXq7EYS7e" target="_blank">
        <Typography variant="body2" sx={contactStyles.link}>
          DYOS Discord
        </Typography>
      </Link>
      <Link href="https://www.facebook.com/doyourownswing" target="_blank">
        <Typography variant="body2" sx={contactStyles.link}>
          facebook.com/doyourownswing
        </Typography>
      </Link>
      <Link href="https://www.instagram.com/doyourownswing/" target="_blank">
        <Typography variant="body2" sx={contactStyles.link}>
          instagram.com/doyourownswing
        </Typography>
      </Link>
>>>>>>> 9d5ff75 (Creates the first version of the footer component)
    </Box>
  );
}

export default Contact;
