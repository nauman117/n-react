
/*
 * 
 *  <div id"parent">
 *      <div id="child">
 *          <h1 id="h1"></h1>
 *      </div>
 *  </div>
 * 
 * ReactElement(JS object) => HTML(Browser understands)
 * using ReactDOM.render
 *------------------------------ 
 *  <div id"parent">
 *      <div id="child">
 *          <h1 id="h1"></h1>
 *          <h2 id="h2"></h1>
 *      </div>
 *  </div>
 * 
 * we can use array
 * -----------------------------
 * react is a libraray and we can use it in small portions only as well as full scaled applications
 */
import React from "react";
import ReactDOM from "react-dom/client";
  
const heading = React.createElement(
        "div",//type
        {id:"parent"},//attributes
        React.createElement(
            "div",
            {id:"child"}, 
            [
                React.createElement(
                    "h1",
                    {id:"h1"},
                    "I am h1"
                ),
                React.createElement(
                    "h2",
                    {id:"h2"},
                    "I am h2"
                )
            ]
        )//children
            
    );
console.log(heading);//JS Object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root.render);
root.render(heading);
console.log(root);