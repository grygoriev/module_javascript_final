import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date().toLocaleString('ru-RU'),
      amount: props.amount,
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = `${this.state.date} - `;
    this.$rootElement.id = this.state.id;
    this.$donate = document.createElement('b');
    this.$donate.textContent = `$${this.state.amount}`;
    this.$rootElement.appendChild(this.$donate);
    this.$deleteButton = document.createElement('button');
    this.$deleteButton.className = 'delete-button';
    this.$deleteButton.textContent = 'Удалить';
    this.$rootElement.appendChild(this.$deleteButton);

    this.$deleteButton.addEventListener('click', this.handleDelete.bind(this))
  }
  handleDelete(event) {
    const item = event.target.closest('.donate-item');
    this.props.onDelete(item);
  }
}
