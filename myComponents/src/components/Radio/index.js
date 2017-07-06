import React from 'react';
import './style.less';

class RadioComponent extends React.PureComponent {
  render () {
    const { name, checked, onChange } = this.props;
    return (
      <div className="ui-radio">
        <input className="input-hidden" type="radio" name={name} defaultChecked={checked} onChange={onChange.bind(this)} />
        <span className="ui-radio-body">
          <i className="iconfont"></i>
        </span>
      </div>
    )
  }
}

export default RadioComponent;