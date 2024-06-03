import { SvgIcon } from "@mui/material";
import { ReactComponent as StarIcon } from "assets/svgs/color-logo.svg";
import brandStyles from "./brand.styles";

function Brand() {
  return (
    <SvgIcon component={StarIcon} viewBox="0 0 640 600" sx={brandStyles.logo} />
  );
}

export default Brand;
