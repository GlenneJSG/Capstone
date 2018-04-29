import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, H3, List, ListItem, Text, View } from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';
import PatientHeader from './PatientHeader'
import MyWeb from './MyWeb'
import Wallpaper from './Wallpaper'

const RecipeView = ({
  error,
  recipes,
  recipeId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Recipe from all recipes
  let recipe = null;
  if (recipeId && recipes) {
    recipe = recipes.find(item => parseInt(item.id, 10) === parseInt(recipeId, 10));
  }

  // Recipe not found
  if (!recipe) return <Error content={ErrorMessages.recipe404} />;

  // Build Ingredients listing
  const ingredients = recipe.ingredients.map(item => (
    <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
      <Text>{item}</Text>
    </ListItem>
  ));

  // Build Method listing
  const method = recipe.method.map(item => (
    <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
      <Text>{item}</Text>
    </ListItem>
  ));

  return (

    <Container>
      <Content padder>
<View style ={{flexDirection: 'row'}}>
        <Image source={{ uri: recipe.image }} style={{ height: 200, width: 200, flex: 1, resizeMode: 'contain'}} />
        <MyWeb />
        </View>
        <Spacer size={25} />
        <H3>{recipe.title}</H3>
        <Text>{recipe.author}</Text>
        <Spacer size={15} />

        <View style={styles.rowFlex}>

        <View style={styles.circle} >
          <Text style={{color: 'white'}}> {recipe.alert1} </Text>

        </View>
        <View style={styles.circle} >
          <Text style={{color: 'white'}}> {recipe.alert2}</Text>

        </View>
        <View style={styles.circle} >

          <Text style={{color: 'white'}}> {recipe.alert3 }</Text>
        </View>
        </View>



        <Card>
          <CardItem header bordered>
            <Text>Medications</Text>
          </CardItem>
          <CardItem>
            <Content>
              <List>
                {ingredients}
              </List>
            </Content>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Allergies</Text>
          </CardItem>
          <CardItem>
            <List>
              {method}
            </List>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Additional Information</Text>
          </CardItem>
          <CardItem>
            <Body>

              <Text >{recipe.body}</Text>

            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Date of Birth</Text>
          </CardItem>
          <CardItem>
            <List>
              <Text >{recipe.dob}</Text>
            </List>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Address</Text>
          </CardItem>
          <CardItem>
            <List>
              <Text >{recipe.address}</Text>
            </List>
          </CardItem>
        </Card>


        <Card>
          <CardItem header bordered>
            <Text>Health Card Number</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{recipe.id}</Text>
            </Body>
          </CardItem>
        </Card>

        <Spacer size={20} />
      </Content>
    </Container>

  );
};

RecipeView.propTypes = {
  error: PropTypes.string,
  recipeId: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeView.defaultProps = {
  error: null,
};



const styles = StyleSheet.create({
circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: '#FF4447',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20

},
rowFlex:{
  flexDirection: 'row',
  flex: 1,

    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20

},

});







export default RecipeView;
