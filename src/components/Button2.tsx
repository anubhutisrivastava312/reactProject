import React from 'react'

function Button2() {


    const styles={                    /***********************Inline css styling*******************************************/
        backgroundColor : "brown",
        color: "azure",
        padding: "20px  20px",
        maxWidth: "30%",
        marginBottom:"50px",
        bordeRadius: "5px",
        border: "none",
        cursor: "pointer",
    };
  return (
   
    
      <button style={styles}>   
        Click!
      </button>
    
  );

}
export default Button2;
