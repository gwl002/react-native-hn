import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';


const LogoIcon = (style) => <Icon name="globe-outline" fill={"white"} width={30} height={30} style={{marginLeft:10,marginRight:5}}/>

const Indicator = () => <View style={styles.indicator}></View>

export default function TopBar(props){
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const onSelect = (index) => {
		setSelectedIndex(index);
		let item = props.items[index];
		props.onPressed(item.id);
  	};


	return (
		<SafeAreaView style={styles.header}>
			<View style={styles.topbar}>
				<LogoIcon />
				{
					props.items.map((item,index) => {
						let isActive = selectedIndex === index;
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
	items: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string,
		id: PropTypes.string
	})),
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