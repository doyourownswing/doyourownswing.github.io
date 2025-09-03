import { Box } from "@mui/material";
import Classes from "./subcomponents/classes/classes";
import Pricing from "./subcomponents/pricing/pricing";
import SuggestedPricing from "./subcomponents/suggested_pricing/suggested_pricing";
import Payment from "./subcomponents/payment/payment";

const Schedule = () => (
  <Box>
    <Classes />
    <Pricing />
    <SuggestedPricing />
    <Payment />
  </Box>
);
export default Schedule;
