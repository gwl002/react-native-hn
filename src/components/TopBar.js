import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';

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

const LogoIcon = (style) => <Icon name="globe-outline" fill={"white"} width={30} height={30} style={{marginLeft:10,marginRight:5}}/>

const Indicator = () => <View style={styles.indicator}></View>

export default function TopBar(props){
	let { activeType, onPressed } = props;

	const onSelect = (index) => {
		let item = TabItems[index];
		props.onPressed(item.id);
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
								<Button 
									onPress={()=>onSelect(index)} 
									appearance="ghost" 
									size="small" 
									textStyle={{color:isActive?"#00d8ff":"white"}} 
									style={styles.btn}
								>
									{item.text}
								</Button>
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
		height:53
	},
	indicator:{
		height:2,
		backgroundColor:"#00d8ff",
		position:"absolute",
		bottom:0,
		width:"100%"
	}
});