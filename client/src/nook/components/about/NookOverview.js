import React, { Component } from 'react';

class NookOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer1: '',
      answer2: '',
      answer3: '',
      btnClickNo: ''
    };

    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick(e) {
    console.log(e.target.id);
    this.setState({
      btnClickNo: e.target.id
    });
  }

  render() {
    const { btnClickNo } = this.state;

    let aboutAns1 = null;
    let aboutAns2 = null;
    let aboutAns3 = null;
    let aboutAns4 = null;
    let aboutAns5 = null;
    let aboutAns6 = null;
    let aboutAns7 = null;
    let aboutAns8 = null;
    let aboutAns9 = null;
    let aboutAns10 = null;
    if (btnClickNo === '1') {
      aboutAns1 = (
        <div>
          <font color="blue">Ans 1: </font> This is the answer 1
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> This is the answer 2
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 2: </font> This is the answer 3
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> This is the answer 4
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '5') {
      aboutAns5 = (
        <div>
          <font color="blue">Ans 5: </font> This is the answer 5
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '6') {
      aboutAns6 = (
        <div>
          <font color="blue">Ans 6: </font> This is the answer 6
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '7') {
      aboutAns7 = (
        <div>
          <font color="blue">Ans 7: </font> This is the answer 7
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '8') {
      aboutAns8 = (
        <div>
          <font color="blue">Ans 8: </font> This is the answer 8
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '9') {
      aboutAns9 = (
        <div>
          <font color="blue">Ans 9: </font> This is the answer 9
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '10') {
      aboutAns10 = (
        <div>
          <font color="blue">Ans 10: </font> This is the answer 10
          <div className="textspaceTop" />
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <button
              id="1"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              1. What is this Nook all about?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. What is the significance of Nook?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. What is Nooks Profile?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. Why is Nooks profile to elaborate and seemingly complex?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. What is Nook's Tasks and Diary is about?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. What is the need for budgeting in the Nook?
            </button>
            {aboutAns6}
            <button
              id="7"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              7. Everyone changes over time. Would Baanda's understanding of
              individual dynamic?
            </button>
            {aboutAns7}
            <button
              id="8"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              8. Baanda would know me intimately. Wouldn't that knowledge scary?
              Can I me manipulated for commerce or politics?
            </button>
            {aboutAns8}
            <button
              id="9"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              9. How can you technologically gurantee, at least in long run,
              that even if Baanda wants it will not have access to your data?
            </button>
            {aboutAns9}
            <button
              id="10"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              10. Could you use analogy or story to explain what is the
              difference between intelligence and information about me?
            </button>
            {aboutAns10}
          </div>
        </div>
      </div>
    );
  }
}

export default NookOverview;
