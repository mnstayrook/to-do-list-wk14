function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'learn coding',
        isCompleted: false,
      }      
    ]);
    
    const removeTodo = index => {
      let temp = [...todos];    
      temp.splice(index, 1);
      setTodos(temp);
    }
    
    const addTodo = text => {
      const newTodos = [...todos, {text, isCompleted:false}];
      setTodos(newTodos);
    }
  
    return(
      <div className="app">
        <div className="todo-list" >
          {todos.map((todo, i) => (
            <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
  