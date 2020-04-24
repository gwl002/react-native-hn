import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Platform, FlatList } from 'react-native';

import PropTypes from 'prop-types';
import Story from "./Story";


export default function StoriesList(props){
	const { items } = props;
	const renderItem = ({ item, index}) => (
		<Story item={item} key={item.id} />
	)

	return (
		<FlatList 
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