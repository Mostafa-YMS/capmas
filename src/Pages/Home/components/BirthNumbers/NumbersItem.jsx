import { Box, Typography } from "@mui/material";

const NumbersItem = ({ icon, title, number }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "background.paper",
          border: "2px solid #e2e2ea",
          borderRadius: "24px",
          width: 1,
          boxSizing: "border-box",
          p: 3,
        }}
      >
        {icon}
        <Box sx={{ width: 0.8 }}>
          <Typography variant="h3" textAlign="center" fontWeight="bold">
            {number}
          </Typography>
          <Typography variant="h6" color="text.grey" textAlign="center">
            {title}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default NumbersItem;
