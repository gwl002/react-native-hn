import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Platform, Text } from 'react-native';
import PropTypes from 'prop-types';

const Colors = {
	normal: "#34495e",
	disabled: "#ccc",
}



export default function Pagination(props){
	let { currentPage, totalPage } = props;

	const hasPrev = () => currentPage > 1;
	const hasNext = () => currentPage < totalPage ;

	const prePage = () => {
		if(hasPrev()){
			props.onPressed(currentPage - 1);
		}
		
	}

	const nextPage = () => {
		if(hasNext()){
			props.onPressed(currentPage + 1);
		}
	}

	return (
		<View style={styles.pagination}>
			<TouchableOpacity 
				style={styles.btn}
				onPress={prePage}
				disabled={!hasPrev()}
			>
				{/*<Icon 
					name="chevron-left-outline"
					width="30" height="30" 
					fill={hasPrev()?Colors.normal:Colors.disabled} 
				/>*/}
				<Text style={[styles.text,{color:hasPrev()?Colors.normal:Colors.disabled}]}>{'<'} prev</Text>
			</TouchableOpacity>
			<Text style={[styles.text,styles.middle]}>{`${currentPage}/${totalPage}`}</Text>
			<TouchableOpacity 
				style={styles.btn}
				onPress={nextPage}
				disabled={!hasNext()}
			>
				<Text style={[styles.text,{color:hasNext()?Colors.normal:Colors.disabled}]}>more {'>'}</Text>
				{/*<Icon 
					name="chevron-right-outline" 
					width="30" 
					height="30"
				    fill={hasNext()?Colors.normal:Colors.disabled}
				/>*/}
			</TouchableOpacity>
		</View>
	)
}

Pagination.propTypes = {
	totalPage: PropTypes.number,
	currentPage: PropTypes.number,
	onPressed: PropTypes.func,
}

const styles = StyleSheet.create({
	pagination:{
		backgroundColor:"#fff",
		justifyContent:"center",
		alignItems:"center",
		flexDirection:"row",
		height:48,
		marginBottom:10,
		...Platform.select({
			ios:{
				shadowOffset:{
					width:0,
					height:2
				},
				shadowColor:"rgba(0,0,0,0.1)",
				shadowRadius:2
			},
			android:{
				elevation:2
			}
		})

	},
	btn:{
		flexDirection:"row",
		alignItems:"center"
	},
	text:{
		fontSize:18,
		color:"#34495e"
	},
	middle:{
		marginHorizontal:15
	}
});