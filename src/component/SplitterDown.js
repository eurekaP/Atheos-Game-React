import './Splitter.css';
import SplitterImage from "../assets/SplitterDown.png";

function Splitter() {
  return (
    <div className="Splitter position-relative">
      <img
        src = {SplitterImage}
        alt = "Splitter Down Image"
        style = {{marginTop: '-40px', marginBottom: '-55px', zIndex: '1001', width: '100%'}}
      />
    </div>
  );
}

export default Splitter;
