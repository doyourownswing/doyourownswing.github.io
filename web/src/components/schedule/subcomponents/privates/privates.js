import { Box, Button, Container, Typography } from "@mui/material";
import privateStyles from "./privates.styles";

function Privates() {
  return (
    <Box sx={privateStyles.container}>
      <Container>
        <Typography variant="h3" align="center" sx={privateStyles.title}>
          Private Lessons
        </Typography>
        <Typography variant="subtitle" align="center" sx={privateStyles.title}>
          Get direct one-on-one instruction from Riley
        </Typography>
        <Button>Sign Up Now</Button>
        <Box>Benefits!</Box>
      </Container>
    </Box>
  );
}

export default Privates;
