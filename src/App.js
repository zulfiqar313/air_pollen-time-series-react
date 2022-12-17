import "./App.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  TwentyTwoData,
  twentyOneData,
  TwentyTwentyData,
} from "./timeSeriesData";
import Box from "@mui/material/Box";

function App() {
  const [age, setAge] = React.useState("2022");
  const [pollenData, setPollenData] = React.useState(TwentyTwoData);

  const handleChange = (event) => {
    setAge(event.target.value);
    if (event.target.value === 2022) {
      setPollenData(TwentyTwoData);
    } else if (event.target.value === 2021) {
      setPollenData(twentyOneData);
    } else {
      setPollenData(TwentyTwentyData);
    }
  };
  return (
    <Box sx={{ height: "80vh" }} mx={[0, 5, 5, 5]} my={10}>
      <Box mx={[0, 5, 5, 5]}>
        <Typography variant="h5">
          The time series shows pollen per cubic meter by trees, grass and weeds
          in differnt months of the year.
        </Typography>
        <Box display="flex">
          <Box width="20%" my={4}>
            <FormControl fullWidth>
              <InputLabel id="simple-select-label">Select Year</InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select"
                value={age}
                label="Select Year"
                onChange={handleChange}>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <ResponsiveContainer width="100%" height="50%">
        <LineChart
          width={700}
          height={300}
          data={pollenData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend iconSize="40" />
          <Line
            type="monotone"
            dataKey="Grass"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Trees" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Weeds" stroke="#BDB224" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default App;
