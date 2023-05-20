import { Tab, Tabs, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const types = [
  {
    title: "الكل",
    value: "all",
    iconColor: "#7d7d94",
  },
  {
    title: "غير موثق",
    value: "unregistered",
    iconColor: "#ffc542",
  },
  {
    title: "موثق",
    value: "registered",
    iconColor: "#3dd598",
  },
];

const BirthTypeTabs = ({ value, onChange }) => {
  return (
    <Tabs
      textColor="text.primary"
      indicatorColor="transparent"
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "8px",
        mr: 3,
        py: 0,
      }}
    >
      {types?.map((e, i) => (
        <Tab
          iconPosition="start"
          label={<Typography>{e?.title}</Typography>}
          value={e?.value}
          icon={
            <CircleIcon sx={{ color: e?.iconColor, fontSize: "12px", ml: 1 }} />
          }
          sx={{
            backgroundColor: value === e?.value && "primary.main",
          }}
        />
      ))}
    </Tabs>
  );
};

export default BirthTypeTabs;
