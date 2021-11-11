import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import NavBar from '../comps/NavBar';

const Cont = styled.View`
    display: flex;
`;

export default function Dashboard({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
            {/* <NewOrder></NewOrder> */}

            <Cont>
                <NavBar/>
            </Cont>
            
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  });