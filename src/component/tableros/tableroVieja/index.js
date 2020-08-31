import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';
import Celda from '../../celdas/celdaVieja'
import {Assets} from '../../../resources'

const BoardVieja = () => {

    const [playerOne, setPlayer] = useState(true);
    const [reseat, setReseat] = useState(false);
    const [posicion, setPosicion] = useState([
        [1, 2],
        [1, 2]
    ])

    useEffect(() => {
        setReseat(false)
    }, [reseat])

    useEffect(() => {
        if(){

        }
    }, [posicion])

    const ultimoToken = (fila, columna) => {
        setPlayer(!playerOne)
        setPosicion(fila, columna)
    }

    const handleReseat = () => {
        setReseat(true)
    }

    return(
        <View styles={styles.boxBoard}>
            <Text styles={styles.title}>
                    Welcome Play!
                <Image source={Assets.images.play} styles={styles.imageBoxBoard} />
            </Text>
            <View styles={styles.oneBox}>
                <Celda onPress={ultimoToken} esElUltimoToken={playerOne} isReseat={reseat} fila={0} columna={0} />
                <Celda onPress={ultimoToken} esElUltimoToken={playerOne} isReseat={reseat} fila={0} columna={0} />
                <Celda onPress={ultimoToken} esElUltimoToken={playerOne} isReseat={reseat} fila={0} columna={0} />
            </View>
            <Button onPress={handleReseat} title='Reseat' color="#f194ff"/>
        </View>
    );
};

const styles = StyleSheet.create({
    boxBoard: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },

    title: {
        textAlign: 'center',
        backgroundColor: 'red',
    },

    oneBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    imageBoxBoard: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
    },


});

export default BoardVieja;
