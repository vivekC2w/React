/*
<div>
    <div id="parent">
        <div id="child1">
            <h1>I'm h1 Tag</h1>
            <h2>I'm h2 Tag</h2>
        </div>
        <div id="child2">
            <h1>I'm h1 Tag</h1>
            <h2>I'm h2 Tag</h2>
        </div>
    </div>
</div>

ReactElement(Object) => HTML(Browser Understands)
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

//The above code is lengthy for that we have JSX

console.log(parent); //Object - (react-element)

//CREATE root for react
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
