import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import messages from "./messages.js";

function ClassGrid() {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4} columns={{ sm: 4, md: 12 }}>
        {/* Headers */}
        <Grid item xs={3} display={{ xs: "none", md: "block" }}>
          <Typography variant="h4">{messages.classHeader}</Typography>
        </Grid>
        <Grid item xs={4} display={{ xs: "none", md: "block" }}>
          <Typography variant="h4">{messages.descriptionHeader}</Typography>
        </Grid>
        <Grid item xs={4} display={{ xs: "none", md: "block" }}>
          <Typography variant="h4">{messages.prerequisitesHeader}</Typography>
        </Grid>

        {/* WCS Foundations */}
        <Grid item xs={3}>
          <Typography variant="h6" display={{ xs: "none", md: "block" }}>
            {messages.foundationsTitle}
          </Typography>
          <Typography variant="h4" display={{ xs: "block", md: "none" }}>
            {messages.foundationsTitle}
          </Typography>
          <Box color={theme.palette.text.subtitle}>
            {messages.foundationsSubtitle}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>{messages.foundationsDescription}</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>{messages.foundationsPrereq}</Box>
        </Grid>

        {/* Connection, Rhythm, and Flow */}
        <Grid item xs={3}>
          <Typography variant="h6" display={{ xs: "none", md: "block" }}>
            {messages.connectionTitle}
          </Typography>
          <Typography variant="h4" display={{ xs: "block", md: "none" }}>
            {messages.connectionTitle}
          </Typography>
          <Box color={theme.palette.text.subtitle}>
            {messages.connectionSubtitle}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>{messages.connectionDescription}</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>{messages.connectionPrereq}</Box>
        </Grid>

        {/* You, Me, and the Music */}
        <Grid item xs={3}>
          <Typography variant="h6" display={{ xs: "none", md: "block" }}>
            {messages.youMeTitle}
          </Typography>
          <Typography variant="h4" display={{ xs: "block", md: "none" }}>
            {messages.youMeTitle}
          </Typography>
          <Box color={theme.palette.text.subtitle}>
            {messages.youMeSubtitle}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>{messages.youMeDescription}</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>{messages.youMePrereq}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ClassGrid;
