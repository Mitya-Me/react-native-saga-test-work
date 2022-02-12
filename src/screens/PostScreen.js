import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../styles/colors'
import CustomButton from '../components/CustomButton'
import CustomText from '../components/CustomText'

const PostScreen = ({ userName, description }) => {
	const onPostPressed = () => { 
		console.warn('onEmployeeItemPressed')
	}

	return (
		<View style={styles.wrapper}>
			<View style={styles.textBlock}>
				<CustomText
					fz={20}
					fw='bold'
					text='Xavier'
				/>
				<CustomText
					text="After becoming paraplegic following a conflict against
					the villain Lucifer in the Himalayas,[26] Xavier transformed
					his family's ancestral home into the Xavier's School for Gifted
					Youngsters, a sanctuary for mutants to train and learn about
					their abilities.[27] Under his supervision, Professor X's 
					students formed the X-Men, a super-hero group who fight for a 
					world that hates and fears them, guided by Xavier's dream.
					Through the years, Xavier and his X-Men entered into conflicts
					with both humans and mutants with diverging ideologies, 
					especially Magneto, who believed in mutant supremacy"
				/>
			</View>
			<View style={styles.btns}>
				<CustomButton
					onPress={onPostPressed}
					type='secondary'
					text='Back'
					width='50%'
				/>
				<CustomButton
					text='Logout'
					width='50%'
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'space-between',
	},
	textBlock: {
		padding: 15	
	},
	btns: {
		flexDirection: 'row',
	}
})

export default PostScreen