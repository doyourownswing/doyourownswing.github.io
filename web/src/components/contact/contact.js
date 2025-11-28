import { Box, Button, Container, Typography } from "@mui/material";
import contactStyles from "./contact.styles";
import DyosLink from "components/common/link";
import { ContentCopy } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <Box sx={contactStyles.container}>
      <Container>
        <Box sx={contactStyles.contentContainer}>
          <Box sx={contactStyles.emailCard}>
            <EmailIcon sx={contactStyles.embellishment} />
            <Typography sx={contactStyles.hook}>
              Want to get in touch?
            </Typography>
            <Typography>Send us an email</Typography>
            <DyosLink>doyourownswing@gmail.com</DyosLink>
            <Button variant="contained" endIcon={<ContentCopy />}>
              Copy
            </Button>
          </Box>

          <Box sx={contactStyles.discordCard}>
            <EmailIcon sx={contactStyles.embellishment} />
            <Typography sx={contactStyles.hook}>
              Want to get the latest updates?
            </Typography>
            <Button variant="contained" endIcon={<ContentCopy />}>
              Join the DYOS Discord
            </Button>
          </Box>

          <Box sx={contactStyles.facebookCard}>
            <EmailIcon sx={contactStyles.embellishment} />
            <Typography sx={contactStyles.hook}>
              Want to know about special events?
            </Typography>
            <Button variant="contained" endIcon={<ContentCopy />}>
              Follow us on Facebook
            </Button>
          </Box>

          <Box sx={contactStyles.instagramCard}>
            <EmailIcon sx={contactStyles.embellishment} />
            <Typography sx={contactStyles.hook}>
              Want to see what we're up to?
            </Typography>
            <Button variant="contained" endIcon={<ContentCopy />}>
              Follow us on Instagram
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
