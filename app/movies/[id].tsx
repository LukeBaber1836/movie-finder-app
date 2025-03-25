import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

import { useLocalSearchParams, Link } from 'expo-router'
import useFetch from "@/services/useFetch"
import { fetchMovieDetails } from "@/services/api"
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'

interface MovieInfoProps {
  label: string;
  value: string | number | null;
}

const MovieInfo = ({label, value}: MovieInfoProps) => (
  <View className='flex-col items-start justify-center mt-5'>
    <Text className='text-light-200 font-normal text-sm'>
      {label}:
    </Text>
    <Text className='text-light-100 font-bold text-sm mt-2'>
      {value || 'N/A'}
    </Text>
  </View>
)

const MovieDetails = () => {
  const router = useRouter()
  const { id } = useLocalSearchParams()
  console.log(useLocalSearchParams())

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  return (
    <View className='bg-primary flex-1'>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80
        }}
      >
        <View>
          <Image 
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} 
            className='w-full h-[550px]'
            resizeMode='stretch'
          />
        </View>

        <View className='flex-col items-start justify-center mt-5 px-5'>
          <Text className='text-white font-bold text-xl'>
            {movie?.title}
          </Text>
          <View className='flex-row items-center gap-x-1 mt-2'>
            <Text className='text-light-200'>
              {movie?.release_date?.split('-')[0]} •
            </Text>
            <Text className='text-light-200 text-sm'>
              {movie?.runtime} min
            </Text>
          </View>
          <View className='flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2'>
            <AntDesign name="star" size={15} color="gold" />
            <Text className='text-white font-bold text-sm'>
              {(movie?.vote_average ?? 0).toFixed(1)}/10
            </Text>
            <Text className='text-light-200 text-sm'>
              ({movie?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo
            label="Overview"
            value={movie?.overview ?? null}
          />

          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join(' • ') || 'N/A'}
          />
          <View className='flex-row justify-between w-1/2'>
            <MovieInfo
              label='Budget'
              value={`$${(movie?.budget ?? 0) / 1_000_000} million`}
            />
            <MovieInfo
              label='Revenue'
              value={`$${Math.round(movie?.revenue ?? 0) / 1_000_000}`}
            />
          </View>

          <MovieInfo
            label='Production Companies'
            value={movie?.production_companies?.map((c) => c.name).join(', ') || 'N/A'}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        className='absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-full py-3.5 flex flex-row items-center justify-center z-50'
        onPress={() => router.back()}
      >
        <Feather name="arrow-left" size={24} color="white" />
        <Text className='text-white font-semibold text-base'>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default MovieDetails