import React from 'react';
import RadioComponent from '../../components/Radio';

class Radio extends React.PureComponent {
  onChange () {
  }
  render () {
    return (
        <RadioComponent
            name={'女'}
            checked={false}
            onChange={() => this.onChange()}
        />
    )
  }
}

export default Radio;