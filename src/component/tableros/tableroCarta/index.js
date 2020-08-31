import React, {useState, useEffect} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Cell from '../../celdas/celdaCarta';

import {HEART_TYPE} from '../../celdas/celdaCarta';
const Board = () => {
    const [lasImagenesSonIguales, setImagenesIguales] = useState(null);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
    const [imagenSeleccionada2, setImagenSeleccionada2] = useState(null);
    const [reseat, setReseat] = useState(false);

    useEffect(() => {
        setReseat(false)
    }, [reseat])

    useEffect(() => {
        if (imagenSeleccionada && imagenSeleccionada2) {
            setTimeout(() => {
                setImagenesIguales(imagenSeleccionada === imagenSeleccionada2);
            }, 500);

            setImagenSeleccionada(null);
            setImagenSeleccionada2(null);
        }
    }, [imagenSeleccionada, imagenSeleccionada2])

    const handlePressReseat = () => {
        setReseat(true);
    }

    const onPress = (type) => {
        if (imagenSeleccionada) {
            setImagenSeleccionada2(type);
        } else {
            setImagenSeleccionada(type);
        }
    };

    return(
        <View style={styles.boxGame}>
            <View style={styles.boxTitle}>
                <Text style={styles.title} >Juego de Memoria</Text>
            </View>
            <View style={styles.boxItem}>
                <Cell type={HEART_TYPE} onPress={onPress} lasImagenesSonIguales={lasImagenesSonIguales} isReseat={reseat} />
                <Cell onPress={onPress} lasImagenesSonIguales={lasImagenesSonIguales} isReseat={reseat} />
                <Cell onPress={onPress} lasImagenesSonIguales={lasImagenesSonIguales} isReseat={reseat} />
                <Cell type={HEART_TYPE} onPress={onPress} lasImagenesSonIguales={lasImagenesSonIguales} isReseat={reseat} />
            </View>
            <Button
            title= 'reseat'
            onPress={handlePressReseat}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boxGame: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },

    boxItem: {
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'red',
    },

    boxTitle: {
        width: 200,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
    }
});

export default Board;
