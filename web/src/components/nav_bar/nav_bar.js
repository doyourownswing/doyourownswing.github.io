import "./nav_bar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FeatureFlags from "infra/feature_flags";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import messages from "common/messages";
import NavOptions from "./nav_options";
import navBarStyles from "./nav_bar.styles";
import { useTheme } from "@mui/material/styles";

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
    <AppBar
      position="static"
      id="NavBar"
      sx={{ backgroundColor: theme.palette.primary.background.light }}
    >
      <Container maxWidth="null">
        <Toolbar disableGutters>
          <Box sx={navBarStyles.logoContainer}>
            <Link sx={navBarStyles.logoContainerLink} href="#/">
              <Box
                component="img"
                sx={navBarStyles.logoImage}
                alt="Do Your Own Swing logo"
                src="logo512.png"
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
