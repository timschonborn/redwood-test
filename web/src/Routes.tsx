// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import TodosLayout from 'src/layouts/TodosLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/item/{id}" page={ItemPage} name="item" />
      <Set wrap={TodosLayout}>
        <Route path="/todos/new" page={TodoNewTodoPage} name="newTodo" />
        <Route path="/todos/{id:Int}/edit" page={TodoEditTodoPage} name="editTodo" />
        <Route path="/todos/{id:Int}" page={TodoTodoPage} name="todo" />
        <Route path="/todos" page={TodoTodosPage} name="todos" />
      </Set>
      <Set wrap={DashboardLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
