import React, { useState, Component } from 'react';
import { View, StyleSheet, Button, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


export interface ProfileScreenState {
  value0: boolean;
  value1: boolean;
  inputText: string;
}

export default class Profile extends React.Component<{}, ProfileScreenState>  {



  public state = {
    value0: true,
    value1: false,
    inputText: ''
  };

  onToggleCheckBox(value: boolean) {
    this.setState({
      value0: !this.state.value0,
      value1: !this.state.value1,
    });
  };


  private 
  render() {
      return (
          <View style={styles.container}>
              <Text> ProfileScreen </Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => this.setState({ inputText: text })}
                value={'32'}
              />
              <CheckBox value={this.state.value0} onValueChange={(value) => this.onToggleCheckBox(value)} />
              <CheckBox
                value={this.state.value1}
                onValueChange={(value) => this.onToggleCheckBox(value)}
              />
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
      },
});

// export default Profile;
