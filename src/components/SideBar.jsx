import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";

const items = [
  "تسجيل واقعة ميلاد",
  "تسجيل ساقط قيد ميلاد",
  "ﺗﺴﺠﻴﻞﻣﻴﻼد(ﻣﻌﺜﻮر ﻋﻠﻴﻪ)",
  "ﺗﺴﺠﻴﻞﻣﻴﻼد (ﺳﺎﻗﻂ ﻗﻴﺪ ﻣﻌﺜﻮر ﻋﻠﻴﻪ)",
  "اﺳﺘﻌﻼم- ﺗﻌﺪﻳﻞ واﻗﻌﺔ اﻟﻤﻴﻼد",
  "ﻃﻠﺐﺗﻌﺪﻳﻞ واﻗﻌﺔ ﻣﻴﻼد",
];

const drawerWidth = 260;

const SideBar = ({ mobileOpen, handleDrawerToggle, window }) => {
  const drawer = (
    <Box sx={{ px: 1 }}>
      <Toolbar />
      <Accordion
        defaultExpanded
        sx={{
          boxShadow: 0,
          "&:before": {
            backgroundColor: "transparent !important",
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TripOriginOutlinedIcon
              sx={{ color: "#00875a", fontSize: "18px" }}
            />
            <Typography sx={{ mr: 1 }}>اﻟﻤﻮاﻟﻴﺪ</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {items?.map((e, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        textAlign="right"
                        fontWeight={i === 0 ? "bold" : "normal"}
                      >
                        {e}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ borderBottom: "2px solid #e5edf9", mt: 2 }} />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav">
      <Drawer
        anchor="right"
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            zIndex: 9,
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          pt: 3,
          boxShadow: "0px 0px 10px #2020200D",
        }}
      >
        {drawer}
      </Box>
    </Box>
  );
};

export default SideBar;
