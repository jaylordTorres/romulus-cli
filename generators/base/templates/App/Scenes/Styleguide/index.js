// @flow
import React from 'react';
import { Text } from 'react-native';
import Layout from '<%= name %>/App/Components/Layout';
import Button from '<%= name %>/App/Components/Button';

type Props = {
  requestExample: Function,
  installed: bool,
};

function Styleguide(props: Props): React$Element<any> {
  const { installed, requestExample } = props;

  return (
    <Layout.Scroll header>
      <Layout.Padded>
        <Text>Styleguide</Text>

        <Heading>Button</Heading>
        <Button onPress={() => alert('Button pressed')}>Button</Button>

        <Heading>Request Example (check console)</Heading>
        <Button onPress={requestExample}>Request Example</Button>

        <Heading>Map props example</Heading>
        <Text>Is app installed? {`${installed}`}</Text>
      </Layout.Padded>
    </Layout.Scroll>
  );
}

function Heading(props: { children?: React$Element<any> }): React$Element<any> {
  const { children } = props;
  return (
    <Text style={{ fontWeight: 'bold', marginTop: 30, marginBottom: 10 }}>
      {children}
    </Text>
  );
}

export default Styleguide;