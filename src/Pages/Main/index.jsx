import { useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Home from "../Home";
import { Grid } from "@mui/material";

const Main = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Grid container>
        <Grid item xs={0} sm={3} xl={2}>
          <SideBar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Grid>
        <Grid item xs={12} sm={9} xl={10}>
          <Home />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
