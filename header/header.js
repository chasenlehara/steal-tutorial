import { h, Component } from 'preact';

export default function Header() {
  return (
    <header>
      <h1>{this.props.title}</h1>
    </header>
  );
};
