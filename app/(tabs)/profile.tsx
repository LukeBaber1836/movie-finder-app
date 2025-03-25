import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'

const profile = () => {
  return (
    <View className='bg-primary flex-1 px-10'>
      <View className='flex flex-1 flex-col gap-5 justify-center items-center'>
        <AntDesign name='user' size={50} color="#fff" />
        <Text className='text-gray-500 text-base'>
          User Profile
        </Text>
      </View>
    </View>
  )
}

export default profile