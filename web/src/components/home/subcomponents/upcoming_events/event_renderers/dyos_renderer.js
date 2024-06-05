import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { dateToHumanReadableString } from "utils/date_utils";
import dyosRendererStyles from "./dyos_renderer.styles";
import messages from "../messages";

function ScheduleRenderer(props) {
  let schedule = props.schedule;

  return (
    <TableContainer>
      <Table size="small" sx={dyosRendererStyles.table}>
        <TableBody>
          {schedule.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function DyosRenderer(props) {
  let event = props.event;

  return (
    <Card sx={dyosRendererStyles.card}>
      <CardContent sx={dyosRendererStyles.cardContent}>
        <Typography variant="h6" sx={dyosRendererStyles.eventTitle}>
          {event.title}
        </Typography>
        <Typography variant="subtitle1" sx={dyosRendererStyles.eventSubtitle}>
          {dateToHumanReadableString(event.date)}
        </Typography>
        <Typography variant="subtitle1" sx={dyosRendererStyles.eventSubtitle}>
          {messages.atStudioM}
        </Typography>
        <Box sx={dyosRendererStyles.scheduleContainer}>
          <ScheduleRenderer schedule={event.eventSchedule} />
        </Box>
        <Box sx={dyosRendererStyles.additionalDetails}>
          <Typography variant="body2">{messages.dyosEntryFee}</Typography>
          <Typography variant="body2">
            {messages.dyosMaskingRequirement}
          </Typography>
        </Box>
        {event.externalLinks && event.externalLinks.facebookLink && (
          <CardActions sx={dyosRendererStyles.actionsContainer}>
            <Button
              sx={dyosRendererStyles.actionButton}
              target="_blank"
              href={event.externalLinks.facebookLink}
            >
              {messages.viewOnFacebook}
            </Button>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
}

export default DyosRenderer;
