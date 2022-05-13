import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const theme = useTheme();
  let tabsArray = [
    { title: "Time To Focus", time: "25:00" },
    { title: "Break Time", time: "5:00" },
    { title: "Longer Break", time: "15:00" },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "transparent" }}>
      <AppBar position="static">
        <Tabs
          sx={{ bgcolor: "white" }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabsArray.map((eachTab) => (
            <Tab label={eachTab.title} {...a11yProps(0)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabsArray.map((eachTab, i) => (
          <TabPanel value={value} index={i} dir={theme.direction}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "larger" }}
              gutterBottom
            >
              {eachTab.title}
            </Typography>
            <Typography sx={{ fontWeight: "normal", fontSize: 60 }}>
              {eachTab.time}
            </Typography>
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}
