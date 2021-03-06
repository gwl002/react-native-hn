import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

const TabItems = [
	{
		text: "Top",
		id: "top"
	},
	{
		text: "New",
		id: "new"
	},
	{
		text: "Show",
		id: "show"
	},
	{
		text: "Ask",
		id: "ask"
	},
	{
		text: "Job",
		id: "job"
	}
]

// const LogoIcon = (style) => <Icon name="globe-outline" fill={"white"} width={30} height={30} style={{marginLeft:10,marginRight:5}}/>
const LogoIcon = () => {
	return (
		<Image source={require("../images/react_logo.png")} style={styles.logo} />
	)
}

const Indicator = () => <View style={styles.indicator}></View>

function TopBar(props){
	const navigation = useNavigation();
	let { activeType, onPressed } = props;

	const onSelect = (index) => {
		let item = TabItems[index];
		props.onPressed(item.id);
		navigation.navigate("Home");
  	};

	return (
		<SafeAreaView style={styles.header}>
			<View style={styles.topbar}>
				<LogoIcon />
				{
					TabItems.map((item,index) => {
						let isActive = activeType === item.id;
						return (
							<View key={item.id}>
								<TouchableOpacity 
									onPress={()=>onSelect(index)} 
									style={styles.btn}
								>	
									<Text style={{color:isActive?"#00d8ff":"white"}}>
										{item.text}
									</Text>
								</TouchableOpacity>
								{isActive? <Indicator /> : null}
							</View>
						)
					})
				}
			</View>
		</SafeAreaView>
	)
}

TopBar.propTypes = {
	activeType: PropTypes.string,
	onPressed: PropTypes.func,
}

const styles = StyleSheet.create({
	logo:{
		width:30,
		height:30,
		marginRight:5,
		marginLeft:10
	},
	header:{
		// backgroundColor: "#20232a"
	},
	icon:{
		width:35,
		height:35,
		color:"#fff",
		marginRight:10
	},
	topbar:{
		backgroundColor: "#20232a",

		height:54,
		flexDirection:'row',
		alignItems:"center",
	},
	btn:{
		height:53,
		alignItems:"center",
		justifyContent:"center",
		width:60
	},
	indicator:{
		height:2,
		backgroundColor:"#00d8ff",
		position:"absolute",
		bottom:0,
		width:"100%"
	}
});

const mapStateToProps = (state) => {
	return {
		activeType: state.item.activeType
	}
}

const mapDispatchToProps = (dispatch,props) => {
	return {
		onPressed: (type) => {
			dispatch({ type: 'item/gotoType', payload: type });
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TopBar);