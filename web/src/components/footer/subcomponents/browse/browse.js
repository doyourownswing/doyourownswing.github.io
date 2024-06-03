import { Box, Link, Typography } from "@mui/material";
import browseStyles from "./browse.styles";
import FeatureFlags from "infra/feature_flags"

const pages = [
  { name: "Home", to: "#/" },
  FeatureFlags.showAboutTab && { name: "About us", to: "#/about" },
  FeatureFlags.showScheduleTab && { name: "Schedule", to: "#/schedule" },
];

function Browse() {
  return (
    <Box sx={browseStyles.container}>
      <Typography variant="h6">Browse</Typography>
      {pages.map((page) => (
        <Box sx={browseStyles.linkContainer}>
          <Link
            href={page.to}
            rel="noopener noreferrer"
            underline="none"
            sx={browseStyles.link}
          >
            <Typography variant="body2">{page.name}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Browse;
