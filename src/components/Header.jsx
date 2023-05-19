import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { moh, moi } from "../Assets";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ handleDrawerToggle }) => {
  return (
    <>
      <AppBar
        //   color="transparent"
        elevation={0}
        sx={{
          border: "none",
          py: 1,
          backgroundColor: "background.paper",
          boxShadow: "0px 0px 10px #2020200D",
          zIndex: 999,
        }}
      >
        <Toolbar>
          <Container
            maxWidth={"xl"}
            disableGutters
            fixed
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <img
                src={moh}
                style={{ maxWidth: "65px", width: "100%" }}
                alt=""
              />
              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
              <img
                src={moi}
                style={{ maxWidth: "65px", width: "100%" }}
                alt=""
              />
              <Typography color="text.primary" variant="h5" sx={{ mr: 3 }}>
                الرئيسية
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                placeholder="استعلام عن حالة مواليد او وفاة"
                sx={{
                  backgroundColor: "background.secondary",
                  borderRadius: "8px",
                  ml: 2,
                  p: 1,
                  minWidth: { md: "300px" },
                }}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <SettingsOutlinedIcon sx={{ fontSize: "64px", color: "grey" }} />
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
