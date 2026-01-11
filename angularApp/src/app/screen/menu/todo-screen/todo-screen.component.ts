
import { Component } from '@angular/core';
interface TodoType{
  Id:number,
  Name:string,
  Description :string,
  Date:number
}
@Component({
  selector: 'app-todo-screen',
  imports: [],
  templateUrl: './todo-screen.component.html',
  styleUrl: './todo-screen.component.scss'
})

export class TodoScreenComponent {
        TodoList:TodoType[]=[
          {
            Id: 1,
            Name: "Eat",
            Description: "Eat food",
            Date: 9,
          },
          {
            Id: 2,
            Name: "Sleep",
            Description: "Get enough rest",
            Date: 10,
          },
      ];
      constructor() {
        
      }
      deleteTodo(Id:number):void{
        alert("Clicked"+Id); 
      }
      updateTodo(Id:number):void{
        alert("Clicked"+Id); 
      }
}
