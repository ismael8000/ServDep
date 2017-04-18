import React, {Component} from 'react';
import { View, ListView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ActionBar from './ActionBar';
import ServidorListItem from './ServidorListItem';
import * as servidorService from '../services/servidor';

class ServidorDependentes extends Component {
    constructor(props) {
        super(props);
        this.state = { nom_completo_pessoa: "teste" };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.mediumText, styles.lightText]}>Servidor</Text>
                    <Text style={styles.bigText}>{this.state.nom_completo_pessoa}</Text>                                                                                          
                </View>
            </View>
        );             
    }
}

export default ServidorDependentes;

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#FAFAFF',
        paddingBottom: 4,
        borderBottomColor: '#F2F2F7',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    manager: {
        paddingBottom: 10,
        alignItems: 'center'
    },
    picture: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    smallPicture: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    mediumText: {
        fontSize: 16,
    },
    bigText: {
        fontSize: 20
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#AAAAAA',
    },
    list: {
        flex: 1,
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lightText: {
        color: '#C7C7CC'
    }
});
