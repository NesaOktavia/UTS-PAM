import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
export default function DetailsScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', top:20}}>Daftar Pemesanan</Text>
            </View>
            <View style={styles.daftar}>
                <View style={styles.tujuan}>
                    <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', top:20}}>Bakauheni</Text>
                    <Image style={styles.logo1} source={require('../../assets/arrow.png')} />
                    <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', top:20, left: 20,}}>Merak</Text>
                </View>
                <View style={styles.jadwal}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', top:25}}>Jadwal Masuk Pelabuhan</Text>
                    <Text style={{ fontSize: 15, color: 'black', top:25}}>Kamis, 17 Maret 2022</Text>
                    <Text style={{ fontSize: 15, color: 'black', top:25}}>15:30 WIB</Text>
                </View>
                <View style={styles.layanan}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', top:30}}>Layanan</Text>
                    <Text style={{ fontSize: 15, color: 'black', top:30}}>Express</Text>
                    <Image style={styles.logo2} source={require('../../assets/substract.png')} />
                </View>
                <View style={styles.jumlah}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', top:50}}>Dewasa x 1</Text>
                    <Text style={{ fontSize: 15, color: 'black', top:50, left:90,}}>Rp. 65.000,00</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        position: 'absolute',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '13%',
    },
    daftar: {
        position: 'absolute',
        left: 40,
        top: 150,
        width: '80%',
        height: '220%',
        backgroundColor: '#E6E6E6',
    },
    logo1: {
        left:10,
        top: 19,
        width: 30, 
        height: 30,
    },
    logo2: {
        left:0,
        top: 40,
        width: 280, 
        height: 2,
    },
    tujuan: {
        left: 20,
        flexDirection: 'row',
    },
    jadwal: {
        left: 20,
    },
    layanan: {
        left: 20,
    },
    jumlah: {
        left: 20,
        flexDirection: 'row',
    },
}); 