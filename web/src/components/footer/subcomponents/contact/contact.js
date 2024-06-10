import { Box, Link, Typography } from "@mui/material";
import contactStyles from "./contact.styles";
import DiscordIcon from "common/icons/discord.js/index.js";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SvgIcon } from "@mui/material";

const contactOptions = [
  {
    href: "https://discord.gg/EwXq7EYS7e",
    displayText: "Discord",
    icon: DiscordIcon,
  },
  {
    href: "mailto:doyourownswing@gmail.com",
    displayText: "Email us",
    icon: EmailIcon,
  },
  {
    href: "https://www.facebook.com/doyourownswing",
    displayText: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/doyourownswing",
    displayText: "Instagram",
    icon: InstagramIcon,
  },
];

function Contact() {
  return (
    <Box style={contactStyles.contactContainer}>
      <Typography variant="h6">Contact</Typography>
      {contactOptions.map((info) => (
        <Link
          href={info.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={contactStyles.row}
          underline="none"
        >
          <SvgIcon
            component={info.icon}
            inheritViewBox
            sx={contactStyles.icon}
          />
          <Typography variant="body2" sx={contactStyles.link}>
            {info.displayText}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}

export default Contact;
