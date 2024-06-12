import { Box, Link, Typography } from "@mui/material";
import browseStyles from "./browse.styles";
import { BrowseOptions } from "common/nav_options";

function Browse() {
  return (
    <Box sx={browseStyles.container}>
      <Typography variant="h6">Browse</Typography>
      {BrowseOptions.map((page) => (
        <Box sx={browseStyles.linkContainer}>
          <Link
            href={page.url}
            rel="noopener noreferrer"
            underline="none"
            sx={browseStyles.link}
          >
            <Typography variant="body2">{page.displayName}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Browse;
