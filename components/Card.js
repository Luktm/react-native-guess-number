import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        // it can overwrite
        <View style={{ ...styles.card, ...props.style }}>
            {/* 
                children is the components wrap surrounded by Card component 
                basically, it just like <Card>anything is is props children</Card>
            */}
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    }
})

export default Card;