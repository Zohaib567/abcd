import React, { useState } from 'react';
import { Button, Text, View, } from 'react-native';

const App = () => {
  const saveAPIData = async() => {
    const data = {
      name: "Ali",
      age: 45,
      school: "Gov School",
      id: 4,
    }
      const url = "http://localhost:3000/users";
      let result =  await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data)
      })
      result = await result.json();
      console.warn(result);
    }
    return (<View>
      <Text style={{ fontSize: 30 }}>Ajeeb hai yr</Text>
      <Button title='Plz chal ja' onPress={saveAPIData}></Button>

    </View>
    );
  };
  export default App;
