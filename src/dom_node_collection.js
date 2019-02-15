class DOMNodeCollection {
  constructor (array){
    this.elements = array;
  }

  html(string) {
    if (string || string === "") {
      this.elements.forEach( el => {
        el.innerHTML = string
      })
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty() {
      this.html("");      
  } 

  append(arg) {
    if (arg instanceof HTMLElement) {
      this.elements.forEach(el => {
        el.innerHTML += (arg.outerHTML)
      })
    } else if (arg.constructor.name === "String") {
      this.elements.forEach(el => {
        el.innerHTML += document.createElement(arg).outerHTML
      })
    } else if (arg instanceof DOMNodeCollection) {
      this.elements.forEach(el => {
        el.innerHTML += arg.elements[0].outerHTML
      })
    }
  }

  addClass(string) {
    let new_class = string;
    this.elements.forEach( el => {
      if(el.attributes.class){
        let curr = el.getAttribute("class");
        new_class = `${curr} ${string}`;
      }
      el.setAttribute("class", new_class);
    })
  }

  removeClass(string) {
    
  }
}

module.exports = DOMNodeCollection;