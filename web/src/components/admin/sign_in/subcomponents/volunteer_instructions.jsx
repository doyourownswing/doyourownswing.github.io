import { Box, Typography } from "@mui/material";
import DyosLink from "@/components/common/link";
import signInStyles from "./sign_in.styles";
import { REGISTRATION_FORM_LINK } from "@/common/constants";
import messages from "@/components/admin/sign_in/messages";

export function VolunteerInstructions() {
  return (
    <Box sx={signInStyles.section}>
      <Typography variant="h5" sx={signInStyles.sectionHeader}>
        {messages.registrationHeader}
      </Typography>
      <Typography display="inline">{messages.fillOutThisForm}</Typography>
      <DyosLink href={REGISTRATION_FORM_LINK} openInNewTab fontWeight="bold">
        {messages.registrationForm}
      </DyosLink>
      <Typography display="inline">{messages.refreshAfterForm}</Typography>
    </Box>
  );
}
