import "./nav_bar.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import FeatureFlags from "infra/feature_flags";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import messages from "common/messages";
import { NavOptions } from "common/nav_options";
import navBarStyles from "./nav_bar.styles";
import purpleLogo from "assets/svgs/purple-logo.svg";

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
    option.isCurrentPage() ? navBarStyles.selectedOption : {};

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
        sx={{ mt: "45px" }}
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
            sx={navBarStyles.menuItem}
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

/** Navigation bar to be rendered at the top of the page containing tabs to other pages. */
function NavBar() {
  const theme = useTheme();

  return (
    <AppBar position="static" id="NavBar" sx={navBarStyles.appBar}>
      <Container>
        <Toolbar disableGutters>
          <Box sx={navBarStyles.logoContainer}>
            <Link sx={navBarStyles.logoContainerLink} href="#/">
              <Box
                component="img"
                sx={navBarStyles.logoImage}
                alt="Do Your Own Swing logo"
                src={purpleLogo}
              />
              <Typography variant="h6" noWrap component="div" color="secondary">
                {messages.dyos}
              </Typography>
            </Link>
          </Box>
          {FeatureFlags.showMenuOptions && <ExpandedMenuOptions />}
          {FeatureFlags.showMenuOptions && <MenuIconOptions />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
