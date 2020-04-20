import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import Pagination from '../components/Pagination';
import StoriesList from '../components/StoriesList';

const item = {
	by: 'dhouston',
	descendants: 71,
	id: 8863,
	kids: [
		8952,
		9224,
		8917,
		8884,
		8887,
		8943,
		8869,
		8958,
		9005,
		9671,
		8940,
		9067,
		8908,
		9055,
		8865,
		8881,
		8872,
		8873,
		8955,
		10403,
		8903,
		8928,
		9125,
		8998,
		8901,
		8902,
		8907,
		8894,
		8878,
		8870,
		8980,
		8934,
		8876,
	],
	score: 111,
	time: 1175714200,
	title: 'My YC app: Dropbox - Throw away your USB drive',
	type: 'story',
	url: 'http://www.getdropbox.com/u/2/screencast.html',
};

function HomeScreen(props) {
	let {
		activeType,
		currentPage,
		totalPage,
		items,
		dispatch,
		navigation,
		route,
	} = props;

	const changeType = type => {
		dispatch({ type: 'item/gotoType', payload: type });
	};

	const changePage = page => {
		dispatch({ type: 'item/changePage', payload: page });
		dispatch({
			type: 'item/fetchList',
			payload: { type: activeType, page: page },
		});
	};

	//初始化
	useEffect(() => {
		changeType(activeType);
	}, []);

	//focus监听
	// useEffect(() => {
	// 	const unsubscribe = navigation.addListener('focus', () => {
	// 		if(route.params?.type){
	// 			console.log(route.params.type,"-------------");
	// 			changeType(route.params.type);
	// 		}
	// 	});
	// 	return unsubscribe;
	// }, [navigation,route.params?.type]);

	return (
		<Layout style={{ flex: 1, backgroundColor: '#f2f3f5' }}>
			<TopBar />
			<Pagination
				totalPage={totalPage}
				currentPage={currentPage}
				onPressed={changePage}
			/>
			<StoriesList items={items} />
		</Layout>
	);
}

function mapStateToProps(state) {
	let { activeType, itemsById, currentPage, list, itemsPerPage } = state.item;
	let ids = list[activeType].slice(
		itemsPerPage * (currentPage - 1),
		itemsPerPage * currentPage,
	);
	let items = ids.reduce((_memo, id) => {
		let memo = _memo;
		if (itemsById[id]) memo.push(itemsById[id]);
		return memo;
	}, []);
	let totalPage = Math.ceil(list[activeType].length / itemsPerPage);
	return {
		activeType,
		currentPage,
		totalPage,
		items,
	};
}

export default connect(mapStateToProps)(HomeScreen);
