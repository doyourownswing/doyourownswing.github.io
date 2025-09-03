import { Box } from "@mui/material";
import Classes from "./subcomponents/classes/classes";
import Pricing from "./subcomponents/pricing/pricing";
import SuggestedPricing from "./subcomponents/suggested_pricing/suggested_pricing";
import Payment from "./subcomponents/payment/payment";
import Volunteer from "./subcomponents/volunteer/volunteer";
import scheduleStyles from "./schedule.styles";

const Schedule = () => (
  <Box>
    <Classes />
    <Pricing />
    <SuggestedPricing />
    <Payment />
    <Box sx={scheduleStyles.divider} />
    <Volunteer />
  </Box>
);
export default Schedule;
