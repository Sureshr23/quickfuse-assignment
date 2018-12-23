import Component from './base';

export default class Start extends Component {
  get southNode() {
    return $$(`${this.section.selector} div.mod-south`)[1];
  }
}
