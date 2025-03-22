import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from "@/constants/images"

import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';

import { GestureHandlerRootView } from 'react-native-gesture-handler'



const TabIcon = ({
    focused,
    icon,
    title
}:{
    focused: boolean,
    icon: any,
    title: string
}) => {
    if (focused ) {
        return (
            <ImageBackground
            source={images.highlight}
            className='flex flex-row w-full flex-1 min-w-[110px] min-h-[53px] mt-4 justify-center items-center rounded-full overflow-hidden drop-shadow-lg'
            >
                {React.cloneElement(icon, { 
                    color: "#151312",
                    size: 24
                })}
                <Text className='text-secondary text-base font-semibold ml-2'>
                    {title}
                </Text>
            </ImageBackground>
        )
    } else {
        return (
            <View className='size-full justify-center items-center mt-4 rounded-full h-[50px] w-[75px]'>
                {React.cloneElement(icon, { 
                    color: "#A8B5DB",
                    size: 20
                })}
            </View>
        )
    }
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '150%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 20,
                height: 53,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#0F0D23'
            },
        }}
        >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <>
                        <TabIcon
                            focused={focused}
                            icon={
                                <Octicons 
                                    name="home"
                                />
                            }
                            title="Home"
                        />
                    </>
                )
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <>
                        <TabIcon
                            focused={focused}
                            icon={
                                <Feather 
                                    name="search"
                                />
                            }
                            title="Search"
                        />
                    </>
                )
            }}
        />
        <Tabs.Screen
            name="saved"
            options={{
                title: 'Saved',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <>
                        <TabIcon
                            focused={focused}
                            icon={
                                <Feather 
                                    name="bookmark"
                                />
                            }
                            title="Saved"
                        />
                    </>
                )
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <>
                        <TabIcon
                            focused={focused}
                            icon={
                                <Feather 
                                    name="user"
                                />
                            }
                            title="Profile"
                        />
                    </>
                )
            }}
        />
    </Tabs>
  )
}

export default _layout