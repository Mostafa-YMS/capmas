import { Box } from "@mui/material";
import HomeDate from "./components/HomeDate";
import { useCallback, useState } from "react";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const changeDate = useCallback((dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }, []);

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
        <HomeDate
          startDate={startDate}
          endDate={endDate}
          onChange={changeDate}
        />
      </Box>
    </>
  );
};

export default Home;
