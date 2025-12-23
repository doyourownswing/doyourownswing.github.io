import { SvgIcon } from "@mui/material";
import ColorLogoSvg from "@/assets/svgs/color-logo.svg?react";
import PurpleLogoSvg from "@/assets/svgs/purple-logo.svg?react";

function PurpleLogo(props) {
  return (
    <SvgIcon
      component={PurpleLogoSvg}
      viewBox="0 0 1200 1200"
      {...props}
    ></SvgIcon>
  );
}

function ColorLogo(props) {
  return (
    <SvgIcon
      component={ColorLogoSvg}
      viewBox="0 0 640 600"
      {...props}
    ></SvgIcon>
  );
}

export { PurpleLogo, ColorLogo };
