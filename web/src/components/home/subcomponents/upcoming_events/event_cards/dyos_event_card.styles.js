import theme from "@/common/theme";

const dyosEventCardStyle = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    width: "auto",
    fontSize: "16px",
    padding: "4px 0px",
  },
  left: {
    width: "48%",
    color: theme.palette.text.subtitle,
    fontSize: {
      xs: "14px",
      sm: "16px",
    },
  },
  right: {
    width: "48%",
    fontWeight: 600,
    fontSize: {
      xs: "14px",
      sm: "16px",
    },
  },
};

export default dyosEventCardStyle;
