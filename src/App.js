/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Router from './router';
import Loading from './components/Loading';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const App = () => (
    <>
        <Router />
        <Loading />
    </>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        textAlign: 'center'
    },
    likeButton: {
        marginVertical: 16
    }
});

export default App;
