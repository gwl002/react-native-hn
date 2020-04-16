import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from "react-redux";
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import TopBar from "../components/TopBar";
import CommentList from "../components/CommentList";

import  { host, timeAgo } from "../utils";


function CommentScreen(props){
	let { story, dispatch, comments } = props;
	let { id } = props.route.params;

	useEffect(() => {
		dispatch({type:"item/fetchComments",payload: id})
	},[]);

	return (
		<Layout style={{flex:1,backgroundColor:"#f2f3f5",paddingTop:40}}>
			<Layout style={styles.storyInfo}>
				<Text style={styles.title}>{story.title} <Text style={styles.host}>{host(story.url)}</Text></Text>
				<Text style={styles.desc}>{story.score} points | by <Text style={styles.link}>{story.by}</Text> {timeAgo(story.time)} ago</Text>
				<Text style={[styles.desc,{color:"#34495e"}]}>{story.descendants || 0} comments</Text>
			</Layout>
			<CommentList comments={comments} story={story} />
		</Layout>
	)
}

function mapStateToProps(state,ownProps){
	let { id } = ownProps.route.params;
	let items = state.item.itemsById;
	let story = items[id];

	const getKids = (item) => {
		if(!item) return;
		item = {...item};
		let kids = item.kids;
		if(kids){
			item.kids = kids.map(id => getKids(items[id]));
		}else{
			return item;
		}
		return item;
	}

	let comments = getKids(story).kids.filter(item => !!item); 
	
	return {
		story: story,
		comments: comments
	}
}

export default connect(mapStateToProps)(CommentScreen);



const styles = StyleSheet.create({
	storyInfo:{
		paddingHorizontal:40,
		paddingVertical:20,
		marginBottom:20
	},
	title:{
		fontSize:18,
		color: "#34495e",
		fontWeight:"bold"
	},
	host:{
		fontSize:16,
		color:"#828282",
		fontWeight:"normal"
	},
	desc:{
		fontSize:16,
		color: "#828282",
		marginTop:20
	},
	link:{
		textDecorationLine: "underline",
		color:"#828282"
	}
})