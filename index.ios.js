/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var cats = ["1", "2", "3", "4", "5", "6"];
var amount1 = ["200", "400", "600", "800", "1000"];
var amount2 = ["400", "800", "1200", "1600", "2000"];

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var coryatApp = React.createClass({
  render: function() {
    return (
      <ScoreBox />
    );
  }
});


var ScoreBox = React.createClass({
  render: function() {
    return (
      <View style={styles.scoreBox}>
        <Text style={styles.score}>
          200
        </Text>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  scoreBox: {
    color: 'blue',
    textAlign: 'center'
  },
  score: {
    color: 'white',
    fontSize: 20
  }
});

AppRegistry.registerComponent('coryatApp', () => coryatApp);
