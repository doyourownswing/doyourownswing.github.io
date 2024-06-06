import { SvgIcon } from "@mui/material";
import { ReactComponent as Logo } from "assets/svgs/color-logo.svg";
import brandStyles from "./brand.styles";

function Brand() {
  return (
    <SvgIcon component={Logo} viewBox="0 0 640 600" sx={brandStyles.logo} />
  );
}

export default Brand;
