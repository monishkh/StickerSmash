import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
                <Image source={{ uri: selectedImage }} style={styles.image} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={placeholderImageSource} style={styles.image} />
        </View>
    );
};

export default ImageViewer;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    myButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.5)', // Optional: add a background color for better visibility
        borderRadius: 15,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
