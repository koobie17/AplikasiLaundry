import { Dimensions, ImageBackground, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Logo, imageHeader } from '../../assets'
import { ButtonIcon, PesananAkatif, Saldo } from '../../component/'
import { WARNA_ABU_ABU } from '../../utils/constant'

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator>
      <ImageBackground source={imageHeader} style={styles.header} >
        <Image source={Logo} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang, </Text>
          <Text style={styles.username}>MR.MARIO</Text>
        </View>
      </ImageBackground>
      <Saldo />
      <View style={styles.layanan}>
        <Text style={styles.label}>Layanan Kami</Text>
        <View style={styles.iconlayanan}>
          <ButtonIcon title="Kiloan" type="layanan"/>
          <ButtonIcon title="Satuan" type="layanan"/>
          <ButtonIcon title="Vip" type="layanan"/>
          <ButtonIcon title="Karpet" type="layanan"/>
          <ButtonIcon title="Setrika" type="layanan"/>
          <ButtonIcon title="Ekspress" type="layanan"/>
        </View>
      </View>
      <View style={styles.pesananAkatif}>
      <Text style={styles.label}>Pesanan Aktif</Text>
      <PesananAkatif title="Pesanan No. 0002142" status="Sudah Selesai"/>
      <PesananAkatif title="Pesanan No. 0002142" status="Masih Dicuci"/>
      <PesananAkatif title="Pesanan No. 0002142" status="Sudah Selesai"/>
      <PesananAkatif title="Pesanan No. 0002142" status="Sudah Selesai"/>
      <PesananAkatif title="Pesanan No. 0002142" status="Sudah Selesai"/>
      </View>
      </ScrollView>    
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: "100%",
    height: windowHeight * 0.3,
    paddingHorizontal: 10,
    paddingTop: 10

  },
  logo: {
    width: windowWidth * 0.27,
    height: windowHeight * 0.06
  },
  hello: {
    marginTop: windowHeight * 0.030
  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Reguler'
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold'
  },
  layanan: {
    paddingHorizontal: 30,
    paddingTop: 15
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  iconlayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  pesananAkatif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }

});