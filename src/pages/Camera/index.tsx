import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Image, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from "@expo/vector-icons";

const Cam = () => {
    const camRef = useRef<any>(null);
    const [hasPermission, setHasPermission] = useState<boolean>();
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [picture, setPicture] = useState<any>();
    const [open, setOpen] = useState<boolean>();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <View><Text>No access to camera</Text></View>;
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setPicture(data.uri);
            setOpen(true);
        }
    }

    function changeCameraType() {
        setType(type === Camera.Constants.Type.front ? Camera.Constants.Type.back : Camera.Constants.Type.front);
    }

    function closePictureView() {
        setOpen(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camRef}>
                <View style={styles.cameraContent}>
                    <TouchableOpacity style={styles.flipButton} onPress={changeCameraType}>
                        <Ionicons style={styles.flipIcon} name="ios-reverse-camera" size={36} />
                    </TouchableOpacity>
                </View>
            </Camera>

            <View style={styles.center}>
                <TouchableOpacity style={styles.button} onPress={takePicture}>
                    <Ionicons name="logo-ionic" size={46} />
                </TouchableOpacity>
            </View>
            {picture &&
                <Modal animationType="slide" transparent={false} visible={open}>
                    <View style={styles.imageView}>
                        <Image style={styles.image} source={{ uri: picture }}></Image>
                        <View style={styles.center}>
                            <TouchableOpacity style={styles.button} onPress={closePictureView}>
                                <Ionicons name="md-close" size={46} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>}
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    center: {
        alignItems: 'center'
    },
    camera: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20
    },
    cameraContent: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    flipButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    flipIcon: {
        marginBottom: 10,
        color: 'white'
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 50,
        height: 70,
        width: 70,
        bottom: 35,
        position: 'absolute',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Cam;