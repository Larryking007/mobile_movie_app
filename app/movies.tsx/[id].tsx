import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useFetch from '@/services/useFetch'
import { fetchMovieDetails } from '@/services/api'
import { useLocalSearchParams } from 'expo-router'

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string));

  return (
    <View className='bg-primary flex-1'>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80
        }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500
          ${movie?.poster_path}`
            }}
            className='' />
        </View>

      </ScrollView>
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({})