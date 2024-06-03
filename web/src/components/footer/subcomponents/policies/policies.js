import { Box, Link, Typography } from "@mui/material";
import policiesStyles from "./policies.styles";
import FeatureFlags from "infra/feature_flags";

const pages = [
  FeatureFlags.showHealthTab && { name: "Health Protocol", to: "#/health" },
  FeatureFlags.showCodeOfConductTab && { name: "Code of Conduct", to: "#/code" },
];

function Policies() {
  return (
    <Box sx={policiesStyles.container}>
      <Typography variant="h6">Policies</Typography>
      {pages.map((page) => (
        <Box sx={policiesStyles.linkContainer}>
          <Link
            href={page.to}
            rel="noopener noreferrer"
            underline="none"
            sx={policiesStyles.link}
          >
            <Typography variant="body2">{page.name}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Policies;
