import {
  Box,
  Card,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import classesStyles from "./classes.styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import messages from "./messages";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import ClassImage from "assets/images/classes1.jpg";
import Callout from "components/common/callout";
import {
  BulletedList,
  BulletedListItem,
} from "components/common/bulleted_list";

const NUM_LEVELS = 4;

function LevelIndicator(props) {
  let level = props.level;
  let circles = [];

  for (var i = 0; i < NUM_LEVELS; i++) {
    let style =
      i < level
        ? classesStyles.levelIndicatorFilled
        : classesStyles.levelIndicatorEmpty;

    circles.push(<CircleIcon fontSize="x-small" sx={style}></CircleIcon>);
  }

  return <Box>{circles}</Box>;
}

function ClassCard(props) {
  let classDetails = props.class;

  let prerequisites = !!classDetails.prerequisitesList ? (
    <Box>
      <Typography>{classDetails.prerequisitesPrompt}</Typography>
      <BulletedList>
        {classDetails.prerequisitesList.map((p, i) => (
          <BulletedListItem>
            <Typography key={i}>{p}</Typography>
          </BulletedListItem>
        ))}
      </BulletedList>
    </Box>
  ) : (
    <Typography>{classDetails.prerequisites}</Typography>
  );

  return (
    <Grid2 xs={1}>
      <Card sx={classesStyles.card}>
        <Box sx={classesStyles.cardContent}>
          <Stack>
            <Box sx={classesStyles.cardHeader}>
              <Box sx={classesStyles.levelContainer}>
                <Typography sx={classesStyles.level}>
                  {classDetails.level}
                </Typography>
                <LevelIndicator level={classDetails.difficulty} />
              </Box>
              <Typography sx={classesStyles.classTitle} variant="h5">
                {classDetails.title}
              </Typography>
              <Box sx={classesStyles.timeAndPlaceContainer}>
                <Box sx={classesStyles.iconTextContainer}>
                  <PlaceOutlinedIcon fontSize="small" />
                  <Typography variant="subtitle">
                    {classDetails.location}
                  </Typography>
                </Box>
                <Box sx={classesStyles.iconTextContainer}>
                  <AccessTimeOutlinedIcon fontSize="small" />
                  <Typography variant="subtitle">
                    {classDetails.time}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={classesStyles.descriptionContainer}>
              <Typography>{classDetails.description}</Typography>
            </Box>
            <Box sx={classesStyles.prerequisitesContainer}>
              <Typography variant="h6" sx={classesStyles.cardSectionTitle}>
                {messages.prerequisites}
              </Typography>
              {prerequisites}
            </Box>
          </Stack>
        </Box>
      </Card>
    </Grid2>
  );
}

function Classes() {
  return (
    <Box sx={classesStyles.container}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={classesStyles.textAndImageContainer}
        >
          <Box sx={classesStyles.hookTextContainer}>
            <Typography variant="subtitle" sx={classesStyles.subtitle}>
              {messages.subtitle}
            </Typography>
            <Typography variant="h3" sx={classesStyles.title}>
              {messages.title}
            </Typography>
            <Typography variant="body1">{messages.hook}</Typography>
          </Box>
          <Box>
            <Box
              component="img"
              src={ClassImage}
              sx={classesStyles.picture}
              alt={messages.splashImageAltText}
            />
          </Box>
        </Stack>
        <Callout>
          <Typography variant="h6" sx={classesStyles.calloutTitle}>
            {messages.maskingPolicyCallout.title}
          </Typography>
          <Typography>{messages.maskingPolicyCallout.description}</Typography>
          <BulletedList>
            <BulletedListItem>
              <Typography>{messages.maskingPolicyCallout.classes}</Typography>
            </BulletedListItem>
            <BulletedListItem>
              <Typography>{messages.maskingPolicyCallout.social}</Typography>
            </BulletedListItem>
          </BulletedList>
          <Typography>{messages.maskingPolicyCallout.purchase}</Typography>
        </Callout>

        <Divider sx={classesStyles.divider} />
        <Grid2 container columns={{ xs: 1, md: 2 }} spacing={4}>
          <ClassCard class={messages.classes.levelOne} />
          <ClassCard class={messages.classes.levelTwo} />
          <ClassCard class={messages.classes.levelThree} />
          <ClassCard class={messages.classes.levelFour} />
        </Grid2>
      </Container>
    </Box>
  );
}

export default Classes;
