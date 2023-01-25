import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import PostList from "./components/PostsList";

const App = () => (
    <div>
        <UserList/>
        <hr/>
        <TodoList/>
        <hr/>
        <PostList/>
    </div>
);

export default App;
