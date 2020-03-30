import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Platform } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';

const Colors = {
	normal: "#34495e",
	disabled: "#ccc",
}



export default function Pagination(props){
	const [current,setCurrent] = React.useState(1);

	const hasPrev = () => current > 1;
	const hasNext = () => current < props.totalPage ;

	const prePage = () => {
		if(hasPrev()){
			setCurrent(current-1);
		}
		
	}

	const nextPage = () => {
		if(hasNext()){
			setCurrent(current+1);
		}
	}

	return (
		<View style={styles.pagination}>
			<TouchableOpacity 
				style={styles.btn}
				onPress={prePage}
				disabled={!hasPrev()}
			>
				<Icon 
					name="chevron-left-outline"
					width="30" height="30" 
					fill={hasPrev()?Colors.normal:Colors.disabled} 
				/>
				<Text style={[styles.text,{color:hasPrev()?Colors.normal:Colors.disabled}]}>prev</Text>
			</TouchableOpacity>
			<Text style={[styles.text,styles.middle]}>{`${current}/${props.totalPage}`}</Text>
			<TouchableOpacity 
				style={styles.btn}
				onPress={nextPage}
				disabled={!hasNext()}
			>
				<Text style={[styles.text,{color:hasNext()?Colors.normal:Colors.disabled}]}>more</Text>
				<Icon 
					name="chevron-right-outline" 
					width="30" 
					height="30"
				    fill={hasNext()?Colors.normal:Colors.disabled}
				/>
			</TouchableOpacity>
		</View>
	)
}

Pagination.propTypes = {
	totalPage: PropTypes.number,
	onPressed: PropTypes.func,
}

const styles = StyleSheet.create({
	pagination:{
		backgroundColor:"#fff",
		justifyContent:"center",
		alignItems:"center",
		flexDirection:"row",
		height:48,
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