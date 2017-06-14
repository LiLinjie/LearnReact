import React from 'react';
import './style.less';

class RadioComponent extends React.PureComponent {
  constructor (props) {
    super(props);
  }
  render () {
    const { name, checked, onChange } = this.props;
    return (
      <div className="ui-radio">
        <input className="input-hidden" type="radio" name={name} defaultChecked={checked} onChange={onChange.bind(this)} />
        <span className="ui-radio-body">
          <i className="iconfont">&#xe613;</i>
        </span>
      </div>
    )
  }
}

export default RadioComponent;