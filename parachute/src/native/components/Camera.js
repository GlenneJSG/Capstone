import React from 'react';
import { Container, Content, Text, H1, H2, H3, Button } from 'native-base';
import Spacer from './Spacer';
import { StyleSheet, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

const Camera = () => (
  <Container>
    <Content padder>
      <Spacer size={50} />
      <H1>Welcome</H1>
      <Spacer size={10} />
      <Text>CAMERA</Text>

      <Spacer size={50} />
      <H2>Group Members</H2>
      <Spacer size={10} />
      <Text>Taylor de Vet, Glenne Grossman, Jamal Habash, Cameron Nowikow</Text>


    </Content>
  </Container>
);

export default Camera;
