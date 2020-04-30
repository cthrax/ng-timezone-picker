export interface Timezone {
  timezone: string;
  country: string;
  pin?: string;
  offset: number;
  points?: string;
  zonename: string;
  selected?: boolean;
  sameOffset?: boolean;
}

export function findValue(key, value, data): Array<Timezone> {
  var referObj = [];
  data.filter(function(object) {
    if (object[key] === value) {
      referObj.push(Object.assign({}, object));
      return object;
    }
  });
  referObj.forEach((timezone) => {
    delete timezone.points;
    delete timezone.pin;
  })
  return referObj;
}

export interface GenerateElementArgs {
  element: any;
  attr?: {[key: string]: any};
  chilled?: boolean | number | string | Array<any>;
  isSvg?: boolean;
}

export function generateElement({ element, attr, chilled = false, isSvg = false }: GenerateElementArgs) {
  let elementObject;
  if (isSvg) {
    elementObject = document.createElementNS('http://www.w3.org/2000/svg', element);
  } else {
    elementObject = document.createElement(element);
  }
  if (attr) {
    Object.keys(attr).forEach((key) => {
      elementObject.setAttribute(key, attr[key]);
    });
  }
  if (chilled) {
    if (chilled instanceof Array) {
      chilled.forEach((chilleds) => {
        elementObject.appendChild(chilled[chilleds]);
      });
    } else if (typeof chilled == 'string') {
      elementObject.innerHTML = chilled;
    } else {
      elementObject.appendChild(chilled);
    }
  }
  return elementObject;
}
