import React from "react";

function ButtonSquared({text,type,onClick}){
    return <button onClick={onClick} type={type} className="btn-next btn-lg">{text}</button>
}

export default ButtonSquared;