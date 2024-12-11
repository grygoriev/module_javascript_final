import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.state = {
      total: 0,
      donates: [],
    }

    const donateHeader = document.createElement('h1');
    donateHeader.className = "total-amount";
    donateHeader.textContent = "Итого: $"
    const donateSpan = document.createElement('span');
    donateSpan.textContent = this.state.total;
    donateHeader.appendChild(donateSpan);
    this.$rootElement.appendChild(donateHeader);
    this.$total = donateSpan;

    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }
  
  onItemCreate(amount) {
    const $item  = new ListItem({
      amount: amount,
      onDelete: this.onItemDelete.bind(this)
    });
    this.state.donates.push($item);
    this.donateList.addItem($item);
    this.state.total += amount;
    this.$total.textContent = this.state.total;
  }

  onItemDelete(item) {
    const itemId = Number(item.id);
    const itemAmount = this.state.donates.find(d => d.state.id === itemId).state.amount;
    const itemIndex = this.state.donates.findIndex(d => d.state.id === itemId);
    this.state.donates.splice(itemIndex, 1);
    this.state.total -= itemAmount;
    this.$total.textContent = this.state.total;
    item.remove();
  }
}
