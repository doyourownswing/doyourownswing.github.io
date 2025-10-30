import theme from "common/theme";

const signInStyles = {
  container: {
    paddingTop: "2rem",
    paddingBottom: "4rem",
  },
  title: {
    textAlign: "center",
  },
  section: {
    paddingTop: "4rem",
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
    fontWeight: "700",
    fontFamily: "Poppins",
    paddingBottom: "1rem",
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
  checkbox: {
    "&.Mui-checked": {
      color: theme.palette.checkbox.primary,
    },
    "&.MuiCheckbox-indeterminate": {
      color: theme.palette.checkbox.primary,
    },
  },
};

export default signInStyles;
