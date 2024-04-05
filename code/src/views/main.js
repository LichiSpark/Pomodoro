import { Platform, SafeAreaView, StyleSheet, View } from "react-native"
import Tabs from "../components/tabs"
import Timer from "../components/timer"
import Button from "../components/button"

export  default Principal = ()=>{
    return(
        <SafeAreaView style={styles.principal}>
            <View style={{marginTop: Platform.OS==="android" && 30}}>
                <Tabs texto="Hola Mundo"/>
                <Timer/>
                <Button/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
    }
}
)