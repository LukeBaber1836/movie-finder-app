import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Link from 'expo-router/link'
import AntDesign from '@expo/vector-icons/AntDesign';


const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{
                        uri: poster_path
                            ?`https://image.tmdb.org/t/p/w500/${poster_path}`
                            : 'https://via.placeholder.co/600x400/1a1a1a/ffffff'
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
                <Text 
                    className="text-sm font-bold text-white mt-2"
                    numberOfLines={1}
                    >
                    {title}
                </Text>

                <View className='flex-row items-center justify-start gap-x-1'>
                    <AntDesign name="star" size={15} color="gold" />
                    <Text 
                        className="text-xs text-white font-bold uppercase"
                        
                        >
                        {Math.round(vote_average / 2)}
                    </Text>
                    <View className='flex-row items-center justify-between'>
                        <Text className='text-xs text-light-300 font-medium'>
                            {release_date?.split('-')[0]}
                        </Text>
                        <Text className='text-[8px] pl-2 font-medium text-light-100 uppercase'>
                            Movie
                        </Text>
                    </View>
                </View>
                
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard