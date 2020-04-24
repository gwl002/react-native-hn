import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import User from '../components/User';

function UserScreen(props) {
	let { user, dispatch } = props;
	let id = props.route.params.user;

	useEffect(() => {
		dispatch({ type: 'user/fetchUser', payload: { id: id } });
	}, [props.route.params.user]);

	return (
		<View style={{ flex: 1, backgroundColor: '#f2f3f5' }}>
			<TopBar />
			{user ? <User user={user} /> : null}
		</View>
	);
}

function mapStateToProps(state, ownProps) {
	let id = ownProps.route.params.user;
	return {
		user: state.user[id],
	};
}

export default connect(mapStateToProps)(UserScreen);
