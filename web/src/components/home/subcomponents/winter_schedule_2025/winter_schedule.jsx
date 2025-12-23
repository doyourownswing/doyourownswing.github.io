import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { forwardRef } from "react";
import winterScheduleStyles from "./winter_schedule.styles";
import Grid from "@mui/material/Grid";
import data from "./schedule_data";
import { formatDate } from "@/utils/date_utils";
import stars from "@/assets/images/hanging_stars.png";
import snowflake from "@/assets/images/snowflake.png";
import messages from "./messages";
import "./winter_schedule.css";

const DATE_FORMAT = "MMM D";

function Event(props) {
  let details = props.details;

  let baseStyle = details.hasDyos
    ? winterScheduleStyles.dyosDay
    : winterScheduleStyles.noDyos;

  let link = details.eventLink ?? "#/classes";

  return (
    <Grid size={1}>
      <Stack sx={baseStyle.eventCard} direction={"row"}>
        <Box>
          <Typography sx={baseStyle.thursday}>{messages.thursday}</Typography>
          <Typography sx={baseStyle.date} variant="h5">
            {formatDate(props.details.date, DATE_FORMAT)}
          </Typography>
        </Box>
        <Box>
          {details.hasDyos && (
            <Button
              variant="text"
              sx={baseStyle.button}
              href={link}
              target="_blank"
            >
              {messages.seeDetails}
            </Button>
          )}
          {!details.hasDyos && (
            <Typography sx={baseStyle.noDyosText}>{messages.noDyos}</Typography>
          )}
        </Box>
      </Stack>
    </Grid>
  );
}

const WinterSchedule = forwardRef(function WinterSchedule(_, ref) {
  return (
    <Box ref={ref} sx={winterScheduleStyles.container}>
      <Box component="img" src={stars} sx={winterScheduleStyles.stars}></Box>
      {winterScheduleStyles.snowflakes.map((snowflakeStyle) => (
        <Box component="img" src={snowflake} sx={snowflakeStyle}></Box>
      ))}
      <Container sx={winterScheduleStyles.contentContainer}>
        <Typography variant="h3" sx={winterScheduleStyles.title}>
          {messages.title}
        </Typography>
        <Grid
          container
          columns={{ xs: 1, sm: 2, md: 3 }}
          rowSpacing={{ xs: 2, sm: 4 }}
          columnSpacing={2}
          sx={winterScheduleStyles.eventsContainer}
        >
          {data.map((details) => (
            <Event details={details} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

export default WinterSchedule;
