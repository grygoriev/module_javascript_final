import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.amount = '';
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';
    this.$donateFormInputLabel = document.createElement('label');
    this.$donateFormInputLabel.className = 'donate-form__input-label';
    this.$donateFormInputLabel.textContent = 'Введите сумму в $';
    this.$input = document.createElement('input');
    this.$input.className = 'donate-form__donate-input';
    this.$input.name = 'amount';
    this.$input.type = 'number';
    this.$input.min = '1';
    this.$input.max = '100';
    this.$input.required = true;
    this.$donateFormInputLabel.appendChild(this.$input);
    this.$button = document.createElement('button');
    this.$button.setAttribute('type', 'submit');
    this.$button.disabled = true;
    this.$button.classList.add('donate-form__submit-button');
    this.$button.textContent = 'Задонатить'
    this.$rootElement.appendChild(this.$donateFormInputLabel);
    this.$rootElement.appendChild(this.$button);

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  get isValid() {
    return this.state.amount>0 && this.state.amount<=100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.$button.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.$input.value = '';
    }
  }
}
