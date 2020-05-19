import React from 'react'
import './a.css'
export default class PictureSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [], list: [], indeterminate: true, checkAll: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount () {
    let list = this.props.pictures
    const url = []
    list.forEach((item) => {
      url.push(item.url)
    })
    this.setState({
      url
    })
  }
  handleChange (event) {
    let item = event.target.value;
    let items = this.state.value.slice();
    let index = items.indexOf(item);
    index === -1 ? items.push(item) : items.splice(index, 1);
    this.setState({ value: items });
  }
  handleClick (e) {
    this.setState({
      indeterminate: false,
      checkAll: e.target.checked,
    })

  }
  render () {
    let vl = this.props.value
    let { url } = this.state
    return (
      <div>
        <input type="checkbox" name="all" value="all" onClick={this.handleClick} />已选中了{this.state.value.length}个<br />
        <label><input type="checkbox" name="fruit" value={vl[0]}
          onChange={this.handleChange} /> <img src={url[0]} alt="" />
          <span>aa{this.state.value}</span> </label>
        <label><input type="checkbox" name="fruit" value={vl[1]}
          onChange={this.handleChange} /><img src={url[1]} alt="" />
          <span>{this.state.value}</span></label>
        <label><input type="checkbox" name="fruit" value={vl[2]}
          onChange={this.handleChange} /><img src={url[2]} alt="" />
          <span>{this.state.value}</span>
        </label><br />

      </div>
    )
  }
}
