"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {  AppBar, Box,  Button,  IconButton,  Toolbar,  Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ItemCards from "@/component/ItemCards";
import BillCards from "@/component/BillCards";
import Index from "@/component/Index";


export default function Home() {
  return (
  <Index/>
  );
}
