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


function Story(props){
	let { item, navigation } = props;

	const navigateToUrl = (uri) => {
		navigation.navigate("Webview",{uri:uri})
	}

	const navigateToUser = (user) => {
		navigation.navigate("User",{user:user})
	}

	const navigateToItem = (id) => {
		navigation.navigate("Comment",{id:id})
	}

	return (
		<Layout style={styles.item}>
			<Text style={styles.score}>{item.score}</Text>
			<View style={styles.details}>
				{
					item.url?(
						<Text 
							style={styles.title} 
							onPress={()=>{
								navigateToUrl(item.url)
							}}
						>
							{item.title}
							<Text style={styles.host}>({host(item.url)})</Text>
						</Text>
					):(
						<Text>{item.title}</Text>
					)
				}
				<View style={styles.meta}>
					{
						item.type !== "job"? (
							<Text style={styles.by}>
								by 
								<Text 
									style={styles.link}
									onPress={()=>{
										navigateToUser(item.by);
									}}
								> 
									{" " + item.by}
								</Text>
							</Text>
						):null
					}
					<Text style={styles.by}> {timeAgo(item.time)}</Text>
					{
						item.type !== "job"?(
							<Text style={styles.by}>
								{" | "}
								<Text 
									style={styles.link}
									onPress={()=>{
										navigateToItem(item.id)
									}}
								>
									{item.descendants} comments
								</Text>
							</Text>
						):null
					}
					{
						item.type !== "story"?(
							<Text style={styles.by}>{' ' + item.type}</Text>
						):null
					}
				</View>
			</View>
		</Layout>
	)
}

Story.propTypes = {
	item:PropTypes.shape({
		id: PropTypes.number,
		score: PropTypes.number,
		title: PropTypes.string,
		by: PropTypes.string,
		url: PropTypes.string,
		type: PropTypes.string,
		time: PropTypes.number,
		descendants: PropTypes.number
	}),
	// navigateToItem: PropTypes.func,
	// navigateToUser: PropTypes.func,
	// navigateToUrl: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
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

export default withNavigation(React.memo(Story));