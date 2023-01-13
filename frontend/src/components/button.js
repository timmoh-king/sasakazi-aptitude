import React from "react";

const Button = ({ buttonText, buttonStyle, onClick}) => {
  return (
    <div>
      <button className={`bg-sasakazi-blue h-[36px] w-[130px] mx-3 rounded-[5px] text-white font-[900] hover:bg-white hover:text-sasakazi-blue hover:ring-[1px] hover:ring-sasakazi-blue ${buttonStyle ? buttonStyle : ""}`}>
        {buttonText}
        {onClick}
      </button>
    </div>
  );
};

export default Button;
