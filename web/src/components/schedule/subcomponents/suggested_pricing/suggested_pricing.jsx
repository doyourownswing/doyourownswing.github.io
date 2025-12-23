import { Box, Container, Typography } from "@mui/material";
import suggestedPricingStyles from "./suggested_pricing.styles";
import { messages } from "./messages";
import { forwardRef } from "react";
import SuggestedPricingTable from "./suggested_pricing_table";

// Top-level component for the suggested pricing section.
const SuggestedPricing = forwardRef(function SuggestedPricing({}, ref) {
  return (
    <Box sx={suggestedPricingStyles.container} ref={ref}>
      <Container>
        <Box>
          <Typography variant="h6" sx={suggestedPricingStyles.title}>
            {messages.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={suggestedPricingStyles.description}
          >
            {messages.description}
          </Typography>
        </Box>
        <Box>
          <SuggestedPricingTable />
        </Box>
      </Container>
    </Box>
  );
});

export default SuggestedPricing;
