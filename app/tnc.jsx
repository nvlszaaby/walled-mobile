import { ScrollView, Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Tnc(){
    return (
        <SafeAreaView>
        <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Terms and Conditions
            Lorem ipsum odor amet, consectetuer adipiscing elit. Amet ligula bibendum curae pretium vehicula lacinia arcu. Eros auctor libero interdum taciti tincidunt nibh congue netus. Eu imperdiet finibus turpis augue etiam penatibus? Ad rutrum viverra semper suspendisse ultricies porttitor sollicitudin nisl. Per taciti ad, etiam primis platea habitasse.

Aeleifend malesuada bibendum cras vestibulum. Facilisi sapien fusce tristique aliquam finibus; viverra dictumst. At risus imperdiet vel nascetur non. Egestas varius per et ligula metus integer nibh eros nullam. Praesent justo inceptos orci augue lacus. Maecenas proin dapibus taciti vivamus fames. Nisl nunc ut euismod maximus nisi purus vestibulum.

Commodo facilisis egestas consequat donec curabitur mattis. Consectetur nisl eleifend vulputate, senectus rutrum phasellus ut. Habitasse quis maximus scelerisque urna ante nisi dui taciti. Quam arcu lorem libero volutpat id. Duis integer tellus, sagittis pulvinar ultricies odio. Erat tristique lobortis turpis consectetur donec. Fames himenaeos auctor proin volutpat platea natoque nisi nascetur. Donec scelerisque montes sagittis sed; eros potenti rhoncus.

At cursus dapibus nunc elementum conubia velit dignissim. Pulvinar placerat aliquet tempor tempus; eleifend odio duis habitant fringilla. Vel tellus blandit eleifend hendrerit mollis eleifend felis ornare. Placerat in dis phasellus malesuada curabitur. Malesuada iaculis viverra etiam, nisi purus urna consectetur. Morbi molestie fusce tristique taciti sem sit.

Arcu est hendrerit pretium commodo habitasse litora lacus odio. Est iaculis sagittis netus nunc eleifend et nisi et? Sed dolor malesuada porttitor nec ultrices. Pretium placerat aliquet ac sollicitudin euismod. Est tempor elementum, ridiculus in sem tempor. Ipsum neque est vivamus litora tempus curabitur maecenas ipsum. Suscipit lacinia laoreet lacus interdum mi ad nullam ut.
              </Text>
          </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  tnc: {
    // height: 10,
    // flex:1, 
    alignItems: "center",
    flexDirection: "row", 
    justifyContent: "center"
  },
  Pressable: {
    color: "#4DB6AC",
    fontWeight: 'bold'
  }, 
  agree: {
    alignSelf: "flex-start",
    // fontSize: 16
  }, 
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }, 
  modalText: {
    marginBottom: 15,
     fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#4DB6AC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default Tnc