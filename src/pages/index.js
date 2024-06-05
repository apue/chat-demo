// pages/index.js
import React from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
      <div>
        <Header />
        <TodoList />
      </div>
  );
}