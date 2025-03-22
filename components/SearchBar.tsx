import { StyleSheet, TextInput, View, Image } from 'react-native'
import { icons } from '@/constants/icons'

import Feather from '@expo/vector-icons/Feather';

interface Props {
    placeholder?: string;
    onPress?: () => void;
    value: string;
    onChangeText: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
        <Feather name="search" size={24} color="#ab8bff" />
        <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor='#a8b5db'
            className='flex-1 ml-2 text-white'
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})