import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { default as commonMessages } from "@/common/messages";
import messages from "./messages";
import { NavOptions } from "@/common/nav_options";
import navBarStyles from "./nav_bar.styles";
import purpleLogo from "@/assets/svgs/purple-logo.svg";
import Announcement from "./announcement";
import { getCurrentAnnouncement } from "@/data/announcements";
import theme from "@/common/theme";

/** Nav bar options for large screens.
 *
 * A box with all of the options as buttons.
 * Re-renders itself when the hash changes to update button styling.
 */
function ExpandedMenuOptions() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  React.useEffect(() => {
    const onHashChange = () => forceUpdate();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  });

  const getButtonStyle = (option) => {
    if (option.isCurrentPage()) {
      return {
        ...navBarStyles.expandedOptionsButton,
        ...navBarStyles.selectedOption,
      };
    } else {
      return navBarStyles.expandedOptionsButton;
    }
  };

  return (
    <Box sx={navBarStyles.expandedOptionsContainer}>
      {NavOptions.map((option) => (
        <Button
          key={option.displayName}
          sx={getButtonStyle(option)}
          href={option.url}
        >
          {option.displayName}
        </Button>
      ))}
    </Box>
  );
}

/** Nav bar options for small screens.
 *
 * A menu icon with a dropdown menu.
 */
function MenuIconOptions() {
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const handleOpenNavMenu = (event) => setAnchorElMenu(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElMenu(null);

  const getMenuItemTextStyle = (option) =>
    option.isCurrentPage()
      ? { ...navBarStyles.menuItem, ...navBarStyles.selectedOption }
      : navBarStyles.menuItem;

  return (
    <div>
      <IconButton
        sx={navBarStyles.menuIcon}
        size="large"
        aria-label="Open menu"
        edge="end"
        color="primary"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        sx={{ marginTop: "48px" }}
        id="menu-appbar"
        anchorEl={anchorElMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElMenu)}
        onClose={handleCloseNavMenu}
      >
        {NavOptions.map((option) => (
          <Link
            href={option.url}
            sx={navBarStyles.menuItemLink}
            key={option.displayName}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" sx={getMenuItemTextStyle(option)}>
                {option.displayName}
              </Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

function Logo() {
  return (
    <Box sx={navBarStyles.logoContainer}>
      <Link sx={navBarStyles.logoContainerLink} href="#/">
        <Box
          component="img"
          sx={navBarStyles.logoImage}
          alt="Do Your Own Swing logo"
          src={purpleLogo}
        />
        <Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={navBarStyles.logoBrandName}
          >
            {commonMessages.doYourOwnSwing}
          </Typography>

          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={navBarStyles.logoBrandQuip}
          >
            {messages.logoQuip}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

/** Navigation bar to be rendered at the top of the page containing tabs to other pages. */
function NavBar(props) {
  // The app bar floats, and hovers over content. Allow rendering a placeholder version that's not floating
  // and doesn't display anything, including announcement. This is per the documentation's suggestion.
  let position = !!props.placeholder ? "sticky" : "fixed";
  let appBarStyle = !!props.placeholder
    ? { ...navBarStyles.appBar, ...navBarStyles.invisible }
    : navBarStyles.appBar;

  let announcement = getCurrentAnnouncement();

  // For smaller screen sizes, put the options in a hamburger menu.
  const useHamburgerMenu = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position={position} id="NavBar" sx={appBarStyle}>
      {!!announcement && (
        <Announcement announcement={announcement}></Announcement>
      )}
      <Toolbar disableGutters sx={navBarStyles.toolbar}>
        <Box sx={navBarStyles.toolbarContentContainer}>
          <Logo />
          {!useHamburgerMenu && <ExpandedMenuOptions />}
          {useHamburgerMenu && <MenuIconOptions />}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
