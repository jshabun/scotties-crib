import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#0b2138',
    },
    input: {
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 5,
      padding: 15,
      backgroundColor: '#ffffff',
      fontSize: 16,
    },
    button: {
      marginVertical: 5,
      color: '#97c4e1',
    },
    buttonText: {
      fontSize: 18,
      color: '#ffffff',
      textAlign: 'center',
    },
    linkText: {
      color: '#97c4e1',
      marginTop: 15,
      textAlign: 'center',
      fontSize: 16, 
    },
  });