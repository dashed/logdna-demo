// 3rd-party imports

import React from 'react';
import styled from 'styled-components';

import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// local imports

import MenuButton from './menu_button';

// component

const Container = styled.div`
  background-color: #f8f9fa;

  width: 400px;
  min-width: 400px;

  overflow: hidden;
  position: relative;

  /*
    position the perfect-scrollbar's y-axis scrollbars to the left-hand side
  */

  & .ps__rail-y {
    left: 0;
    right: auto;

    .ps__thumb-y {
      left: 0;
    }
  }
`;

const generateMenu = ({ currentItem, onSelectItem }) => {
  const list = [];

  let number = 1;
  while (number <= 50) {
    list.push(
      <MenuButton
        title={`Header ${number}`}
        key={number}
        isCurrent={currentItem === number}
        onClick={onSelectItem(number)}
      />
    );

    number++;
  }

  return list;
};

class Menu extends React.Component {
  state = {
    currentItem: 1
  };

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

  onSelectItem = number => event => {
    event.preventDefault();

    this.setState({
      currentItem: number
    });
  };

  render() {
    return (
      <Container ref={this.refContainer}>
        {generateMenu({
          currentItem: this.state.currentItem,
          onSelectItem: this.onSelectItem
        })}
      </Container>
    );
  }
}

export default Menu;
