import React from 'react'
import {Text} from 'react-native'
import colors from '../styles/colors'

const CustomText = ({text, fz, fw, color, tAlign, padV, padH}) => {
	return (
		<Text
			style={{
				paddingVertical: padV ? padV : 0,
				paddingHorizontal: padH ? padH : 0,
				fontSize: fz ? fz : 16,
				color: color ? color : colors.text,
				textAlign: tAlign ? tAlign : 'left',
				fontWeight: fw ? fw : 'normal',
			}}
		>
			{text}
		</Text>
	)
}

export default CustomText;