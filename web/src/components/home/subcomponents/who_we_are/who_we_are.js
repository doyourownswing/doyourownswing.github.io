import { Box, Container, Typography } from "@mui/material";
import whoWeAreStyles from "./who_we_are.styles";
import messages from "./messages";
import {
  AllInclusive,
  Diversity2,
  Favorite,
  Handshake,
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

// Icons are from:
// https://mui.com/material-ui/material-icons/
// Commented out values are potential alternatives (see history for previous values)
const valueIcons = [
  {
    text: "Community",
    icon: Diversity2, // Diversity1, Diversity3, Interests
  },
  {
    text: "Inclusivity",
    icon: AllInclusive, // Groups2, Groups3, People, WebHook
  },
  {
    text: "Consent",
    icon: Handshake, // ConnectWithoutContact, Group*, SignLanguage, Webhook
  },
  {
    text: "Mutual care",
    icon: Favorite, // Recommend, SentimentSatisfied, TagFaces, VolunteerActivism
  },
];

/** Renders a specific value and its icon. */
function ValueRenderer(props) {
  let value = props.value;

  return (
    <Box sx={whoWeAreStyles.valueRenderer}>
      <value.icon fontSize="large" sx={whoWeAreStyles.valueIcon}></value.icon>
      <Typography variant="body1">{value.text}</Typography>
    </Box>
  );
}

/**
 * Renders the values in a flex grid.
 *
 * xs: 2 rows of 2 values
 * sm+: 1 row of 4 values
 */
function ValuesRenderer() {
  return (
    <Grid2
      container
      columns={{ xs: 2, sm: 4 }}
      spacing={6}
      sx={whoWeAreStyles.valuesContainer}
    >
      {valueIcons.map((v) => (
        <Grid2 xs={1} sx={whoWeAreStyles.valueRendererContainer}>
          <ValueRenderer value={v}></ValueRenderer>
        </Grid2>
      ))}
    </Grid2>
  );
}

function WhoWeAre() {
  return (
    <Box sx={whoWeAreStyles.whoWeAreContainer}>
      <Container>
        <Typography variant="h3" sx={whoWeAreStyles.title}>
          {messages.title}
        </Typography>
        <Typography variant="body" sx={whoWeAreStyles.subtitle}>
          {messages.description}
        </Typography>
        <Box sx={whoWeAreStyles.valuesSection}>
          <Typography variant="h6">{messages.ourCommunityValues}</Typography>
          <ValuesRenderer></ValuesRenderer>
        </Box>
      </Container>
    </Box>
  );
}

export default WhoWeAre;
