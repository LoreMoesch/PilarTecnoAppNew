import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { actions } from '../store';

const { height, width } = Dimensions.get('window');

const PostEdit = (props) => {

    const { item } = props.route.params;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (item) {
            setTitle(item.title);
            setBody(item.body);
        }
    }, [item]);

    const update = () => {
        ///VALIDATIONS
        const { id } = item;
        props.updatePost({ title, body, id }).then(() => {
            props.navigation.popToTop();
        });
    }
    return (
        <SafeAreaView>
            <ImageBackground
                style={styles.content}
                source={require('../assets/images/fondo.jpg')}
            >
                <Input
                    placeholder='Title'
                    inputContainerStyle={{
                        width: width * 0.8, alignItems: 'flex-start',
                        alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                    }}
                    inputStyle={{ color: 'white', marginLeft: 15 }}
                    placeholderTextColor='#ccc'
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                />
                <Input
                    placeholder='Description'
                    inputContainerStyle={{
                        width: width * 0.8, alignItems: 'flex-start',
                        alignSelf: 'center', height: height * 0.4, backgroundColor: 'rgba(0,0,0,0.5)',
                        pading: 15
                    }}
                    inputStyle={{ color: 'white', marginLeft: 15 }}
                    placeholderTextColor='#ccc'
                    value={body}
                    onChangeText={(value) => setBody(value)}
                    multiline
                    numberOfLines={2}
                />
                <Button title='Update' onPress={() => update()}
                    style={{ width: width * 0.8 }} />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        height,
        width,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapDispatchToProps = dispatch => ({
    updatePost: (data) =>
        dispatch(actions.posts.updatePost(data)),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)((PostEdit));
// *****************************************************************************************************


// import React, { Component } from 'react';
// import {
//     SafeAreaView,
//     Dimensions,
//     StyleSheet,
//     ImageBackground,
//     TouchableOpacity,
//     Text
// } from 'react-native';
// import { Input, Button } from 'react-native-elements'
// import { ListItem } from 'react-native-elements/dist/list/ListItem';
// import { connect } from 'react-redux'
// import { actions } from '../store'
// const height = Dimensions.get('window').height
// const width = Dimensions.get('window').width


// class PostEdit extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             body: ''
//         }
//     }

//     componentDidMount = () => {
//         const { item } = this.props.route.params;
//         if ({ item }) {
//             this.setState({ title: item.title, body: item.body })
//         }

//     }

//     _updatePost = () => {
//         const { title, body } = this.state;
//         const { item } = this.props.route.params;
//         const { id } = item;
//         ///VALIDACIONES
//         this.props.updatePost({ title, body, id }).then(() => {

//             this.props.navigation.popToTop()
//         })
//     }
//     render() {

//         return (
//             <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <ImageBackground
//                     style={[styles.content, { height, width }]}
//                     source={require('../assets/images/fondo.jpg')}
//                 >
//                     <Input

//                         inputContainerStyle={{
//                             width: width * 0.8, alignItems: 'flex-start',
//                             alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
//                         }}
//                         inputStyle={{ color: 'white', marginLeft: 15 }}
//                         placeholderTextColor='#ccc'
//                         value={this.state.title}
//                         onChangeText={(value) => this.setState({ title: value })}
//                     />
//                     <Input

//                         inputContainerStyle={{
//                             width: width * 0.8, alignItems: 'flex-start',
//                             alignSelf: 'center', height: height * 0.4, backgroundColor: 'rgba(0,0,0,0.5)',
//                             pading: 15
//                         }}
//                         inputStyle={{ color: 'white', marginLeft: 15 }}
//                         placeholderTextColor='#ccc'
//                         value={this.state.body}
//                         onChangeText={(value) => this.setState({ body: value })}
//                         multiline
//                         numberOfLines={2}
//                     />
//                     <TouchableOpacity
//                         onPress={() => this._updatePost()}
//                         style={[
//                             styles.button,
//                         ]}
//                     >
//                         <Text>Modify Post</Text>
//                     </TouchableOpacity>

//                 </ImageBackground>
//                 {/* </View> */}
//             </SafeAreaView>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     text: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         // color:'#fff',
//         textAlign: 'center'
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
//     updatePost: (data) =>
//         dispatch(actions.posts.updatePost(data)),
// })
// const mapStateToProps = state => ({

// })
// export default connect(mapStateToProps, mapDispatchToProps)((PostEdit))