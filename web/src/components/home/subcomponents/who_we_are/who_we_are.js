import { Box, Container, Typography } from "@mui/material";
import whoWeAreStyles from "./who_we_are.styles";
import messages from "./messages";
import { Abc, AcUnit, AccessAlarm } from "@mui/icons-material";

function ValuesRenderer(props) {
  let value = props.value;
  return (
    <Box sx={whoWeAreStyles.valueContainer}>
      {value === "Inclusion" && <Abc></Abc>}
      {value === "Community" && <AcUnit></AcUnit>}
      {value === "Growth" && <AccessAlarm></AccessAlarm>}
      <Typography>{value}</Typography>
    </Box>
  );
}

function WhoWeAre() {
  return (
    <div style={whoWeAreStyles.whoWeAreContainer}>
      <Container sx={whoWeAreStyles.whoWeAreContentContainer}>
        <Typography variant="h4" sx={whoWeAreStyles.title}>
          {messages.title}
        </Typography>
        <Typography variant="body" sx={whoWeAreStyles.subtitle}>
          {messages.description}
        </Typography>
        <Box sx={whoWeAreStyles.header}>
          <Typography variant="h6">{messages.ourCommunityValues}</Typography>
        </Box>
        <Box sx={whoWeAreStyles.valuesContainer}>
          <ValuesRenderer value={"Inclusion"}></ValuesRenderer>
          <ValuesRenderer value={"Community"}></ValuesRenderer>
          <ValuesRenderer value={"Growth"}></ValuesRenderer>
          <ValuesRenderer value={"Inclusion"}></ValuesRenderer>
          <ValuesRenderer value={"Community"}></ValuesRenderer>
          <ValuesRenderer value={"Growth"}></ValuesRenderer>
        </Box>
      </Container>
    </div>
  );
}

export default WhoWeAre;
