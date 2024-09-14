import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import { CssBaseline } from "@mui/material";
export default function Layout() {
  return (
    <>
    <CssBaseline/>
      <NavBar />
      <Outlet/>
    </>
  )
}
