import React from 'react';
import { Container, Content, Text, H1, H2, H3, Button } from 'native-base';
import { FlatList, TouchableOpacity, RefreshControl, Image } from 'react-native';
import Spacer from './Spacer';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

const onPress = item => Actions.patientDatabase;

const home = () => (
  <FlatList
    numColumns={2}
    data={recipes}
    renderItem={({ item }) => (
      <Card transparent style={{ paddingHorizontal: 6 }}>
        <CardItem cardBody>
          <TouchableOpacity onPress={() => onPress(item)} style={{ flex: 1 }}>
            <Image
              source={{ uri: item.image }}
              style={{
                height: 100,
                width: null,
                flex: 1,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
        </CardItem>
        <CardItem cardBody>
          <Body>
            <Spacer size={10} />
            <Text style={{ fontWeight: '800' }}>{item.title}</Text>
            <Spacer size={15} />
            <Button
              block
              bordered
              small
              onPress={() => onPress(item)}
            >
              <Text>View Recipe</Text>
            </Button>
            <Spacer size={5} />
          </Body>
        </CardItem>
      </Card>
    )}
    keyExtractor={keyExtractor}
    refreshControl={
      <RefreshControl
        refreshing={loading}
        onRefresh={reFetch}
      />
    }
  />

  <Spacer size={20} />
</Content>
</Container>
);
};

export default Home;
