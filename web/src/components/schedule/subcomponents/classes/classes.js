import { Box, Card, Container, Stack, Typography } from "@mui/material";
import classesStyles from "./classes.styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import messages from "./messages";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CircleIcon from "@mui/icons-material/Circle";

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
                  <PlaceOutlinedIcon />
                  <Typography>{classDetails.location}</Typography>
                </Box>
                <Box sx={classesStyles.iconTextContainer}>
                  <AccessTimeOutlinedIcon />
                  <Typography>{classDetails.time}</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={classesStyles.descriptionContainer}>
              <Typography>{classDetails.description}</Typography>
            </Box>
            <Box sx={classesStyles.prerequisitesContainer}>
              <Typography sx={classesStyles.cardSectionTitle}>
                Prerequisites
              </Typography>
              <Typography>{classDetails.prerequisites}</Typography>
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
        <Typography variant="h3" sx={classesStyles.title}>
          {messages.title}
        </Typography>
        <Grid2 container columns={{ xs: 1, md: 2 }} spacing={{ xs: 2, md: 4 }}>
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
