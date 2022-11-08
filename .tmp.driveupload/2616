import { View, Text, Animated, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Svg, {G, Circle} from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedInput = Animated.createAnimatedComponent(TextInput)

export default function DountChart({
    perecentage = 1,
    radius = 40,
    strokeWidth = 10,
    duration = 500,
    color = 'tomato',
    delay = 0,
    textColor,
    max = 100,
    ext = '%'
}) {

    const animatedValue = React.useRef(new Animated.Value(0)).current
    const circleRef = React.useRef()
    const inputRef = React.useRef()

    const halfCirlce = radius + strokeWidth
    const circleCircumference = 2 * Math.PI * radius

    const animation = (toValue) => {
        return Animated.timing(animatedValue, {toValue, duration, delay, useNativeDriver: true})
        .start()
    }

    React.useEffect(() => {
        animation(perecentage)
        animatedValue.addListener(v => {
            if (circleRef?.current) {

                const maxPerc = 100 * v.value / max
                const strokeDashoffset = circleCircumference - (circleCircumference * maxPerc) / 100
                circleRef.current.setNativeProps({
                    strokeDashoffset
                })
            }

            if (inputRef?.current) {
                inputRef.current.setNativeProps({
                    text: `${perecentage} ${ext}`
                })
            }
        })

        return () => {
            animatedValue.removeAllListeners()
        }
    })

  return (
    <View>
      <Svg 
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCirlce * 2} ${halfCirlce * 2}`}
      >
        <G rotation={-90} origin={`${halfCirlce}, ${halfCirlce}`}>
            <Circle 
                cx='50%'
                cy='50%'
                stroke={color}
                strokeWidth={strokeWidth}
                r={radius}
                strokeOpacity={0.2}
                fill='transparent'
            />
            <AnimatedCircle
                ref={circleRef} 
                cx='50%'
                cy='50%'
                stroke={color}
                strokeWidth={strokeWidth}
                r={radius}
                strokeDasharray={circleCircumference}
                strokeDashoffset={circleCircumference}
                strokeLinecap='round'
            />
        </G>
      </Svg>
      <AnimatedInput 
        ref={inputRef}
        underlineColorAndroid='transparent'
        editable={false}
        defaultValue='0'
        style={[
            StyleSheet.absoluteFillObject,
            { fontSize: radius / 2.5, color: textColor ?? color },
            { fontWeight: '900', textAlign: 'center', width: halfCirlce * 1.6 }
        ]}
      />
    </View>
  )
}