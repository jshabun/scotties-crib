import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = ({ navigation, route }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //const [password, setPassword] = useState('');

  const navigateToResetPassword = () => {
    // Navigate to the Forgot Password screen here
    console.log('Navigate to Reset Password');
    Alert.alert('Password Reset', 'Your password has been reset. Please login with your new password.');
    navigation.navigate('Login', {name: 'Login'});
  };

  const navigateToLogin = () => {
    console.log('Navigate to Login');
    navigation.navigate('Login', {name: 'Login'});
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0b2138" barStyle="light-content" />
      <Text style={styles.welcomeText}>Reset Password</Text>
      <Text style={styles.instructions}>Please enter a new password</Text>
        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#97c4e1"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
        />
        <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#97c4e1"
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
            secureTextEntry={true}
        />
      <TouchableOpacity style={styles.button} onPress={navigateToResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={navigateToLogin}>
        <Text style={styles.loginButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0b2138',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    color: '#0b2138',
  },
  welcomeText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: '2%'
  },
  instructions: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    marginBottom: '10%',
  },
  button: {
    width: '80%',
    backgroundColor: '#97c4e1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  loginButton: {
    marginTop: 15,
  },
  loginButtonText: {
    color: '#97c4e1',
    fontSize: 16,
  }
});

export default ResetPassword;


/*
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from './PWComponents/Input';
import Header from './PWComponents/Header';

export default ForgotPassword = ({ navigation, route }) => {
    const [email, setEmail] = useState('');

    const handleSendEmail = () => {
        if (email) {
            Alert.alert('Email Sent', 'Password recovery email has been sent to ' + email);
        } else {
            Alert.alert('Error', 'Please enter your email address');
        }
    };

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
            <StatusBar style="dark" />
            <ScrollView style={{ paddingTop: 60 }}>
                <Header
                    title="Forgot Password"
                    text="Please enter your registered email address to recover your password"
                />
                <View style={styles.inputBox}>
                    <Input
                        label="Email"
                        errorMessage="Enter your account email address"
                        containerStyle={styles.inputStyle}
                        right={() =>
                            <MaterialIcons name="error" size={20} color={'red'} />
                        }
                        value={email}
                        onChangeText={setEmail}
    
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={handleSendEmail}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.btnText}>
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputBox: {
        paddingHorizontal: "5%",
        marginTop: "5%"
    },
    inputStyle: {
        marginBottom: "8%"
    },
    otpBox: {
        marginTop: "14%"
    },
    passwordStyle: {
        color: '#B4192F',
        fontSize: 14,
        fontWeight: "600"
    },
    footerText: {
        color: "#A1A5AC",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center"
    },
    link: {
        color: '#0D253C',
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: '#000080',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "5%",
        borderRadius: 10,
        marginTop: "10%",
        marginBottom: "10%"
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: "5%",
        marginTop: "4%"
    }
});
*/


/*
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from './PWComponents/Input';
import Header from './PWComponents/Header';


export default Reset = () => {
    const [securePassword, setSecurePassword] = useState(true);

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
            <StatusBar style="dark" />
            <ScrollView style={{
                paddingTop: 60
            }}>
                <Header
                    title="Create your password"
                    text="Please create your new password"
                />
                <View style={styles.inputBox}>
                    <Input
                        label="Password"
                        secureTextEntry={securePassword}
                        containerStyle={styles.inputStyle}
                        inputContainerStyle={{color: "white"}}
                        autoCapitalize="none"
                        right={() =>
                            <Ionicons name={securePassword ? "eye-off" : "eye"} size={20} color="white" onPress={() => setSecurePassword(!securePassword)} />
                        }
                    />
                    <Input
                        label="Confirm Password"
                        secureTextEntry={securePassword}
                        autoCapitalize="none"
                        right={() =>
                            <Ionicons name={securePassword ? "eye-off" : "eye"} size={20} color="white" onPress={() => setSecurePassword(!securePassword)} />
                        }
                    />
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => { }}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.btnText}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b2138',
    },
    inputBox: {
        paddingHorizontal: "5%",
        marginTop: "5%",
        color: 'white',
    },
    inputStyle: {
        marginBottom: "8%",
        color: "white"
    },
    otpBox: {
        marginTop: "14%"
    },
    passwordStyle: {
        color: 'white',
        fontSize: 14,
        fontWeight: "600"
    },
    footerText: {
        color: "white",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center"
    },
    link: {
        color: '#B4192F',
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: '#000080',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "5%",
        borderRadius: 10,
        marginTop: "10%",
        marginBottom: "10%"
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: "5%",
        marginTop: "4%"
    }
});
*/