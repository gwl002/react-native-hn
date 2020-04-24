import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	TouchableOpacity,
	Platform,
	ScrollView,
	Text
} from 'react-native';

import PropTypes from 'prop-types';
import { withNavigation } from '@react-navigation/compat';
import HTMLView from 'react-native-htmlview';
import TreeView from 'react-native-final-tree-view';

import { host, timeAgo } from '../utils';

function Comment(props) {
	let { comment } = props;
	// if (!comment) return null;
	return (
		<View style={styles.user}>
			<Text>{comment.by}:</Text>
			<HTMLView value={comment.text} style={{ paddingLeft: 14 }} />
		</View>
	);
}

Comment.propTypes = {};

function CommentList(props) {
	let { comments, story } = props;
	return (
		<ScrollView style={{backgroundColor:"#fff"}}>
			<TreeView
				data={comments}
				childrenKey="kids"
				initialExpanded={true}
				renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
					return (
						<View style={{ paddingLeft: 12*level }}>
							<Comment comment={node} />
						</View>
					);
				}}
				onNodePress={({ node, level }) => {
					if(level === 0 ){
						return false
					}else{
						return true
					}
				}}
			/>
		</ScrollView>
	);
}

CommentList.propTypes = {};

const styles = StyleSheet.create({
	user: {
		paddingHorizontal: 40,
		paddingVertical: 15,
	},
});

export default withNavigation(React.memo(CommentList));
