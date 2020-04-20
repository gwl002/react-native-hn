import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Platform } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
  List,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import Story from "./Story";


export default function StoriesList(props){
	const { items } = props;
	const renderItem = ({ item, index}) => (
		<Story item={item} />
	)

	return (
		<List 
			data = {items}
			renderItem = {renderItem}
		/>
	)
}

StoriesList.propTypes = {
	items: PropTypes.array,
}

const styles = StyleSheet.create({
	
});