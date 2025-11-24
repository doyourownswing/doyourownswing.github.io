import { Box, Stack, Typography } from "@mui/material";
import classesStyles from "./classes.styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import messages from "./messages";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import {
  BulletedList,
  BulletedListItem,
} from "components/common/bulleted_list";
import DyosCard from "components/common/card";

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

  let embellishment = (
    <Typography sx={classesStyles.embellishment}>
      {classDetails.difficulty}
    </Typography>
  );

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
      <DyosCard sx={classesStyles.card}>
        {embellishment}
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
                <Typography variant="subtitle">{classDetails.time}</Typography>
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
      </DyosCard>
    </Grid2>
  );
}

function ClassDetails() {
  return (
    <Grid2 container columns={{ xs: 1, md: 2 }} spacing={4}>
      <ClassCard class={messages.classes.levelOne} />
      <ClassCard class={messages.classes.levelTwo} />
      <ClassCard class={messages.classes.levelThree} />
      <ClassCard class={messages.classes.levelFour} />
    </Grid2>
  );
}

export default ClassDetails;
