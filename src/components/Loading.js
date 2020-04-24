import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import { connect } from "react-redux";



export const Loading = (props) => {
    let { loading } = props;
    if(!loading) return null;
    return (
        <View style={styles.background}>
            <ActivityIndicator 
                size={props.size || 'large'} 
                color={props.color || 'blue'}
                style={styles.loading}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 10000000,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {}
})

function mapStateToProps(state){
    return {
        loading: state.loading.global
    }
}


export default connect(mapStateToProps)(Loading);
