import { Box, AppBar, Typography, Toolbar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <Box >
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" sx={{flexGrow:1,fontStyle:'italic'}}>
              Express
            </Typography>
            <Button sx={{color:"white", textTransform:"none"}} component={NavLink} to="/" style={({isActive})=>({ backgroundColor:isActive?'#6d1b5b':''})}>Home</Button>
            <Button sx={{color:"white", textTransform:"none"}} component={NavLink} to="contact" style={({isActive})=>({backgroundColor:isActive?'#6d1b5b':''})}>Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
