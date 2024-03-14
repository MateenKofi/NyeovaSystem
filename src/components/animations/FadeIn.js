import React from 'react';
import '../animations/fadeIn.css' // Ensure your fade-in animation CSS file is correctly linked

class FadeIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Trigger initial check
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const top = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementOffset = document.getElementById('fade-in-element')?.offsetTop ?? 0;

    if (top + windowHeight > elementOffset && top < elementOffset + 200) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  }

  render() {
    const { children } = this.props;
    const { isVisible } = this.state;

    return (
      <div id="fade-in-element" className={`fade-in ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    );
  }
}

export default FadeIn;
