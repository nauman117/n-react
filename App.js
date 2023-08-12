import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Heading using JSX</h1>;
const title = <h1>Heading using React Element</h1>;

const TitleComponent = () =>{
    return <h1>Title Component</h1>
}

const number = 10000;
const HeadingComponent = () =>
    <div>
        {title}
        function calling from jsx{TitleComponent()} {/* using component like a function and calling from jsx   */}
        <TitleComponent /> {/* Component composition : component in component */}
        <h1> Heading using Functional Component</h1>
        <h2>Using JS in JSX like number is {number}</h2>
    </div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);