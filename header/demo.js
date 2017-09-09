import { h, render } from 'preact';
import Header from './header';

const container = document.getElementById('container');
const titleInput = document.getElementById('title');

function renderComponent() {
  render(<Header title={titleInput.value} />, container, container.lastChild);
}

renderComponent();
titleInput.addEventListener('input', renderComponent);
