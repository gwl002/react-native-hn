import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';

import { WebView } from 'react-native-webview';

import { Loading } from "../components/Loading";

export default function WebviewScreen(props){
	let uri = props.route.params.uri;
	return (
		<SafeAreaView style={{flex:1}}>
			<WebView 
				style={{flex:1}} 
				source={{uri:uri}} 
				startInLoadingState={true}
  				renderLoading={() => <Loading loading={true} /> }
			/>
		</SafeAreaView>
	)
}

