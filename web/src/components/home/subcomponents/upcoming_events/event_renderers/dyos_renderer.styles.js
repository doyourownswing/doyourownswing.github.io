import { tableCellClasses } from "@mui/material";
import theme from "common/theme";

const dyosRendererStyles = {
  table: {
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none",
    },
  },
  card: { width: { xs: "100%", sm: "450px" } },
  cardContent: { padding: "24px 32px" },
  eventTitle: { lineHeight: 1.5 },
  eventSubtitle: { color: theme.palette.text.subtitle, lineHeight: 1.5 },
  scheduleContainer: {
    padding: { xs: "8px 0px 8px 4px", sm: "8px 0px 8px 16px" },
  },
  additionalDetails: {
    color: theme.palette.text.secondaryBody,
    paddingTop: "8px",
  },
  actionsContainer: { display: "flex", justifyContent: "flex-end" },
  actionButton: { textTransform: "none", color: theme.palette.text.textButton },
};

export default dyosRendererStyles;
