import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

const saved = () => {
  return (
    <View className='bg-primary flex-1 px-10'>
      <View className='flex flex-1 flex-col gap-5 justify-center items-center'>
        <Feather name='bookmark' size={50} color="#fff" />
        <Text className='text-gray-500 text-base'>
          Saved Movies
        </Text>
      </View>
    </View>
  )
}

export default saved