import { Box, Container, Typography } from "@mui/material";
import whoWeAreStyles from "./who_we_are.styles";
import messages from "./messages";
import {
  AllInclusive,
  AutoFixHigh,
  ColorLens,
  Diversity2,
  Favorite,
  Handshake,
  LocalFlorist,
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

// Icons are from:
// https://mui.com/material-ui/material-icons/
// Commented out values are potential alternatives
const valueIcons = [
  {
    text: "Creativity",
    icon: ColorLens, // Architecture, Build, ColorLens, DesignServices, Draw, Palette
  },
  {
    text: "Connection",
    icon: Handshake, // ConnectWithoutContact, Group*, SignLanguage, Webhook
  },
  {
    text: "Diversity",
    icon: Diversity2, // Diversity1, Diversity3, Interests
  },
  {
    text: "Inclusivity",
    icon: AllInclusive, // Groups2, Groups3, People, WebHook
  },
  {
    text: "Kindness",
    icon: Favorite, // Recommend, SentimentSatisfied, TagFaces, VolunteerActivism
  },
  {
    text: "Growth",
    icon: LocalFlorist, // FilterVintage, Grass, Spa
  },
  {
    text: "Play",
    icon: AutoFixHigh, // Celebration, Draw, GolfCourse, Interests, MusicNote, Piano, Sports*, SportsGymnastics
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
 * xs: 3 rows of 2 values and 1 row of 1.
 * sm: a row of 4 on top and a row of 3 on the bottom.
 * md+: all 7 in one line.
 */
function ValuesRenderer() {
  return (
    <Grid2
      container
      columns={{ xs: 2, sm: 12, md: 7 }}
      spacing={5}
      sx={whoWeAreStyles.valuesContainer}
    >
      {valueIcons.map((v, index) => (
        <Grid2
          // The last value will have a size of 2 so it will span both columns.
          xs={index === 6 ? 2 : 1}
          // The first 4 values will have size 3, and the last 3 will have size 4
          // to get 4 on top and 3 on bottom and evenly spaced.
          sm={index < 4 ? 3 : 4}
          // Fit all on one line.
          md={1}
          sx={whoWeAreStyles.valueRendererContainer}
        >
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
        <Typography variant="h4" sx={whoWeAreStyles.title}>
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
