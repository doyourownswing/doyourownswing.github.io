import {
  Box,
  Button,
  Container,
  Snackbar,
  SvgIcon,
  Typography,
} from "@mui/material";
import contactStyles from "./contact.styles";
import DyosLink from "components/common/link";
import { ContentCopy, Facebook, Instagram } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import DiscordIcon from "components/common/icons/discord";
import { useState } from "react";

function SocialsButton(props) {
  return (
    <Button
      variant="contained"
      sx={props.sx}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </Button>
  );
}

function Contact() {
  const [copiedSnackbarMessage, setCopiedSnackbarMessage] = useState("");
  const [copiedSnackbarOpen, setCopiedSnackbarOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      setCopiedSnackbarOpen(false);

      await navigator.clipboard.writeText("doyourownswing@gmail.com");
      setCopiedSnackbarMessage("Copied!");
    } catch (err) {
      setCopiedSnackbarMessage("Error copying email");
    }

    setCopiedSnackbarOpen(true);
  };

  const handleCopiedSnackbarClose = () => {
    setCopiedSnackbarOpen(false);
  };

  return (
    <Box sx={contactStyles.container}>
      <Container>
        <Box sx={contactStyles.contentContainer}>
          <Box sx={contactStyles.emailCard}>
            <EmailIcon sx={contactStyles.embellishment} />
            <Typography variant="h4" sx={contactStyles.hook}>
              Want to get in touch?
            </Typography>
            <Box sx={contactStyles.emailCtaContainer}>
              <Typography display="inline" sx={contactStyles.emailCtaText}>
                Send us an email at
              </Typography>
              <DyosLink
                href="mailto:doyourownswing@gmail.com"
                sx={contactStyles.email}
              >
                doyourownswing@gmail.com
              </DyosLink>
              <Button
                variant="contained"
                endIcon={<ContentCopy />}
                sx={contactStyles.emailCopyButton}
                onClick={handleCopyEmail}
              >
                Copy
              </Button>
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={copiedSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleCopiedSnackbarClose}
                message={copiedSnackbarMessage}
              />
            </Box>
          </Box>

          <Box sx={contactStyles.discordCard}>
            <Box sx={contactStyles.embellishmentContainer}>
              <SvgIcon sx={contactStyles.embellishment}>
                <DiscordIcon />
              </SvgIcon>
            </Box>
            <Typography variant="h4" sx={contactStyles.hook}>
              Want to get the latest updates?
            </Typography>
            <SocialsButton
              sx={contactStyles.discordButton}
              href="https://discord.gg/EwXq7EYS7e"
            >
              Join the DYOS Discord
            </SocialsButton>
          </Box>

          <Box sx={contactStyles.facebookCard}>
            <Box sx={contactStyles.embellishmentContainer}>
              <Facebook sx={contactStyles.embellishment} />
            </Box>
            <Typography variant="h4" sx={contactStyles.hook}>
              Want to know about special events?
            </Typography>
            <SocialsButton
              sx={contactStyles.facebookButton}
              href="https://www.facebook.com/doyourownswing"
            >
              Follow us on Facebook
            </SocialsButton>
          </Box>

          <Box sx={contactStyles.instagramCard}>
            <Box sx={contactStyles.embellishmentContainer}>
              <Instagram sx={contactStyles.embellishment} />
            </Box>
            <Typography variant="h4" sx={contactStyles.hook}>
              Want to see what we're up to?
            </Typography>
            <SocialsButton
              sx={contactStyles.instagramButton}
              href="https://www.instagram.com/doyourownswing"
            >
              Follow us on Instagram
            </SocialsButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
