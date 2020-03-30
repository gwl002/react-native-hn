import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import TopBar from "../components/TopBar";
import Pagination from "../components/Pagination";
import Story from "../components/Story";

const items = [
	{
		text: "Top",
		id: "1"
	},
	{
		text: "New",
		id: "2"
	},
	{
		text: "Show",
		id: "3"
	},
	{
		text: "Ask",
		id: "4"
	},
	{
		text: "Job",
		id: "5"
	}
]

const item = {
	"by" : "dhouston",
	"descendants" : 71,
	"id" : 8863,
	"kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
	"score" : 111,
	"time" : 1175714200,
	"title" : "My YC app: Dropbox - Throw away your USB drive",
	"type" : "story",
	"url" : "http://www.getdropbox.com/u/2/screencast.html"
}

export default function HomeScreen(props){
	return (
		<Layout style={{flex:1}}>
			<TopBar 
				onPressed={()=>{
					console.log("xxxx")
				}}
				items={items}
			/>
			<Pagination 
				totalPage={100}
			/>
			<Layout>
				<Story item={item} />
			</Layout>
		</Layout>
	)
}