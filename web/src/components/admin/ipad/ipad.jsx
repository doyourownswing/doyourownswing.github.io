import { Box, Container, Tab, Typography } from "@mui/material";
import ipadStyles from "./ipad.styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import ClassDetails from "@/components/schedule/subcomponents/classes/classes_details";
import SuggestedPricingTable from "@/components/schedule/subcomponents/suggested_pricing/suggested_pricing_table";
import PaymentOptionDetails from "@/components/schedule/subcomponents/payment/payment_option_details";
import {
  REGISTRATION_FORM_LINK,
  REGISTRATION_FORM_LINK_EMBEDDABLE,
} from "@/common/constants";
import QRCode from "react-qr-code";

const TABS = {
  REGISTRATION_FORM: "Registration Form",
  CLASSES: "Classes",
  PRICING: "Pricing",
  PAYMENT: "Payment",
};

function EmbeddedRegistrationForm() {
  return (
    <Box>
      <Box sx={ipadStyles.formQrContainer}>
        <Box sx={ipadStyles.formQrCard}>
          <QRCode value={REGISTRATION_FORM_LINK} />
          <Typography variant="h6" sx={ipadStyles.formQrText}>
            Scan for registration form
          </Typography>
        </Box>
      </Box>
      <Box sx={ipadStyles.formContainer}>
        <iframe
          src={REGISTRATION_FORM_LINK_EMBEDDABLE}
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Box>
    </Box>
  );
}

function Ipad() {
  const [selectedTab, setSelectedTab] = useState(TABS.REGISTRATION_FORM);

  const onTabChange = (_, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={ipadStyles.container}>
      <Container>
        <TabContext value={selectedTab}>
          <TabList
            onChange={onTabChange}
            variant="fullWidth"
            sx={ipadStyles.tabList}
          >
            {Object.keys(TABS).map((tab) => (
              <Tab label={TABS[tab]} value={TABS[tab]} sx={ipadStyles.tab} />
            ))}
          </TabList>
          <TabPanel value={TABS.REGISTRATION_FORM} sx={ipadStyles.tabPanel}>
            <EmbeddedRegistrationForm />
          </TabPanel>
          <TabPanel value={TABS.CLASSES} sx={ipadStyles.tabPanel}>
            <ClassDetails />
          </TabPanel>
          <TabPanel value={TABS.PRICING} sx={ipadStyles.tabPanel}>
            <SuggestedPricingTable />
          </TabPanel>
          <TabPanel value={TABS.PAYMENT} sx={ipadStyles.tabPanel}>
            <PaymentOptionDetails />
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}

export default Ipad;
