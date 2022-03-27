import * as React from 'react';
import { useState } from 'react';
import Jadwal from './Jadwal';
import { Alert, SafeAreaView, Image, StyleSheet, View, Text, Button} from 'react-native';
import Select from "react-select";
import ReactDom from 'react-dom';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-datepicker';

export default function HomeScreen({ navigation }) {
    const Jadwal = require("./Jadwal.json");
    const Pesanan = require("./Pesanan.json");
    const Kelas = require("./Kelas.json");
    const Usia = require("./Usia.json");
    const Jumlah = require("./Jumlah.json");
    const Jam = require("./Jam.json");
    const handlePress = () => false;
    const [date, setDate] = useState('27-03-2022');
    const [shouldShow, setShouldShow] = useState(true);
    const twoOptionAlertHandler = () => {
        //function to make two option alert
        Alert.alert(
          'Selamat!',
          'Anda Berhasil Memesan Tiket',
          [
            { text: 'Ok', onPress: () => console.log('Yes Pressed') },
          ],
          { cancelable: false }
        );
      };
    return (
        <View style={styles.container}>
            <View style={styles.HomeContainer}>
                <View style={styles.NameApp}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'blue'}}>Kapalzy</Text>
                </View>
                <View style={styles.PelabuhanAwal}>
                    <Text style={{ fontSize: 20, color: 'grey'}}>Pelabuhan Awal</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={styles.logo1} source={require('../../assets/kapal.png')} />
                        <SelectDropdown 
                            data={Jadwal}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </View>
                </View>
                <View style={styles.PelabuhanTujuan}>
                    <Text style={{ fontSize: 20, color: 'grey'}}>Pelabuhan Tujuan</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={styles.logo1} source={require('../../assets/kapal.png')} />
                        <SelectDropdown 
                            data={Jadwal}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </View>
                </View>
                <View style={styles.KelasLayanan}>
                    <Text style={{ fontSize: 20, color: 'grey'}}>Kelas Layanan</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={styles.logo1} source={require('../../assets/Kelas.png')} />
                        <SelectDropdown 
                            data={Kelas}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </View>
                </View>
                <View style={styles.TanggalMasuk}>
                    <Text style={{ fontSize: 20, color: 'grey'}}>Tanggal Masuk Pelabuhan</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <DatePicker
                            style={styles.datePickerStyle}
                            date={date} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate="01-03-2022"
                            maxDate="30-12-2050"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                position: 'absolute',
                                left: -2,
                                top: 4,
                                width:50,
                                height:50,
                                marginLeft: 0,
                                },
                                dateInput: {
                                marginLeft: 0,
                                top: 10,
                                left: 52,
                                backgroundColor: "#E6E6E6",
                                },
                            }}
                            onDateChange={(date) => {
                                setDate(date);
                            }}
                            />
                    </View>
                </View>
                <View style={styles.JamMasuk}>
                    <Text style={{ fontSize: 20, color: 'grey'}}>Jam Masuk Pelabuhan</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={styles.logo1} source={require('../../assets/clock.png')} />
                        <SelectDropdown
                            autosize={true}
                            data={Jam}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </View>
                </View>
                <View style={styles.Jumlah}>
                    <View>
                        <Text style={{ fontSize: 20, color: 'grey'}}>Usia</Text>
                        <SelectDropdown 
                            autosize={true}
                            data={Usia}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                        <Text style={{ fontSize: 20, color: 'grey'}}>Jumlah</Text>
                        <SelectDropdown 
                            data={Jumlah}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </View>
                </View>
                <View style={styles.Pesan}>
                    <Button
                        color="orange"
                        title="Buat Tiket"
                        onPress={twoOptionAlertHandler}
                    />
                </View>
            </View>
        </View>
    );}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HomeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '80%',
        marginTop: '10%',
        marginBottom: '5%',
        elevation: 5,
        borderRadius: 5,
    },
    NameApp: {
        position: 'absolute',
        top: 30,
    },
    PelabuhanAwal: {
        position: 'absolute',
        left: 25,
        top: 100,
    },
    PelabuhanTujuan: {
        position: 'absolute',
        left: 25,
        top: 190,
    },
    logo1: {
        left:-2,
        width: 50, 
        height: 50,
    },
    KelasLayanan: {
        position: 'absolute',
        left: 25,
        top: 280,
    },
    TanggalMasuk: {
        position: 'absolute',
        left: 25,
        top: 370,
    },
    JamMasuk: {
        position: 'absolute',
        left: 25,
        top: 460,
    },
    Jumlah: {
        position: 'absolute',
        left: 25,
        top: 550,
    },
    usia: {
        width: '10%',
        height: '60%',
    },
    Pesan: {
        width: '50%',
        height: '60%',
        borderRadius: 7,
        bottom: -410,
        position: 'absolute',
    },
    Informasi: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
});    