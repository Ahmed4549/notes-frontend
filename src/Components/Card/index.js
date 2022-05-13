import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import CustomTabs from "../Tabs";

export default function OutlinedCard(props) {
  return (
    <Box sx={{ width: "70%" }}>
      <Card
        sx={{
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: " 16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(9.4px)",
          webkitBackdropFilter: "blur(9.4px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          marginBottom: "1rem",
        }}
      >
        <CardContent>
          <CustomTabs />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.5rem",
            textTransform: "unset",
          }}
        >
          <Button
            sx={{
              textTransform: "unset",
            }}
            color="secondary"
            variant="outlined"
          >
            Start Focusing
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
