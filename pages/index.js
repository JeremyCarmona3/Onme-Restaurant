import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';

import styled from 'styled-components/native';

import NewOrder from '../comps/NewOrder';

const DashCont = styled.View`
  width: 100px;
  height: 100px;
  background-color: #fad;
`;

export default function Dashboard({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
            <NewOrder></NewOrder>
            <DashCont>
              <Text>Hello</Text>
            </DashCont>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  });