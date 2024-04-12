import { Image } from "expo-image"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
	const GIF_URL = "https://media1.tenor.com/m/ba6u_c1Mcb0AAAAC/futurenostlgia-laughing.gif"

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Normal remote GIF</Text>
			<Image autoplay={true} width={170} height={170} source={GIF_URL} />
			<Text style={styles.title}>Same GIF at a smaller size (broken)</Text>
			<Image autoplay={true} width={150} height={150} source={GIF_URL} />
			<Text style={styles.title}>Same GIF at a smaller size, local source (broken)</Text>
			<Image autoplay={true} width={150} height={150} source={require("./assets/tenor.gif")} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		paddingTop: 20,
		paddingBottom: 10,
	},
})
