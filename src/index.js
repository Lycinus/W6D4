const DOMNodeCollection = require ('./dom_node_collection')

window.$l = function(arg) {
  if(arg.constructor.name === "String"){
    const nodes = document.querySelectorAll(arg);
    const nodeArr = Array.from(nodes); 
    return new DOMNodeCollection(nodeArr);
  } else if(arg.constructor.name === HTMLElement){
    return new DOMNodeCollection([arg]);
  }
}