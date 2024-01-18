import { StyleSheet, Text, Touchable, Dimensions, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconPesananAktif } from '../../assets'
import { WARNA_ABU_ABU, WARNA_UTAMA, WARNA_WARNING } from '../../utils/constant'

const PesananAkatif = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPesananAktif />
      <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PesananAkatif; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 7,
    marginVertical: windowHeight*0.02,
    alignItems: 'center'
  },
  text: {
    marginLeft: windowHeight*0.02
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold',

  },
  status: (status) => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-light',
    color: status === 'Sudah Selesai' ? WARNA_UTAMA : status === 'Masih Dicuci' ? WARNA_WARNING : WARNA_ABU_ABU,
  })
})