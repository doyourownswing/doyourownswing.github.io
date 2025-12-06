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
import {
  DYOS_DISCORD_LINK,
  DYOS_EMAIL,
  DYOS_FACEBOOK_LINK,
  DYOS_INSTAGRAM_LINK,
  MAILTO_DYOS_EMAIL,
} from "common/constants";
import messages from "./messages";

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
              {messages.emailHook}
            </Typography>
            <Box sx={contactStyles.emailCtaContainer}>
              <Typography display="inline" sx={contactStyles.emailCtaText}>
                {messages.emailCta}
              </Typography>
              <DyosLink href={MAILTO_DYOS_EMAIL} sx={contactStyles.email}>
                {DYOS_EMAIL}
              </DyosLink>
              <Button
                variant="contained"
                endIcon={<ContentCopy />}
                sx={contactStyles.emailCopyButton}
                onClick={handleCopyEmail}
              >
                {messages.copy}
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
              {messages.discordHook}
            </Typography>
            <SocialsButton
              sx={contactStyles.discordButton}
              href={DYOS_DISCORD_LINK}
            >
              {messages.discordCta}
            </SocialsButton>
          </Box>

          <Box sx={contactStyles.facebookCard}>
            <Box sx={contactStyles.embellishmentContainer}>
              <Facebook sx={contactStyles.embellishment} />
            </Box>
            <Typography variant="h4" sx={contactStyles.hook}>
              {messages.facebookHook}
            </Typography>
            <SocialsButton
              sx={contactStyles.facebookButton}
              href={DYOS_FACEBOOK_LINK}
            >
              {messages.facebookCta}
            </SocialsButton>
          </Box>

          <Box sx={contactStyles.instagramCard}>
            <Box sx={contactStyles.embellishmentContainer}>
              <Instagram sx={contactStyles.embellishment} />
            </Box>
            <Typography variant="h4" sx={contactStyles.hook}>
              {messages.instagramHook}
            </Typography>
            <SocialsButton
              sx={contactStyles.instagramButton}
              href={DYOS_INSTAGRAM_LINK}
            >
              {messages.instagramCta}
            </SocialsButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
