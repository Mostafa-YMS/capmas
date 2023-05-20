import { Box, IconButton, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const dateFormat = {
  year: "numeric",
  day: "2-digit",
  month: "2-digit",
};

const HomeDate = ({ startDate, endDate, onChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "background.paper",
        border: "2px solid #e2e2ea",
        borderRadius: "16px",
        p: 1,
        maxWidth: "400px",
      }}
    >
      <Typography>الفترة:</Typography>
      <Typography sx={{ mx: 1 }}>
        {startDate.toLocaleDateString("en-US", dateFormat)}
      </Typography>
      <KeyboardBackspaceOutlinedIcon
        sx={{ fontSize: "14px", color: "text.grey" }}
      />
      <Typography sx={{ mx: 1 }}>
        {endDate
          ? endDate.toLocaleDateString("en-US", dateFormat)
          : startDate.toLocaleDateString("en-US", dateFormat)}
      </Typography>
      <Box>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          customInput={
            <IconButton>
              <CalendarTodayOutlinedIcon
                sx={{ color: "text.grey", fontSize: "16px" }}
              />
            </IconButton>
          }
        />
      </Box>
    </Box>
  );
};

export default HomeDate;
