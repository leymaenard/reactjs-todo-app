import React from 'react'
import ReactDOM from 'react-dom/client'
import MainTodoApp from './MainTodoApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './todo-app.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainTodoApp />
  </React.StrictMode>,
)
