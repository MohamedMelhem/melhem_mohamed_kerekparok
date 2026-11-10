// oxlint-disable no-unreachable
import type { Kerekpar } from "../type/Kerekpar";
import {  useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import KerekparKartya from "./Kerekparok";



export function KerekparLista() {
  const URL = "../data/kerekparok.json";

  const [kerekparok, setKerekparok] = useState<Kerekpar[]>([]);
  const [selectedKerekpar, setSelectedKerekpar] = useState<Kerekpar | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(URL);
        const data: Kerekpar[] = await response.json();
        setKerekparok(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, []);

  const Kerekparokszama = kerekparok?.length;
  const LegolcsobbKerekparDija = Math.min(...kerekparok.map((kerekpar) => kerekpar.napiDij));
  const LegdragabbKerekparDija = Math.max(...kerekparok.map((kerekpar) => kerekpar.napiDij));

  

  return (
    <>
    <body style={{ backgroundColor: "lightblue" }}></body>
    <h1 style={{ textAlign: "center" }} className="display-4">Kerekparok - Melhem Mohamed</h1>
    
    <h2 className="lead">Összesen {Kerekparokszama} kerékpár található</h2>
    <h2 className="lead">A legolcsóbb kerékpár napi díja: {LegolcsobbKerekparDija} Ft</h2>
    <h2 className="lead">A legdrágább kerékpár napi díja: {LegdragabbKerekparDija} Ft</h2>
    <hr style={{ width: "100%", height: "5px", backgroundColor: "red", border: 0 }} />


    <div   className="Card"  >
      {kerekparok.map((kerekpar) => (
        <KerekparKartya key={kerekpar.nev} kerekpar={kerekpar}  />
      ))}
   
    </div>

    
  </>

    )
  
  };




export default KerekparLista;