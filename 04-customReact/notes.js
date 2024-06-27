/*

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    reactElement
  </React.StrictMode>
);

If we want to render this element using react.render(), then it will throw error because all these key values present inside this object is defined by us which was not understood by React.

So, we need to create the element in a way such that React will understand it.

----------------- Correct way ----------------

const username = 'Aditya';

const reactElement = {
  "a",                         <type of element>
  {                               <properties of that element>
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to visit google",              <value of that element>
  username                           <evaluated expression (whose output already defined)>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    reactElement
  </React.StrictMode>
);





*/
