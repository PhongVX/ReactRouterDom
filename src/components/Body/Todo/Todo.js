import React from 'react'
import InputComponent from './InputComponent';
import TodoListComponent from './TodoListComponent'

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        items : []
    }
  }
  addItem(name){
    var newItem = {
        "key": this.state.items.length + 1,
        "name": name
    }
    this.setState((previousState)=>{
        return{
            items:  previousState.items.concat(newItem)
        } 
    })
  }
  removeItem(key){
      var newItems = this.state.items.filter(function(item){
        return item.key !== key;
      })
      this.setState((previousState)=>{
          return{
              items: newItems
          }
      })
  }
  render(){
    return(
      <div>
            <InputComponent addItem={this.addItem.bind(this)}/>
            <TodoListComponent items={this.state.items} removeItem={this.removeItem.bind(this)}/>
      </div>
    )
  }
  
}

export default Todo