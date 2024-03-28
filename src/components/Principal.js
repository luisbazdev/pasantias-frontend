"use client";
import "./Historial.css"
import Historiales from "./principal/Historiales";
import NavigationBar from "./principal/NavigationBar";

export default function Principal(){
  return (
    <div>
      <NavigationBar/>
      <Historiales/>
    </div>
  )
}