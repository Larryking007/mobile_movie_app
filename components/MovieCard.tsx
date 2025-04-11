import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }): Movie => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className='w-[30%]'>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://via.placeholder.co/600x400/1a1a1a/ffffff.png',
          }}
          className='w-full h-52 rounded-lg mb-2'
          resizeMode='cover'>

        </Image>
        <Text
          className='text-sm font-bold text-white
          mt-2'>{title}</Text>
      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard

const styles = StyleSheet.create({})