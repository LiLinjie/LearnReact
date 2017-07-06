import React from 'react';
import './index.less';

class Input extends React.PureComponent  {
  render () {
    const { label, onChange, name, value, type } = this.props;
    return (
      <div className="input-wrap">
        <input type={type || 'text'} name={name} value={value} onChange={e => onChange(e.target.value, name)}/>
        {
          value ?
              <div className="close" onClick={e => onChange('', name)}>X</div>
            :
              <label>{label}</label>
        }
      </div>
    )
  }
}


export default Input;