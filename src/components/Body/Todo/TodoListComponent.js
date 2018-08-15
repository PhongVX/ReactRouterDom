import React from 'react'
import TodoItemComponent from './TodoItemComponent'

class TodoListComponent extends React.Component {
    
    constructor(props){
        super(props);
    }

    removeItem(key){
        this.props.removeItem(key);
    }

    render() {
        var thiz=this;
        return (
            <div>
                <table>
                    <thead>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {   
                            this.props.items.map(function(item,i){
                            return(<TodoItemComponent item={item} removeItem={thiz.removeItem.bind(thiz)} />) 
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default TodoListComponent