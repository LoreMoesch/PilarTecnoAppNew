import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ImageBackground,
    View,
    Text,
    Dimensions,
    StyleSheet,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import { fetchComments } from '../api';
import { connect } from 'react-redux';
import { actions } from '../store';
import { Divider, Button } from 'react-native-elements';

const { height, width } = Dimensions.get('window');

const PostDetail = (props) => {

    const [comments, setcomments] = useState([]);

    const { item } = props.route.params;

    useEffect(() => {
        const { id } = item;
        fetchComments({ id }).then(res => {
            // console.log(`-----------RESPONSE: ${JSON.stringify(res[1])}`);
            setcomments(res[1]);
        });
    }, []);

    const delPost = () => {
        const { id } = item;
        props.delPost({ id }).then(res => {
            props.navigation.goBack();
        });
    }

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item }) => (
        <View style={{
            margin: 20, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 8,
            padding: 5,
        }}>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>
                    {item.name}
                </Text>
            </View>
            <View style={styles.bodycontainer}>
                <Text style={styles.text}>
                    {item.email}
                </Text>
            </View>
            <View style={styles.bodycontainer}>
                <Text style={styles.text}>
                    {item.body}
                </Text>
            </View>
            <Divider />
        </View>
    );

    return (
        <SafeAreaView>
            <ImageBackground
                style={{
                    height,
                    alignItems: 'center',
                }}
                source={require('../assets/images/fondo.jpg')}
            >
                <View style={{
                    marginTop: height / 8, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 8,
                    padding: 5,
                }}>
                    <View style={styles.titlecontainer}>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                    </View>
                    <Divider />
                    <View style={styles.bodycontainer}>
                        <Text style={styles.text}>
                            {item.body}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }} >
                    <View style={{ width: width / 3, marginHorizontal: 10 }} >
                        <Button
                            title='Edit'
                            onPress={() => props.navigation.navigate('PostEdit', { item })}
                        />
                    </View>
                    <View style={{ width: width / 3, marginHorizontal: 10 }} >
                        <Button
                            title='Delete'
                            onPress={() => delPost()}
                        />
                    </View>
                </View>
                {
                    !comments ?
                        <ActivityIndicator />
                        :
                        <View style={{ flex: 1 }}>
                            <FlatList
                                style={{ marginBottom: 50 }}
                                keyExtractor={keyExtractor}
                                data={comments}
                                renderItem={renderItem}
                            />
                        </View>
                }
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    titlecontainer: {
        padding: 10
    },
    bodycontainer: {
        padding: 10
    },
    content: {
        margin: width / 20,
        height: width / 2.5,
        width: width / 2.5,
        borderRadius: 15,
        justifyContent: 'center',
    }
});

const mapDispatchToProps = dispatch => ({
    delPost: (data) =>
        dispatch(actions.posts.delPost(data)),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)((PostDetail));




// ************************************************************************************************************************
// import React, { Component } from 'react';
// import {
//     SafeAreaView,
//     Dimensions,
//     StyleSheet,
//     Text,
//     ImageBackground,
//     TouchableOpacity,
//     View,
//     FlatList,
//     ActivityIndicator,
// } from 'react-native';
// import { Divider } from 'react-native-elements/dist/divider/Divider';
// import { actions } from '../store';
// import { connect } from 'react-redux';
// import { fetchComments } from '../api';

// const height = Dimensions.get('window').height;
// const width = Dimensions.get('window').width;
// //const BASE_URL = 'https://jsonplaceholder.typicode.com/'

// class PostDetail extends React.Component {
//     constructor(props) {
//         super(props);
//         const { item } = this.props.route.params;
//         this.state = {
//             id: item.id,
//             body: item.body,
//             comments: [],
//         };
//     }

//     componentDidMount = () => {
//         fetchComments({ id: this.state.id }).then(res => {
//             console.log('comentarios: ' + JSON.stringify(res[1]));
//             this.setState({
//                 comments: res[1],
//             });
//         });
//     };

//     keyExtractor = (item, index) => index.toString();
//     renderItem = ({ item }) => (
//         <View
//             style={{
//                 margin: 20,
//                 backgroundColor: 'rgba(0,0,0,0.2)',
//                 borderRadius: 8,
//                 padding: 5,
//             }}>
//             <View style={styles.titlecontainer}>
//                 <Text style={styles.title}>
//                     {item.email}
//                 </Text>
//                 <Divider />
//             </View>
//             <View style={styles.bodycontainer}>
//                 <Text style={styles.text}>
//                     {item.name}
//                 </Text>
//                 <Divider />
//             </View>
//             <View style={styles.bodycontainer}>
//                 <Text style={styles.text}>
//                     {item.body}
//                 </Text>
//             </View>

//         </View>
//     );

//     _delPost = () => {
//         const { item } = this.props.route.params;
//         const { id } = item;
//         ///VALIDACIONES
//         this.props.delPost({ id }).then(() => {
//             this.props.navigation.goBack();
//         });
//     };

//     render() {
//         const { item } = this.props.route.params;
//         const { comments } = this.state;

//         return (
//             <SafeAreaView
//                 style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <ImageBackground
//                     style={{ height }}
//                     source={require('../assets/images/fondo.jpg')}>
//                     <View
//                         style={{
//                             margin: 20,
//                             padding: 5,
//                             marginTop: 20,
//                         }}>
//                         <View
//                             style={{
//                                 marginTop: 50,
//                                 backgroundColor: 'rgba(0,0,0,0.5)',
//                                 borderRadius: 8,
//                             }}>
//                             <View style={styles.titlecontainer}>
//                                 <Text style={styles.title}>{item.title}</Text>
//                             </View>
//                             <Divider />
//                             <View style={styles.bodycontainer}>
//                                 <Text style={styles.text}>{item.body}</Text>
//                             </View>
//                         </View>
//                     </View>

//                     <TouchableOpacity
//                         onPress={() => this.props.navigation.navigate('PostEdit', { item })}
//                         style={[styles.button]}>
//                         <Text>Editar Post</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         onPress={() => this._delPost()}
//                         style={[styles.button]}>
//                         <Text>Borrar Post</Text>
//                     </TouchableOpacity>

//                     {!comments ? (
//                         <ActivityIndicator />
//                     ) : (
//                         <View
//                             style={{
//                                 marginTop: 5,
//                                 backgroundColor: 'rgba(0,0,0,0.5)',
//                                 borderRadius: 8,
//                                 margin: 20,
//                                 padding: 5,

//                             }}>
//                             <Text
//                                 style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
//                                 Comentarios
//                             </Text>
//                             <Divider />

//                             <FlatList
//                                 keyExtractor={this.keyExtractor}
//                                 data={comments}
//                                 renderItem={this.renderItem}
//                             />

//                         </View>
//                     )}

//                 </ImageBackground>
//             </SafeAreaView>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 14,
//         color: '#fff',
//         textAlign: 'center',
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#fff',
//         textAlign: 'center',
//     },
//     titlecontainer: {
//         padding: 10,
//     },
//     bodycontainer: {
//         padding: 10,
//     },
//     content: {
//         margin: width / 20,
//         height: width / 2.5,
//         width: width / 2.5,
//         borderRadius: 15,
//         justifyContent: 'center',
//     },
//     button: {
//         backgroundColor: 'rgba(165, 105, 189, 0.5)',
//         margin: width / 20,
//         width: width / 2,
//         marginLeft: 90,
//         borderRadius: 35,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 10,
//     },
// });
// const mapDispatchToProps = dispatch => ({
//     delPost: data => dispatch(actions.posts.delPost(data)),
// });
// const mapStateToProps = state => ({});
// export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);


//******************************************************************************************************************* */

// import React, { Component } from 'react';
// import {
//     SafeAreaView,
//     Dimensions,
//     StyleSheet,
//     Text,
//     ImageBackground,
//     TouchableOpacity,
//     View,
//     Alert
// } from 'react-native';
// import { Divider } from 'react-native-elements/dist/divider/Divider';
// import { actions } from '../store'
// import { connect } from 'react-redux'

// const height = Dimensions.get('window').height
// const width = Dimensions.get('window').width

// class PostDetail extends React.Component {
//     constructor(props) {
//         super(props);

//     }
//     _delPost = () => {
//         const { item } = this.props.route.params;
//         const { id } = item;
//         ///VALIDACIONES
//         this.props.delPost({ id }).then(() => {
//             this.props.navigation.goBack()
//         })
//     }


//     render() {
//         const { item } = this.props.route.params;
//         return (
//             <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <ImageBackground
//                     style={{ height }}
//                     source={require('../assets/images/fondo.jpg')}
//                 >
//                     <View style={{
//                         margin: 20,
//                         padding: 5,
//                         marginTop: 20
//                     }}>
//                         <View style={{ marginTop: 50, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 8 }}>
//                             <View style={styles.titlecontainer}>
//                                 <Text style={styles.title}>
//                                     {item.title}
//                                 </Text>
//                             </View>
//                             <Divider />
//                             <View style={styles.bodycontainer}>
//                                 <Text style={styles.text}>
//                                     {item.body}
//                                 </Text>
//                             </View>
//                         </View>
//                     </View>
//                     <TouchableOpacity
//                         onPress={() => this.props.navigation.navigate('PostEdit', { item })}
//                         style={[styles.button,]}
//                     >
//                         <Text>Edit Post</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         onPress={() => this._delPost()}
//                         style={[styles.button,]}
//                     >
//                         <Text>Delete Post</Text>
//                     </TouchableOpacity>

//                 </ImageBackground>
//             </SafeAreaView>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 14,
//         color: '#fff',
//         textAlign: 'center'
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#fff',
//         textAlign: 'center'
//     },
//     titlecontainer: {
//         padding: 10,
//     },
//     bodycontainer: {
//         padding: 10,
//     },
//     content: {
//         margin: width / 20,
//         height: width / 2.5,
//         width: width / 2.5,
//         borderRadius: 15,
//         justifyContent: 'center',
//     },
//     button: {
//         backgroundColor: 'rgba(165, 105, 189, 0.5)',
//         margin: width / 20,
//         width: width / 2,
//         marginLeft: 90,
//         borderRadius: 35,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 10,
//     },
// })
// const mapDispatchToProps = dispatch => ({
//     delPost: (data) =>
//         dispatch(actions.posts.delPost(data)),
// })
// const mapStateToProps = state => ({

// })
// export default connect(mapStateToProps, mapDispatchToProps)((PostDetail))