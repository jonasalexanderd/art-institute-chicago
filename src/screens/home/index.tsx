import React from 'react';
import {Text} from 'react-native';
// Components
import Container from 'src/components/commons/container';
// Style
import homeStyle from './style';

const Home = () => {
  return (
    <Container style={homeStyle.container}>
      <Text style={homeStyle.title}>Welcome to Art Institute of Chicago</Text>
    </Container>
  );
};

export default Home;
