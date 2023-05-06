import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {displayInput: true, inputText: ''}

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickToggle = () => {
    this.setState(preState => ({displayInput: !preState.displayInput}))
  }

  renderDisplayInput = () => {
    const {inputText} = this.state
    return (
      <div className="input_container">
        <input
          type="text"
          value={inputText}
          onChange={this.onChangeInputText}
          className="text_input"
        />

        <button
          type="button"
          className="save_button"
          onClick={this.onClickToggle}
        >
          Save
        </button>
      </div>
    )
  }

  renderParagraph = () => {
    const {inputText} = this.state
    return (
      <div className="para_container">
        <p className="para">{inputText}</p>
        <button
          type="button"
          className="edit_button"
          onClick={this.onClickToggle}
        >
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {displayInput} = this.state
    return (
      <div className="page_container">
        <div className="card_container">
          <h1 className="heading">Editable Text Input</h1>
          {displayInput ? this.renderDisplayInput() : this.renderParagraph()}
        </div>
      </div>
    )
  }
}

export default EditableText
