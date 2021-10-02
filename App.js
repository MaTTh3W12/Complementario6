import React, { useState } from 'react'; 
import {View, StyleSheet,Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native'; 
 
const App = () =>{ 
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  const [modalpresi, setModalpresi] = useState(false);
  const [modaldoble, setModaldoble] = useState(false);
  return( 
    <>
      <ScrollView>
        <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() =>{
          alert('Modal has been closed.');
        }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Izalco Hotel & Beach Resort</Text>
              <Text>El Mejor Hotel para visitar en el Salvador</Text>
              <Button title="Cerrar" onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}></Button>
            </View>
          </View>
        </Modal>
        <Modal transparent={true} animationType="slide" visible={modalpresi} onRequestClose={() =>{
          alert('Modal has been closed.');
        }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>HABITACIÓN MATRIMONIAL</Text>
              <Text>Una de las mejores habitaciones para parejas</Text>
              <Button title="Cerrar" onPress={()=>{setModalpresi(!modalpresi)}}></Button>
            </View>
          </View>
        </Modal>
        <Modal transparent={true} animationType="slide" visible={modaldoble} onRequestClose={() =>{
          alert('Modal has been closed.');
        }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>HABITACIÓN MATRIMONIAL DELUXE</Text>
              <Text>La mejor opcion para disfrutar en familia</Text>
              <Button title="Cerrar" onPress={()=>{setModaldoble(!modaldoble)}}></Button>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection:'row'}} > 
          <Image  style={styles.banner} source={require('./src/img/portada.jpg')} /> 
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Izalco Hotel & Beach Resort</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight 
                onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}
              >
                <Image style={styles.ciudad} source={require('./src/img/portada1.jpg')}/>
              </TouchableHighlight>
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/lobby.jpg')}/>
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/restaurante.jpg')}/>
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/piscina.jpg')}/>
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/habitaciones.jpg')}/>
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Tipos de habitaciones</Text>
          <View>
            <View>
              <Text style={styles.subtitulo}>HABITACIÓN MATRIMONIAL</Text>
              <ScrollView horizontal>
                  <View>
                    <TouchableHighlight 
                      onPress={()=>{setModalpresi(!modalpresi)}}
                    >
                      <Image style={styles.ciudad} source={require('./src/img/presi1.jpg')}/>
                    </TouchableHighlight>
                  </View>
                  <View>
                    <Image style={styles.ciudad} source={require('./src/img/presi2.jpg')}/>
                  </View>
                  <View>
                    <Image style={styles.ciudad} source={require('./src/img/presi3.jpg')}/>
                  </View>
                
              </ScrollView>
            </View>
            <View>
              <Text style={styles.subtitulo}>HABITACIÓN MATRIMONIAL DELUXE</Text>
              <ScrollView horizontal>
                  <View>
                    <TouchableHighlight 
                      onPress={()=>{setModaldoble(!modaldoble)}}
                    >
                      <Image style={styles.ciudad} source={require('./src/img/doble1.jpg')}/>
                    </TouchableHighlight>
                  </View>
                  <View>
                    <Image style={styles.ciudad} source={require('./src/img/doble2.jpg')}/>
                  </View>
                  <View>
                    <Image style={styles.ciudad} source={require('./src/img/doble3.jpg')}/>
                  </View>
                
              </ScrollView>
            </View>
          </View>

          <Text style={styles.titulo}>Servicios del Hotel</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Text style={styles.subtitulo}>Piscina</Text>
              <Image style={styles.mejores} source={require('./src/img/piscina.jpg')}></Image>
            </View>
            <View style={styles.listaItem}>
            <Text style={styles.subtitulo}>Bar</Text>
              <Image style={styles.mejores} source={require('./src/img/bar.jpg')}></Image>
            </View>
            <View style={styles.listaItem}>
            <Text style={styles.subtitulo}>Spa</Text>
              <Image style={styles.mejores} source={require('./src/img/spa.jpg')}></Image>
            </View>
            <View style={styles.listaItem}>
            <Text style={styles.subtitulo}>Salon de Eventos</Text>
              <Image style={styles.mejores} source={require('./src/img/event.jpg')}></Image>
            </View>
          </View>
          <Text style={styles.titulo}>Lugares aledaños</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Text style={styles.subtitulo}>Playa Costa del Sol</Text>
              <Image style={styles.mejores} source={require('./src/img/park.jpg')}></Image>
            </View>
            <View style={styles.listaItem}>
              <Text style={styles.subtitulo}>Conoce 3 Islas y Manglares</Text>
              <Image style={styles.mejores} source={require('./src/img/multi.jpg')}></Image>
            </View>
          </View>
        </View>
      </ScrollView> 
     
    </> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  banner:{ 
    height:250, 
    flex:1 
  },
  titulo:{
    fontWeight: 'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    marginHorizontal:10,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10
  },
  mejores:{
    width: '100%',
    height:200,
    marginVertical:5
  },
  listaItem:{
    flexBasis: '49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between'
  },
  vistaModal:{
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal:{
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo:{
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
}); 
 
export default App; 