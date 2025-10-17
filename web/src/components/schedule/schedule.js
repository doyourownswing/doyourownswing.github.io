import { Box } from "@mui/material";
import Classes from "./subcomponents/classes/classes";
import Pricing from "./subcomponents/pricing/pricing";
import SuggestedPricing from "./subcomponents/suggested_pricing/suggested_pricing";
import Payment from "./subcomponents/payment/payment";
import Volunteer from "./subcomponents/volunteer/volunteer";
import scheduleStyles from "./schedule.styles";
import { useRef } from "react";
import Privates from "./subcomponents/privates/privates";

function Schedule() {
  const suggestedPricingRef = useRef(null);
  const volunteerRef = useRef(null);

  function scrollIntoView(ref) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const goToSuggestedPricing = () => scrollIntoView(suggestedPricingRef);
  const goToVolunteer = () => scrollIntoView(volunteerRef);

  return (
    <Box>
      <Classes />
      <Pricing
        onClickGoToSuggestedPricingSection={goToSuggestedPricing}
        onClickGoToVolunteerSection={goToVolunteer}
      />
      <SuggestedPricing ref={suggestedPricingRef} />
      <Payment />
      <Box sx={scheduleStyles.divider} />
      <Volunteer ref={volunteerRef} />
      <Privates />
    </Box>
  );
}
export default Schedule;
