export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);

  }


  appendItem(element) {
    this._container.append(element);
  }

  prependItem(element) {
    this._container.prepend(element);
  }


  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });

  }
}
