import React from 'react';
import Timer from '../../components/Timer';

class TimerPage extends React.PureComponent {
  onExpired () {
    console.log('时间到');
  }
  render () {
    return (
      <Timer
          endTime={new Date('2017-06-20 16:30:00').getTime()}
          now={new Date().getTime()}
          onExpired={this.onExpired.bind(this)}
      />
    )
  }
}

export default TimerPage;