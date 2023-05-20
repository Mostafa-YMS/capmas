import { Box, Typography } from "@mui/material";
import PercentageItem from "./PercentageItem";
import MaleSvg from "./MaleSvg";
import FemaleSvg from "./FemaleSvg";

const PercentageBox = ({ title, percentage, id }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.paper",
          border: "2px solid #e2e2ea",
          borderRadius: "24px",
          p: 3,
        }}
      >
        <Typography variant="h6" textAlign="center">
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            mt: 2,
          }}
        >
          <PercentageItem
            title="اناث"
            number={percentage?.female}
            image={
              <FemaleSvg
                color={percentage?.femaleColor}
                percent={percentage?.female / 100}
                id={`${id}Female`}
              />
            }
          />
          <PercentageItem
            title="ذكور"
            number={percentage?.male}
            image={
              <MaleSvg
                color={percentage?.maleColor}
                percent={percentage?.male / 100}
                id={`${id}male`}
              />
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default PercentageBox;
