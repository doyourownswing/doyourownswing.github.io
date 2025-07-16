import { Box } from "@mui/material";
import Classes from "./subcomponents/classes/classes";
import Pricing from "./subcomponents/pricing/pricing";
import SuggestedPricing from "./subcomponents/suggested_pricing/suggested_pricing";

const Schedule = () => (
  <Box>
    <Classes />
    <Pricing />
    <SuggestedPricing />
  </Box>
);
export default Schedule;
