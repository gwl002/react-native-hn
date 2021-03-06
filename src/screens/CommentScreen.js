import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import CommentList from '../components/CommentList';

import { host, timeAgo } from '../utils';
import { useNavigation } from '@react-navigation/native';

function CommentScreen(props) {
	const navigation = useNavigation();
	let { story, dispatch, comments, activeType } = props;
	let { id } = props.route.params;

	const navigateToUser = id => {
		navigation.navigate('User', { user: id });
	};

	useEffect(() => {
		dispatch({ type: 'item/fetchComments', payload: id });
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: '#f2f3f5' }}>
			<TopBar />
			<View style={styles.storyInfo}>
				<Text style={styles.title}>
					{story.title}{' '}
					<Text style={styles.host}>{story.url ? host(story.url) : null}</Text>
				</Text>
				<Text style={styles.desc}>
					{story.score} points | by{' '}
					<Text
						onPress={() => {
							navigateToUser(story.by);
						}}
						style={styles.link}
					>
						{story.by}
					</Text>{' '}
					{timeAgo(story.time)} ago
				</Text>
				<Text style={[styles.desc, { color: '#34495e' }]}>
					{story.descendants || 0} comments
				</Text>
			</View>
			<CommentList comments={comments} story={story} />
		</View>
	);
}

function mapStateToProps(state, ownProps) {
	let { id } = ownProps.route.params;
	let items = state.item.itemsById;
	let story = items[id];

	const getKids = item => {
		if (!item) return;
		item = { ...item };
		let kids = item.kids;
		if (kids) {
			item.kids = kids.map(id => getKids(items[id])).filter(kid => !!kid);
		} else {
			return item;
		}
		return item;
	};

	let storyDetail = getKids(story);
	let comments = [];
	if (storyDetail.kids) {
		comments = storyDetail.kids;
	}

	return {
		story: story,
		comments: comments,
	};
}

export default connect(mapStateToProps)(CommentScreen);

const styles = StyleSheet.create({
	storyInfo: {
		paddingHorizontal: 40,
		paddingVertical: 20,
		marginBottom: 20,
	},
	title: {
		fontSize: 18,
		color: '#34495e',
		fontWeight: 'bold',
	},
	host: {
		fontSize: 16,
		color: '#828282',
		fontWeight: 'normal',
	},
	desc: {
		fontSize: 16,
		color: '#828282',
		marginTop: 20,
	},
	link: {
		textDecorationLine: 'underline',
		color: '#828282',
	},
});
