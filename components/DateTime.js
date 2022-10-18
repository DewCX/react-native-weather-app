import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const WeatherItem = ({title, value, unit}) => {

    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemValue}>{value}{unit}</Text>
        </View>
    )
}


const DateTime = () => {

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.heading}>12:30am</Text>
                </View>
                <View>
                    <Text style={styles.subHeading}>Monday,June</Text>
                </View>
                <View style={styles.weatherItemContainer}>
                    <WeatherItem title="Humidity" value="79" unit="%" />
                    <WeatherItem title="Pressure" value="1000" unit="hPa" />
                    <WeatherItem title="Sunrise" value="06:00" unit="am" />
                    <WeatherItem title="Sunset" value="06:30" unit="pm" />
                </View>
            </View>
            <View style={styles.rightAlign}>
                <Text style={styles.timezone}>Burgaz/Turkey</Text>
                <Text style={styles.latlong}>3.80N 48E</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    heading: {
        fontSize: 45,
        color: "white",
        fontWeight: "100",
        marginTop: 60
    },
    subHeading: {
        fontSize: 45,
        color: "#eee",
        fontWeight: "300"
    },
    rightAlign: {
        textAlign: "right",
        marginTop: 60,
        marginRight: 22
    },
    timezone: {
        fontSize: 20,
        color: "white"
    },
    latlong: {
        fontSize: 16,
        color: "white",
        fontWeight: "400"
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    weatherItem: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    weatherItemTitle: {
        color: "#eee",
        fontSize: 14,
        fontWeight: "100"
    },
    weatherItemValue: {
        color: "#eee",
        fontSize: 14,
        fontWeight: "100"
    }
})


export default DateTime;