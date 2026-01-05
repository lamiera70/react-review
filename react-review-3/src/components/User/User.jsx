
import "./User.css";

export default function User({age}) {

    // prima
    
    if (age >= 18) {

      return <p>Sei maggiorenne</p>;
    
    } else {

      return <p>Sei minorenne</p>;

    }

    // dopo

    return (

        <p>{age >= 18 ? "Sei maggiorenne" : "Sei minorenne"}</p>

    )

}



