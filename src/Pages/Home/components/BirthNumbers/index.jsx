import { Box, CircularProgress, Divider, Grid } from "@mui/material";
import NumbersItem from "./NumbersItem";
import CircleIcon from "@mui/icons-material/Circle";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { useSelector } from "react-redux";
import PercentageBox from "./PercentageBox/PercentageBox";

const BirthNumbers = () => {
  const numbers = useSelector((s) => s?.birthNumbers?.data);
  const loading = useSelector((s) => s?.birthNumbers?.loading);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress sx={{ color: "#080c3f" }} />
        </Box>
      ) : (
        <>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
              <NumbersItem
                icon={
                  <TripOriginOutlinedIcon
                    sx={{ fontSize: "62px", color: "#32bea6" }}
                  />
                }
                title="ﻋﺪد اﻟﻤﻮاﻟﻴﺪ اﻟﻤﺪﺧﻠﻴﻦ"
                number={numbers?.birth}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <NumbersItem
                icon={
                  <CircleIcon sx={{ fontSize: "56px", color: "text.grey" }} />
                }
                title="ﻋﺪد اﻟﻮﻓﻴﺎت اﻟﻤﺪﺧﻠﻴﻦ"
                number={numbers?.death}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <NumbersItem
                icon={
                  <RotateRightIcon
                    sx={{ fontSize: "62px", color: "#f8c22d" }}
                  />
                }
                title="ﻃﻠﺒﺎت ﺗﻌﺪﻳﻞ ﻣﻘﺪﻣﺔ"
                number={numbers?.editRequests}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Box sx={{ width: 0.5 }}>
              <PercentageBox
                title="اﻟﻨﺴﺒﺔ ﺑﻴﻦ اﻟﺬﻛﻮر واﻹﻧﺎث ﻟﻠﻤﻮاﻟﻴﺪ"
                percentage={numbers?.birthPercentage}
                id="birth"
              />
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 3, borderWidth: "1.5px" }}
            />

            <Box sx={{ width: 0.5 }}>
              <PercentageBox
                title="اﻟﻨﺴﺒﺔ ﺑﻴﻦ اﻟﺬﻛﻮر واﻹﻧﺎث ﻟﻠﻮﻓﻴﺎت"
                percentage={numbers?.deathPercentage}
                id="death"
              />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default BirthNumbers;
