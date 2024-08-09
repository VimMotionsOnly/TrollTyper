import Typical from "react-typical"
import './CustomTypical.css'


function CustomTypical() {
return(
    <div className="typer-container">
        <Typical
          steps={[
            'Troll ', 1000,
            'Troll Typee', 500,
            'TrollTyper', 500,
          ]}
          loop={Infinity}
          wrapper="h2"
        />
      </div>

)
}

export default CustomTypical;