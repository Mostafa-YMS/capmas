import { Box, Container } from "@mui/material";
import HomeDate from "./components/HomeDate";
import { useCallback, useEffect, useState } from "react";
import BirthTypeTabs from "./components/BirthTypeTabs";
import { getBirthNumbersAction } from "../../store/actions/birthNumbers";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [birthType, setBirthType] = useState("all");

  const fetchBirthNumbers = useCallback(() => {
    getBirthNumbersAction({ startDate, endDate, birthType })(dispatch);
  }, [startDate, endDate, birthType, dispatch]);

  useEffect(() => {
    fetchBirthNumbers && fetchBirthNumbers();
  }, [fetchBirthNumbers]);

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
          py: 5,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HomeDate
              startDate={startDate}
              endDate={endDate}
              onChange={changeDate}
            />
            <BirthTypeTabs value={birthType} onChange={changeBirthType} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
