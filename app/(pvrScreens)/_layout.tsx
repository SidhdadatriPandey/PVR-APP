import React from 'react'
import { Stack } from 'expo-router'
import { MovieContext } from '../context1'

export default function _layout() {
    return (
        <MovieContext>
            <Stack screenOptions={{ headerShown: false }} >
                <Stack.Screen name='index' />
                <Stack.Screen name='HomeScreen' />
                <Stack.Screen name='MovieScreen' />
                <Stack.Screen name='TheaterScreen' />
                <Stack.Screen name='TicketScreen' />
            </Stack>
        </MovieContext>

    )
}