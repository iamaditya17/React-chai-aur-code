// We will se how we can inject an element into DOM

const reactElement = {
  // We want to insert this element into our DOM
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root"); // get the DOM

//------------------- Way-1 -----------------------

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;

  domElement.setAttribute("href", reactElement.props.href);

  domElement.setAttribute("target", reactElement.props.target);

  container.append(domElement);
}

customRender(reactElement, mainContainer);

//------------------- Way-2 -----------------------

function customRender2(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    // traverse through each prop and set the attribute

    if (prop === "children") continue; // many time children is present inside props{}, so here we are checking

    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.append(domElement);
}

customRender2(reactElement, mainContainer);
