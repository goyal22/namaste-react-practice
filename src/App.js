import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


// // ✅ Add key to each child in the array
// const header = React.createElement(
//   "h1",
//   { id: "heading121", xyz: "abc", key: "header1" },
//   "bhai react mei chla do"
// );

// const header2 = React.createElement(
//   "h2",
//   { id: "heading2212121", xyz: "abc", key: "header2" },
//   "bhai react mei chla do"
// );

// // ✅ Children array now has unique keys
// const parent = React.createElement("div", { id: "parent" }, [header, header2]);

// // Render parent created via React.createElement
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// // JSX version
// const h1Tag = <h1 id="heading" classNameName="head" >Namaste By JSX</h1>;

// // Render JSX to another root
// const jsxroot = ReactDOM.createRoot(document.getElementById("jsxroot"));
// jsxroot.render(h1Tag);
// const number=500;
// const TitleComponent=()=>(
//   <div classNameName="container">
//     {number} {h1Tag}
//   <h1>Title</h1>
//   </div>
  
// )
// const HeadingComponent=()=>(
//    <><TitleComponent />
//    <h1>Welcome to Functionla React compoent</h1></>
  
// )



// // Render JSX to another root
// const compoentRot = ReactDOM.createRoot(document.getElementById("cmpRoot"));
// compoentRot.render(<HeadingComponent/> );







const AppLayout =()=>(
<div className="app">
  <Header/>
  <Body/>
</div>

)

const compoentRot = ReactDOM.createRoot(document.getElementById("cmpRoot"));
compoentRot.render(<AppLayout/> );