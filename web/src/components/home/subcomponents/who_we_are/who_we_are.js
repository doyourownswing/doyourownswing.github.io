import { Box, Container, Typography } from "@mui/material";
import whoWeAreStyles from "./who_we_are.styles";
import messages from "./messages";
import {
  Abc,
  AllInclusive,
  Architecture,
  AutoFixHigh,
  ColorLens,
  Diversity2,
  Favorite,
  Handshake,
  LocalFlorist,
} from "@mui/icons-material";

// Icons are from:
// https://mui.com/material-ui/material-icons/
const valueIcons = [
  {
    text: "Creativity",
    icon: ColorLens, //Architecture, Build, ColorLens, DesignServices, Draw, Palette
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
    icon: AutoFixHigh, // Celebration, Draw, GolfCourse, Interests, MusicNote, Piano, Sports*
  },
];

function ValuesRenderer(props) {
  let value = props.value;

  return (
    <Box sx={whoWeAreStyles.valueContainer}>
      <value.icon></value.icon>
      <Typography>{value.text}</Typography>
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
          {valueIcons.map((v) => (
            <ValuesRenderer value={v}></ValuesRenderer>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default WhoWeAre;
