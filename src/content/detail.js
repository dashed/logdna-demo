// 3rd-party imports

import React from 'react';
import styled from 'styled-components';

import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const fastLoremIpsum = require('fast-lorem-ipsum');

// component

const Container = styled.div`
  padding: 25px;
  width: 100%;

  overflow: hidden;
  position: relative;
`;

const Divider = styled.hr`
  height: 1px;
  border-width: 0px;
  background-color: #dee2e6;
`;

class Detail extends React.Component {
  refContainer = React.createRef();

  componentDidMount() {
    if (this.refContainer.current) {
      this.ps = new PerfectScrollbar(this.refContainer.current, {
        suppressScrollX: true
      });
    }
  }

  componentWillUnmount() {
    if (this.ps) {
      this.ps.destroy();
      this.ps = null;
    }
  }

  render() {
    return (
      <Container ref={this.refContainer}>
        <div>
          <strong>{fastLoremIpsum('10w')}</strong>
        </div>
        <div>
          <em>{fastLoremIpsum('10w')}</em>
        </div>

        <Divider />

        <p>{fastLoremIpsum('5000w')}</p>
      </Container>
    );
  }
}

export default Detail;
