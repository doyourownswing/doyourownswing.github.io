import { Box, Link, Typography } from "@mui/material";
import policiesStyles from "./policies.styles";
import { PolicyOptions } from "components/nav_bar/nav_options";

function Policies() {
  return (
    <Box sx={policiesStyles.container}>
      <Typography variant="h6">Policies</Typography>
      {PolicyOptions.map((page) => (
        <Box sx={policiesStyles.linkContainer}>
          <Link
            href={page.url}
            rel="noopener noreferrer"
            underline="none"
            sx={policiesStyles.link}
          >
            <Typography variant="body2">{page.displayName}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Policies;
