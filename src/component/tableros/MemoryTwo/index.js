import React, {useState, useEffect} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';

import {Assets} from '../../../resources';

const MOON = 'MOON';
const START = 'START';
const HEART = 'HEART';
const ZERO = 'ZERO';
const PLAY = 'PLAY';
const SUN = 'SUN';
const ZERO_NEW = 'ZERO_NEW';
const EQUIX = 'EQUIX';

const MemoryTwo = () => {
    const [table, setTable] = useState([
        [
            {
                isVisible: false,
                image: Assets.images.zero,
                name: ZERO,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.equixNormal,
                name: EQUIX,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.moon,
                name: MOON,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.ceroNuevo,
                name: ZERO_NEW,
                isGame: false,
            },
        ],
        [
            {
                isVisible: false,
                image: Assets.images.play,
                name: PLAY,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.star,
                name: START,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.sol,
                name: SUN,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.equixNormal,
                name: EQUIX,
                isGame: false,
            },
        ],
        [
            {
                isVisible: false,
                image: Assets.images.ceroNuevo,
                name: ZERO_NEW,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.moon,
                name: MOON,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.heart,
                name: HEART,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.sol,
                name: SUN,
                isGame: false,
            },
        ],
        [
            {
                isVisible: false,
                image: Assets.images.zero,
                name: ZERO,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.star,
                name: START,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.heart,
                name: HEART,
                isGame: false,
            },
            {
                isVisible: false,
                image: Assets.images.play,
                name: PLAY,
                isGame: false,
            },
        ],
    ]);

    const [step, setStep] = useState(1);
    const [isSearch, setSearch] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (isSearch) {
                const cartas = [];

                table.map((fila) => {
                    fila.map((carta) => {
                        if (carta.isGame) {
                            cartas.push(carta);
                        }
                    });
                });

                const [carta1, carta2] = cartas;
                const newTable = table.map((fila) => {
                    fila.map((carta) => {
                        if (carta.isGame) {
                            carta.isVisible = (carta1.name === carta2.name);
                            carta.isGame = false;
                        }
                        return carta;
                    });

                    return fila;
                });

                setTable([...newTable]);
                setSearch(false);
            }
        }, 500)
    }, [isSearch]);

    const onPress = (i, j) => {
        if (table[i][j].isVisible === false) {
            table[i][j].isVisible = true;
            table[i][j].isGame = true;
            setTable([...table]);

            if (step === 2) {
                setSearch(true);
            }

            setStep(step === 1 ? 2 : 1);
        }
    };

    const Winner = () => {
        let cont = 0;

        table.map((fila) => {
            fila.map((carta) => {
                if (carta.isVisible === true && carta.isGame === false) {
                    cont++;
                }
            });
        });

        return (
            <Text>{cont === 16 ? 'Felicidades GANASTE!' : 'Falta poco, vamos!'}</Text>
        );
    };

    return (
        <View>
            <Text>Paso N. {step}</Text>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                {table.map((fila, i) => {
                    const filaImages = fila.map((carta, j) => {
                        return (
                            <TouchableOpacity
                                key={'carta'+j}
                                style={{width: 70, height: 70}}
                                onPress={() => onPress(i, j)}
                            >
                                <Image
                                    style={{width: 70, height: 70, resizeMode: 'contain'}}
                                    source={carta.isVisible ? carta.image : Assets.images.equis}
                                />
                            </TouchableOpacity>
                        );
                    });

                    return (
                        <View key={'fila'+i} style={{display: 'flex', flexDirection: 'row'}}>
                            {filaImages}
                        </View>
                    );
                })}
            </View>
            <Winner />
        </View>
    );
};

export default MemoryTwo;
