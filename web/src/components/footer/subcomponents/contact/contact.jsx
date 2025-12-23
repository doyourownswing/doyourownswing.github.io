import { Box, Link, Typography } from "@mui/material";
import contactStyles from "./contact.styles";
import DiscordIcon from "@/components/common/icons/discord";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SvgIcon } from "@mui/material";
import {
  DYOS_DISCORD_LINK,
  DYOS_FACEBOOK_LINK,
  DYOS_INSTAGRAM_LINK,
  MAILTO_DYOS_EMAIL,
} from "@/common/constants";

const contactOptions = [
  {
    href: DYOS_DISCORD_LINK,
    displayText: "Discord",
    icon: DiscordIcon,
  },
  {
    href: MAILTO_DYOS_EMAIL,
    displayText: "Email us",
    icon: EmailIcon,
  },
  {
    href: DYOS_FACEBOOK_LINK,
    displayText: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: DYOS_INSTAGRAM_LINK,
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
          key={info.href}
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
