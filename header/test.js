import { h, render } from 'preact';// Import Preact
import Header from './header';// Import our component
import QUnit from 'qunitjs';// Import QUnit’s JS
import 'qunitjs/qunit/qunit.css';// Import QUnit’s CSS

// Use the fixture element in the HTML as a container for the component
const fixtureElement = document.getElementById('qunit-fixture');

QUnit.test('hello test', function(assert) {
  const message = 'Welcome to your first StealJS and Preact app';
  const rendered = render(<Header title={message} />, fixtureElement);
  assert.equal(`${rendered.textContent.trim()}!`, message, 'Correct title');
});

QUnit.start();
