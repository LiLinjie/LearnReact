import React from 'react';

class Timer extends React.PureComponent {
  constructor (props) {
    super(props);
    this._timer = null;
    this.state = {
      diff: 0,
      isCountUp: false,
      Hour: '00',
      Minute: '00',
      Second: '00',
      MicroSec: '00'
    };
  }
  componentDidMount () {
    this.setState({
      diff: this.props.endTime - this.props.now,
      isCountUp: this.props.isCountUp || false
    }, () => {
      this.countdown();
    });
  }
  componentWillUnmount() {
    clearTimeout(this._timer);
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.endTime && nextProps.endTime !== this.props.endTime) {
      this.setState({
        diff: nextProps.endTime - nextProps.now
      }, () => {
        this.countdown();
      });
    } else if (nextProps.isCountUp && nextProps.isCountUp !== this.state.isCountUp) {
      this.setState({
        isCountUp: nextProps.isCountUp
      }, ()=>{
        this.countdown();
      })
    }
  }
  countdown () {
    let { diff } = this.state;
    this.formatDate(diff);
    if (diff <= 0) {
      this.setState({
        Hour: '00',
        Minute: '00',
        Second: '00',
        MicroSec: '00'
      });
      this.props.onExpired();
    } else {
      this._timer = setTimeout(() => {
        diff -= 10;
        this.setState({
          diff
        }, () => {
          this.countdown();
        });
      }, 10);
    }
  }
  formatDate (diff) {
    let sec = diff ? Math.floor(diff / 1000) : 0;
    if (sec > 0) {
      let hours   = Math.floor(sec / 3600);
      let minutes = Math.floor((sec - (hours * 3600)) / 60);
      let seconds = sec - (hours * 3600) - (minutes * 60);
      let microSecs = Math.floor((diff - sec * 1000) / 10);
      console.log(microSecs);

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes
      }
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      if (microSecs < 10) {
        microSecs = "0" + microSecs
      }
      this.setState({
        Hour: hours,
        Minute: minutes,
        Second: seconds,
        MicroSec: microSecs
      });
    }
  }

  render () {
    const { Hour, Minute, Second, MicroSec} = this.state;
    return (
      <div className="timer">
        {Hour}:{Minute}:{Second}:{MicroSec}
      </div>
    )
  }
}

export default Timer;