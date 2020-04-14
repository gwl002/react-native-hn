import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Platform } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import { withNavigation } from '@react-navigation/compat';

import  { host, timeAgo } from "../utils";


function Comment(props){

	return (
		<Layout style={styles.user}>

		</Layout>
	)
}


User.propTypes = {
	user:PropTypes.shape({
		
	}),
	// navigateToItem: PropTypes.func,
	// navigateToUser: PropTypes.func,
	// navigateToUrl: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	user:{
		paddingHorizontal:50,
		paddingVertical:40

	},
	name:{
		color: "#34495e",
		fontSize:20,
		fontWeight:"bold",
		marginBottom:20
	},
	desc:{
		color: "#34495e",
		fontWeight:"normal",
		fontSize:18,
		marginBottom:10
	},
	item:{
		flexDirection: "row",
		alignItems:"center",
		borderBottomWidth:1,
		borderBottomColor:"#eee",
		backgroundColor:"#fff",
		paddingVertical:20,
		paddingRight:80
	},
	score:{
		color: "#00d8ff",
		width:70,
		fontSize:18,
		fontWeight:"bold",
		textAlign:"center"
	},
	title:{
		fontSize:16,
		color:"#34495e",
		lineHeight:20
	},
	host:{
		fontSize:14,
		color:"#828282"
	},
	meta:{
		fontSize: 14,
		flexDirection:"row",
		marginTop:5
	},
	by:{
		color:"#828282"
	},
	link:{
		textDecorationLine: "underline",
		color:"#828282"
	}
});

export default withNavigation(React.memo(Comment));