import React from 'react';
import { connect } from 'react-redux';
import styled, { css, ThemeProvider } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const ThemeButton = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

ThemeButton.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
};

const theme = {
  main: 'mediumseagreen'
};

const Input = styled.input`
  padding: .5rem;
  margin: .5rem;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Box = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));

const Container = styled.div`
  text-align: center;
`;

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    const logArgs = (...args) => console.log(...args);
    const adj = 'nice';
    logArgs();
    logArgs``;
    logArgs('a string');
    logArgs`a String`;
    logArgs(`what a ${adj} day!`);
    logArgs`what a ${adj} day!`;
    return (
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
        <ThemeProvider theme={theme}>
          <ThemeButton>Theme Button</ThemeButton>
        </ThemeProvider>
        <Input
          ref={this.inputRef}
          placeholder='default placeholder'
          onMouseEnter={() => this.inputRef.current.focus()}></Input>
        <Box background='palevioletred'>Box</Box>
      </Container>
    );
  }
}

export default connect()(Homepage);
