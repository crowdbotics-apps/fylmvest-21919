import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <Text style={styles.Text_3}>Login Into FylmVest</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: { flexDirection: "row", borderColor: "#5b1515" },
  Text_3: {
    marginTop: 116,
    paddingLeft: 58,
    paddingRight: 42,
    paddingTop: 6,
    paddingBottom: 9,
    fontSize: 23
  },
  Button_5: {},
  Button_8: {},
  Button_15: {},
  Button_12: {}
})
