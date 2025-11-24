import { Box, Container, Tab, Typography } from "@mui/material";
import ipadStyles from "./ipad.styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import ClassDetails from "components/schedule/subcomponents/classes/classes_details";
import SuggestedPricingTable from "components/schedule/subcomponents/suggested_pricing/suggested_pricing_table";
import PaymentOptionDetails from "components/schedule/subcomponents/payment/payment_option_details";

const TABS = {
  REGISTRATION_FORM: "Registration Form",
  CLASSES: "Classes",
  PRICING: "Pricing",
  PAYMENT: "Payment",
};

function Ipad() {
  const [selectedTab, setSelectedTab] = useState(TABS.REGISTRATION_FORM);

  const onTabChange = (_, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={ipadStyles.container}>
      <Container>
        <TabContext value={selectedTab}>
          <TabList onChange={onTabChange}>
            {Object.keys(TABS).map((tab) => (
              <Tab label={TABS[tab]} value={TABS[tab]} />
            ))}
          </TabList>
          <TabPanel value={TABS.REGISTRATION_FORM}>Registration form</TabPanel>
          <TabPanel value={TABS.CLASSES}>
            <ClassDetails />
          </TabPanel>
          <TabPanel value={TABS.PRICING}>
            <SuggestedPricingTable />
          </TabPanel>
          <TabPanel value={TABS.PAYMENT}>
            <PaymentOptionDetails />
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}

export default Ipad;
