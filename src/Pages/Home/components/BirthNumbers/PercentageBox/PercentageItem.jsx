import { Box, Typography } from "@mui/material";

const PercentageItem = ({ title, number, image }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography color="text.grey" variant="h6">
        {title}
      </Typography>
      {image}
      <Typography variant="h6" fontWeight={700} sx={{ mt: 2 }}>
        {`${number}%`}
      </Typography>
    </Box>
  );
};

export default PercentageItem;
