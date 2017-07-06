import React from 'react';
import InputComp from '../../components/Input';
import './index.less';

class Input extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    }
  }
  onChange (val, name) {
    this.setState({
      [name]: val
    });
  }
  render () {
    return (
        <div className="form">
          <InputComp label={'用户名'} onChange={this.onChange.bind(this)} name="name" value={this.state.name}/>
          <InputComp label={'密码'} onChange={this.onChange.bind(this)} type="password" name="password" value={this.state.password}/>
        </div>
    )
  }
}

export default Input;