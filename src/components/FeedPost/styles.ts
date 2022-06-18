import { StyleSheet } from 'react-native'
import { weight, size } from '../../theme/fonts';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    post: {},
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    header: {
      flexDirection: "row",
      padding: 10,
      alignItems: "center",
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontSize: size.default,
      fontWeight: weight.bold,
      color: colors.black,
    },
    threeDots: {
      marginLeft: "auto",
    },
    iconContainer: {
      flexDirection: "row",
      marginBottom: 5,
    },
    icon: {
      marginHorizontal: 5,
    },
    footer: {
      padding: 10,
    },
    text: {
      color: colors.black,
      lineHeight: 18,
    },
    bold: {
      fontWeight: weight.bold,
    },
    
});
  
export default styles;