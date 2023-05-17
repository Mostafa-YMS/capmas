import {
  AppBar,
  Box,
  Container,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { moh, moi } from "../Assets";

const Header = () => {
  return (
    <AppBar
      //   color="transparent"
      elevation={0}
      sx={{
        border: "none",
        py: 1,
        backgroundColor: "background.paper",
        boxShadow: "0px 5px 10px #2020200D",
      }}
    >
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
          <img src={moh} style={{ maxWidth: "65px", width: "100%" }} alt="" />
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <img src={moi} style={{ maxWidth: "65px", width: "100%" }} alt="" />
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
    </AppBar>
  );
};

export default Header;
