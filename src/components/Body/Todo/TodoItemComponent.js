import React from 'react'


class TodoItemComponent extends React.Component {
    constructor(props){
        super(props);
    }
    removeItem(){
        this.props.removeItem(this.props.item.key);
    }
    render() {
        return (
            <tr>
                <td>{this.props.item.key}</td>
                <td>{this.props.item.name}</td>
                <td><button onClick={this.removeItem.bind(this)}>Remove</button></td>
            </tr>
        );
    }

}

export default TodoItemComponent