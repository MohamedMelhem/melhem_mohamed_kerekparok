
import type { Kerekpar } from "../type/Kerekpar";
import "bootstrap/dist/css/bootstrap.min.css";


type KerekparProps = {
    kerekpar: Kerekpar
}


const KerekparKartya = ({kerekpar}: KerekparProps) => {
    return (
        <>
  <div className="card">
  <div className="card-header">
    🚲
  </div>
  <div className="card-body">
      <h3 style={{ color: kerekpar.szin }}>{kerekpar.nev}</h3>
    <p className="card-text">Tipus: {kerekpar.tipus}</p>
    <p className="card-text">Napi dij: {kerekpar.napiDij}</p>
        <button type="button" className="btn btn-primary" onClick={() => alert(`${kerekpar.szin}, ${kerekpar.napiDij}, ${kerekpar.nev}`)}>részletek</button>
  </div>
</div>
       
        </>
    );
}


export default KerekparKartya;