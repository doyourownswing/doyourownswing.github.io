import { Box, Typography } from "@mui/material";
import signInStyles from "../sign_in.styles";
import messages from "@/components/admin/sign_in/messages";

export function VolunteerInstructions() {
  return (
    <Box sx={signInStyles.section}>
      <Typography variant="h5" sx={signInStyles.sectionHeader}>
        {messages.volunteerInstructionsHeader}
      </Typography>
      <Box sx={signInStyles.volunteerInstructionsContainer}>
        <ul>
          {messages.volunteerInstructions.map((text) => (
            <li key={text}>
              <Typography>{text}</Typography>
            </li>
          ))}
        </ul>
        <Typography>{messages.volunteerInstructionsThankYou}</Typography>
      </Box>
    </Box>
  );
}
