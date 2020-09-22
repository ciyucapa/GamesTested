import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {Assets} from '../../../resources';

export const MOON_TYPE = 'Cell/MOON_TYPE';
export const HEART_TYPE = 'Cell/HEART_TYPE';

const Cell = (props) => {

    const [mostrarPermanente, setMostrarPermanente] = useState(false);
    const [mostrarCarta, setMostrarCarta] = useState(false);

    const {
        type,
        isReseat,
        onPress,
        lasImagenesSonIguales,
    } = props

    useEffect(() => {
       if (lasImagenesSonIguales) {
           setMostrarPermanente(true);
       } else {
           if (!mostrarPermanente) {

               setMostrarCarta(false);
           }
       }
    }, [lasImagenesSonIguales]);


    useEffect(() => {
      reseatValues();
    }, [isReseat])

    const handlePress = () => {
        if (!mostrarCarta) {
            setMostrarCarta(true);
            onPress(type);
        }
    };

    const reseatValues = () => {
       setMostrarCarta(false)
    }

  return (
        <TouchableOpacity onPress={handlePress} style={styles.boxTouch}>
            { mostrarCarta && (
                <Image source={type === MOON_TYPE ? Assets.images.moon : Assets.images.heart} style={[mostrarPermanente ? styles.boxImageCambia : styles.boxImage]} />)
            }
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

    boxTouch: {
        width: 70,
        height: 70,
        backgroundColor: '#008080',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },

        boxImage: {
            width: 50,
            height: 50,
            resizeMode: 'contain',
        },
        boxImageCambia: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        backgroundColor: 'green'
    },
});

Cell.propTypes = {
    type: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    isReseat: PropTypes.bool.isRequired,
    lasImagenesSonIguales: PropTypes.bool,
};

Cell.defaultProps = {
    type: MOON_TYPE,
    lasImagenesSonIguales: false,
};

export default Cell
