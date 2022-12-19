import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlIsOpened: false,
      cssIsOpened: false,
      jsIsOpened: false
    };
    // instead of use bind, added e => to the onclick in render
    // this.openHtmlDescription = this.openHtmlDescription.bind(this);
    // this.openCssDescription = this.openCssDescription.bind(this);
    // this.openJsDescription = this.openJsDescription.bind(this);
  }

  openHtmlDescription() {
    this.setState({
      htmlIsOpened: !this.state.htmlIsOpened,
      cssIsOpened: false,
      jsIsOpened: false
    });
  }

  openCssDescription() {
    this.setState({
      htmlIsOpened: false,
      cssIsOpened: !this.state.cssIsOpened,
      jsIsOpened: false
    });
  }

  openJsDescription() {
    this.setState({
      htmlIsOpened: false,
      cssIsOpened: false,
      jsIsOpened: !this.state.jsIsOpened
    });
  }

  render() {

    const htmlDescriptionClass = this.state.htmlIsOpened ? 'description-html fade-in' : 'description-html';
    const cssDescriptionClass = this.state.cssIsOpened ? 'description-css fade-in' : 'description-css';
    const jsDescriptionClass = this.state.jsIsOpened ? 'description-js fade-in' : 'description-js';
    return (
      <div className='wrapper'>
        <div className='row'>
          <div className='column-full'>
            <h3 className='html' onClick={e => this.openHtmlDescription(e)}>Hypertext Markup Language</h3>
          </div>
        </div>
        <div className='row'>
          <div className='column-full'>
            <p className={htmlDescriptionClass}>Hypertext Markup Language (HTML) is the standard
              markup language for creating web pages and web
              applications. With Cascading Style Sheets (CSS) and
              JavaScript, it forms a triad of cornerstone
              technologies for the World Wide Web.</p>
          </div>
        </div>
        <div className='row'>
          <div className='column-full'>
            <h3 className='css' onClick={e => this.openCssDescription(e)}>Cascading Style Sheets</h3>
          </div>
        </div>
        <div className='row'>
          <div className='column-full'>
            <p className={cssDescriptionClass}>Cascading Style Sheets (CSS) is a style sheet
              language used for describing the presentation of a
              document written in a markup language like HTML.
              CSS is a cornerstone technology of the World Wide
              Web. alongside HTML and JavaScript.</p>
          </div>
        </div>
        <div className='row'>
          <div className='column-full'>
            <h3 className='javascript' onClick={e => this.openJsDescription(e)}>JavaScript</h3>
          </div>
        </div>
        <div className='row'>
          <div className='column-full'>
            <p className={jsDescriptionClass}>JavaScript, often abbreviated as JS, is a high-level,
              interpreted programming language that conforms to
              the ECMAScript specification. JavaScript has curly-
              bracket syntax, dynamic typing, prototype-based
              object-orientation. and first-class functions.</p>
          </div>
        </div>
      </div>
    );
  }
}
