import { BOX_SHADOW } from "@/common/constants";
import theme from "@/common/theme";

const baseHeaderText = {
  fontWeight: "600",
  fontFamily: "Poppins",
  color: "black",
};

const signInStyles = {
  container: {
    paddingTop: "2rem",
    paddingBottom: "4rem",
    background: "radial-gradient(#fde2ff, white)",
  },
  contentContainer: {
    maxWidth: { lg: "84rem" },
  },
  contentCard: {
    borderRadius: "2rem",
    boxShadow: BOX_SHADOW,
    backgroundColor: "white",
    padding: "3rem 4rem",
  },
  title: {
    textAlign: "center",
  },
  section: {
    paddingTop: "4rem",
  },
  sectionHeader: {
    ...baseHeaderText,
    // color: theme.palette.text.title,
  },
  inputContainer: {
    paddingTop: "1.5rem",
  },
  input: {
    width: "20rem",
  },
  additionalNotesInput: {
    width: "min(90vw, 36rem)",
  },
  paymentContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: "2rem",
  },
  paymentAmount: {
    width: { xs: "20rem", md: "unset" },
  },
  formHeader: {
    ...baseHeaderText,
    paddingBottom: "1rem",
  },
  personSectionHeaderText: {
    ...baseHeaderText,
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  personSectionHeader: {
    display: "inline-flex",
    gap: "1rem",
    alignItems: "center",
  },
  personInput: {
    width: "min(90vw, 36rem)",
  },
  loadingSpinner: {
    padding: "8px",
  },
  formLeft: {
    width: "min(90vw, 44rem)",
  },
  submitButton: {
    width: "min(90vw, 12rem)",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "600",
  },
  eventsCheckboxGroup: {
    paddingLeft: "2rem",
  },
  dropdownItem: {
    padding: "0.75rem 1rem",
  },
};

export default signInStyles;
