import React from 'react';
import { StyleSheet } from 'react-native';
//import { BlurView } from 'expo-blur';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';
import PostEdit from '../screens/PostEdit';
import PostCreate from '../screens/PostCreate';

const PostsStack = createStackNavigator();

export const PostsStackScreen = () => {
    return (
        <PostsStack.Navigator>
            <PostsStack.Screen
                name="Posts"
                component={Posts}
                options={{
                    title: 'Posts',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },

                }}
            />
            <PostsStack.Screen
                name="PostDetail"
                component={PostDetail}
                options={{
                    title: 'Detail',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                }} />
            <PostsStack.Screen
                name="PostEdit"
                component={PostEdit}
                options={{
                    title: 'Edit',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                }} />
            <PostsStack.Screen
                name="PostCreate"
                component={PostCreate}
                options={{
                    title: 'Add Post',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                }} />
        </PostsStack.Navigator>
    )
}
//         <PostsStack.Navigator>
//             <PostsStack.Screen
//                 name="Posts"
//                 component={Posts}
//                 options={{
//                     title: 'Posts',
//                     headerTintColor: 'rgb(118, 177, 195)',
//                     headerTitleStyle: {
//                         fontWeight: 'bold',
//                     },
//                     headerTransparent: true,
//                     headerBackground: () =>
//                         <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
//                 }}
//             />
//             <PostsStack.Screen
//                 name="PostDetail"
//                 component={PostDetail}
//                 options={{
//                     title: 'Post Detail',
//                     headerTintColor: 'rgb(118, 177, 195)',
//                     headerTitleStyle: {
//                         fontWeight: 'bold',
//                     },
//                     headerTransparent: true,
//                     headerBackground: () =>
//                         <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
//                 }}
//             />
//             <PostsStack.Screen
//                 name="PostEdit"
//                 component={PostEdit}
//                 options={{
//                     title: 'Post Edit',
//                     headerTintColor: 'rgb(118, 177, 195)',
//                     headerTitleStyle: {
//                         fontWeight: 'bold',
//                     },
//                     headerTransparent: true,
//                     headerBackground: () =>
//                         <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
//                 }}
//             />
//             <PostsStack.Screen
//                 name="PostCreate"
//                 component={PostCreate}
//                 options={{
//                     title: 'Post Create',
//                     headerTintColor: 'rgb(118, 177, 195)',
//                     headerTitleStyle: {
//                         fontWeight: 'bold',
//                     },
//                     headerTransparent: true,
//                     headerBackground: () =>
//                         <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
//                 }}
//             />
//         </PostsStack.Navigator>
//     )
// }





// import React, { Component } from 'react';
// import Posts from '../screens/Posts';
// import PostDetail from '../screens/PostDetail';
// import PostEdit from '../screens/PostEdit';
// import PostCreate from '../screens/PostCreate';
// import { createStackNavigator } from '@react-navigation/stack';

// const PostStack = createStackNavigator();

// export const PostsStackScreen = () => {
//     return (
