import { Component } from '../core/Component';

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    this.$header = document.createElement('h2');
    this.$header.className = 'donates-container__title';
    this.$header.textContent = 'Список донатов';
    this.$listContainer = document.createElement('div');
    this.$listContainer.className = 'donates-container__donates';

    this.$rootElement.append(this.$header, this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}