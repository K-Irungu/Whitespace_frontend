import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function StudentSupervisors({ supervisors }) {

const list = []
list.push(supervisors)
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    // { field: "institution", headerName: "Institution", width: 200 },

  ];

  return (
    <>
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ px: 2 }}>
            <Typography component="h3" variant="h6" gutterBottom>
            My Supervisor
            </Typography>
          </Box>
          
        </Box>

        <div style={{ height: 685, width: "100%" }}>
          <DataGrid
            rows={list}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Paper>
    </Grid>

    </>
  );
}
