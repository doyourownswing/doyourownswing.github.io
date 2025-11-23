import { Box, Container, Tab, Typography } from "@mui/material";
import ipadStyles from "./ipad.styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";

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
          <TabPanel value={TABS.CLASSES}>Classes</TabPanel>
          <TabPanel value={TABS.PRICING}>Pricing</TabPanel>
          <TabPanel value={TABS.PAYMENT}>Payment</TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}

export default Ipad;
