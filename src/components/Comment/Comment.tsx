import { View, Text } from "react-native";
import styles from "./styles";
import colors from "../../theme/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { CommentProps } from "../../types/models";

interface Comment {
  comment: CommentProps;
}

export const Comment = ({ comment }: Comment) => {
  return (
    <>
      <View style={styles.comment}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{" "}
          {comment.comment}
        </Text>

        <AntDesign
          name={"hearto"}
          size={14}
          style={styles.icon}
          color={colors.black}
        />
      </View>
    </>
  );
};
