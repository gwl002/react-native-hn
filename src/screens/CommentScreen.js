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


function CommentScreen(props){
	let { user, dispatch } = props;
	

	useEffect(() => {

	},[]);

	return (
		<Layout style={{flex:1,backgroundColor:"#f2f3f5"}}>
			{user ? <User user={user} /> : null}
		</Layout>
	)
}

function mapStateToProps(state,ownProps){

	return {

	}
}

export default connect(mapStateToProps)(CommentScreen);



