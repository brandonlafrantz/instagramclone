import { StyleSheet } from 'react-native'
import { weight, size } from '../../theme/fonts';
import colors from '../../theme/colors';


 const styles = StyleSheet.create({
    bold: {
        fontWeight: weight.bold,
      },
      commentText: {
        color: colors.black,
        lineHeight: 18,
    
        flex: 1,
      },
      comment: {
        flexDirection: "row",
        alignItems: "center",
     },
     icon: {
        marginHorizontal: 5,
      },
 })

export default styles;