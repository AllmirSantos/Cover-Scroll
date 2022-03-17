import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, View,StatusBar, Text, TouchableOpacity } from 'react-native'

export default function CoverScroll() {
    const [viewHeight, setHeight] = useState(null)
    return (
        <View style={styles.container} onLayout={e => setHeight(e.nativeEvent.layout.height)}>
           <StatusBar
                backgroundColor="#3a0164" />
           
            {viewHeight && (
                <FlatList
                style={styles.containerFlatList}
                    data={data}
                    pagingEnabled
                    keyExtractor={(item) => item}
                    decelerationRate='fast'
                    renderItem={({ item }) => (
                        <View style={[styles.item, { height: viewHeight }]}>
                            <Image style={styles.img} source={{ uri: item }} />
                        </View>
                    )}
                />
            )}
            <View style={styles.Header}>
                <Text  style={styles.TextHeader}>Cover Scroll</Text>
            </View>
            <View style={styles.BoxInfor}>
                         <Text style={styles.BoxInforNome}>Feito por Almir Stark  </Text>
                   
                </View>
                
                <TouchableOpacity style={styles.BoxInforGit}>
            <Text style={styles.BtnText}>Git </Text>
            

                         </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerFlatList:{
top:65,
    },
    item: {
        backgroundColor: '#444'
    },
    img: {
        height: '100%',
        width: '100%'
    },
    Header:{
        backgroundColor: "#4B0082",
        display: "flex",
        paddingLeft: 20,
        paddingTop: 20,
        top: 0,
        width: "100%",
        elevation: 3,
        position: "absolute",
        paddingBottom: 20,
        textAlignVertical: "center"
    },
    TextHeader:{
        color:"#fff",
        fontSize: 20,
    },
    BoxInfor:{
        backgroundColor: "#000",
        height: 30,
        elevation: 3,
        position: "absolute",
        bottom:-5,
        alignItems: 'center',
        display: 'flex',
        width: "100%",
        textAlign: 'center',
        
        elevation: 1,
    },
    BoxInforNome:{
        color: "#fff",
        top: 5,
    },
    BoxInforGit:{
        backgroundColor:"#4B0082",
        display: "flex",
        alignItems: "center",
        paddingVertical: 10,
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 5,
        right: 5,
        borderRadius: 50,
        elevation: 10,
        shadowOffset:{
            width:2,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    BtnText:{
        color: "#fff",
        fontSize: 22,
        top: 4,
    }
})

const data = [
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/fb/Iron_Man_Armor_-_Mark_I.png/revision/latest?cb=20181116150929',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0d/Iron_Man_Armor_-_Mark_II.png/revision/latest?cb=20170728191151',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/47/Iron_Man_Armor_-_Mark_III.png/revision/latest?cb=20170424185316',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/6a/Iron_Man_Armor_-_Mark_IV.png/revision/latest?cb=20180330035146',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b3/Iron_Man_Armor_-_Mark_V.png/revision/latest?cb=20170424185355',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4c/Hot_Toys_IM_MK_6_Transparent.png/revision/latest?cb=20170802024240',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/71/Iron_Man_Armor_-_Mark_VII.png/revision/latest?cb=20181207085104',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Iron_Man_Armor_-_Mark_VIII.jpg/revision/latest?cb=20181207090707',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/1a/Iron_Man_Armor_-_Mark_IX.png/revision/latest?cb=20170801154216',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/74/Iron_Man_Armor_-_Mark_XI.jpg/revision/latest/scale-to-width-down/1000?cb=20181207091511',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/e4/Iron_Man_Armor_-_Mark_XII.jpg/revision/latest?cb=20181207195940',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/04/Iron_Man_Armor_-_Mark_XIII.jpg/revision/latest/scale-to-width-down/1000?cb=20181207202039',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/3e/Iron_Man_Armor_-_Mark_XIV.jpg/revision/latest?cb=20181207202227',
    'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/a/aa/Iron_Man_Armor_-_Mark_XV.png/revision/latest?cb=20170424185621',
]