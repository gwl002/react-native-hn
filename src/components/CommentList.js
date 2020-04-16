import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Platform, ScrollView } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import { withNavigation } from '@react-navigation/compat';
import HTMLView from 'react-native-htmlview';

import  { host, timeAgo } from "../utils";


function Comment(props){
	let { comment } = props;
	if(!comment) return null;
	return (
		<Layout style={styles.user}>
			<Text>{comment.by}:</Text>
			<HTMLView value={comment.text} style={{paddingLeft:14}}/>
		</Layout>
	)
}

Comment.propTypes = {

}


function CommentList(props){
	let { comments, story } = props;
	return (
		<ScrollView>
			{comments.map((comment,index) => {
				return (
					<Comment comment={comment} key={index} />
				)
			})}
		</ScrollView>
	)
}

CommentList.propTypes = {

}

const styles = StyleSheet.create({
	user:{
		paddingHorizontal:40,
		paddingVertical:15
	},
});

export default withNavigation(React.memo(CommentList));