import { Box } from "@mui/material";
import HomeDate from "./components/HomeDate";
import { useCallback, useState } from "react";
import BirthTypeTabs from "./components/BirthTypeTabs";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [birthType, setBirthType] = useState("all");

  const changeDate = useCallback((dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }, []);

  const changeBirthType = useCallback((e, v) => setBirthType(v), []);

  return (
    <>
      <Box
        sx={{
          height: 1,
          backgroundColor: "background.main",
          mt: 12,
          px: 3,
          py: 5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HomeDate
            startDate={startDate}
            endDate={endDate}
            onChange={changeDate}
          />
          <BirthTypeTabs value={birthType} onChange={changeBirthType} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
