import {StyleSheet, StatusBar} from 'react-native'

const Styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    title:{
        flex: 1,
        borderWidth: 1,
        backgroundColor: "#AADD",
        borderColor: "#3D3B3B",
        alignItems: 'center',
        justifyContent: 'center', 
    },
    titleText:{
        color: "#193300",
        fontSize: 19,
    },
    container: {
        flex: 10,
        backgroundColor: "#AABB",
        alignItems: 'center',
        justifyContent: 'center', 
    },
    view: {
        flex: 1,
        alignItems: "flex-start",
        alignItems: 'center',
        justifyContent: 'center',
    },
    textColor: { 
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 'bold',
    },
    detail: {
        color: "#ffffff",
        fontSize: 13,
    },
    image: {
        flex: 1,
        height: 310,
        width: 200,
        marginVertical: 10,
        marginHorizontal: 16,
        padding:10,
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 1,
        width: 250,
        borderWidth: 1,
        padding: 10,
        color: '#000000',
        borderColor: '#9999DD',
        backgroundColor: '#E0E0E0',
    },
    button: {
        alignItems: "center",
        backgroundColor: '#E0E0E0',
        backgroundColor: '#9999DD',
        padding: 10,
    },
    textColorWhite: {
        color: '#ffffff',
    }
});

export default Styles;