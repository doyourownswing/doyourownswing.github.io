import { Box, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import messages from "./messages.js";
import GridHeader from "./grid_header.jsx";
import GridRow from "./grid_row.js";

function ClassGrid() {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4} columns={{ sm: 4, md: 12 }}>
        {/* Headers */}
        <GridHeader
          items={[
            messages.classHeader,
            messages.descriptionHeader,
            messages.prerequisitesHeader,
          ]}
          variant="h4"
          itemSize={4}
          breakpointStyles={{ xs: "none", md: "block" }}
        ></GridHeader>

        {/* WCS Foundations */}
        <GridRow
          title={messages.foundationsTitle}
          subtitle={messages.foundationsSubtitle}
          itemSize={4}
          items={[messages.foundationsDescription, messages.foundationsPrereq]}
        ></GridRow>

        {/* Connection, Rhythm, and Flow */}
        <GridRow
          title={messages.connectionTitle}
          subtitle={messages.connectionSubtitle}
          itemSize={4}
          items={[messages.connectionDescription, messages.connectionPrereq]}
        ></GridRow>

        {/* You, Me, and the Music */}
        <GridRow
          title={messages.youMeTitle}
          subtitle={messages.youMeSubtitle}
          itemSize={4}
          items={[messages.youMeDescription, messages.youMePrereq]}
        ></GridRow>
      </Grid>
    </Box>
  );
}

export default ClassGrid;
