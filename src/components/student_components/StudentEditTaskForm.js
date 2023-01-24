import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function StudentEditTaskForm({  setEditSuccess,
  taskId,
  handleClose}) {


  const handleSubmit = (event) => {
    event.preventDefault();


    const data = new FormData(event.currentTarget);
    console.log({
      solution: data.get("solution"),
      comment: data.get("comment")
    })
    console.log("this task has been editted!")

    
    fetch(`tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        solution: data.get("solution"),
        comment: data.get("comment")
      }),
    })
    .then((r) => {
      if(r.ok) { 
        r.json()
        .then(setEditSuccess( `Success! Task ${taskId} has been updated`))
        .then(handleClose())
      }
    })

  };
  const handleGoBack = () =>{
handleClose()  }
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ borderRadius: "5px", backgroundColor: "white" }}
    >
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ color: "primary.dark" }}>
          Edit Task
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="solution"
                label="Solution"
                name="solution"
                autoComplete="solution"
              />
            </Grid>

          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="comment"
                label="Comment"
                name="comment"
                autoComplete="comment"
              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            
          >
            Save details
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{ mb: 2 }}
            onClick={handleGoBack}
            
          >
            Back to tasks
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
