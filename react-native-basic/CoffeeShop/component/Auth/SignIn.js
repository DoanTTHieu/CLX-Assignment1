
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image,
    TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView,
     Keyboard, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    // clickLogin() {
    //     fetch('http://.php'), {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             txtInputUsername: this.state.username,
    //             txtInputPassword: this.state.password,
    //         })
    //     }
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         console.log(responseJson);
    //     })
    //     .catch((error) => { console.log(error); });
    // }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <TouchableWithoutFeedback 
                        style={styles.container}
                        onPress={Keyboard.dismiss}
                    >
                        <View style={styles.container}>
                            <View style={styles.logoContainer}>
                                <Image 
                                    style={styles.logo}
                                    // eslint-disable-next-line global-require
                                    source={require('../../assets/menu.png')}
                                />
                                <Text style={styles.title}>Account Information</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Username'
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                    onChangeText={(username) => this.setState({ username })}
                                    value={this.state.username}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Password'
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={'txtPassword'}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                />
                                <TouchableOpacity
                                    style={styles.buttonContainer}
                                    onPress={() => this.props.navigation.replace('Home')} 
                                >
                                   {/* //onPress={() => { this.clickLogin(); }}> */}
                                    <Text style={styles.buttonText}>LOGIN</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32,53,70)',
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 220,
        padding: 20
    }, 
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    }
});
