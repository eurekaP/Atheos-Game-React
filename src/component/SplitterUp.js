import './Splitter.css';
import SplitterImage from "../assets/SplitterUp.png";

function Splitter() {
  return (
    <div className="Splitter position-relative">
      <img
        src = {SplitterImage}
        alt = "Splitter Up Image"
        style = {{marginTop: '-55px', marginBottom: '-40px', zIndex: '1001', width: '100%'}}
      />
    </div>
  );
}

export default Splitter;
