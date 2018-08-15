import React from 'react'


class InputComponent extends React.Component{
  constructor(props){
     super(props);
  }
  submitData(e){
    if(this.inputText.value != ""){
        this.props.addItem(this.inputText.value);
        this.inputText.value = "";
    }
    e.preventDefault();
  }
  render(){
      return (
        <div>
            <form onSubmit={this.submitData.bind(this)}>
                <input ref={(inputText) => { this.inputText = inputText }} type="text"/>
                <button>Add</button>
            </form>
        </div>
      )
  }
}

export default InputComponent