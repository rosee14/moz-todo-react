import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  //const taskList = props.tasks?.map((task) => task.name);
  //fuction mapTaskToName(task){
  //return task.name;
  //}
  //let array=[];
  //for(let i=0;i<props.tasks.lengh;i++){
  //  array.add(mapTaskToName(props.tasks[i]))
  //}


  console.log(taskList);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onSubmit={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton filterName="All" />
        <FilterButton filterName="Active" />
        <FilterButton filterName="Completed" />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}

      </ul>
    </div>
  );
}


