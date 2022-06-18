import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";
import styles from "./styles";
import colors from "../../theme/colors";
import { size, weight } from "../../theme/fonts";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Comment } from "../Comment/Comment";
import { PostProps } from "../../types/models";
import DoublePressable from "../DoublePressable/DoublePressable";

interface FeedPostProps {
  post: PostProps;
}

const FeedPost = ({ post }: FeedPostProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpaned] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpaned((existingState) => !existingState);
  };

  const toggleLiked = () => {
    setIsLiked((existingState) => !existingState);
  };

  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      toggleLiked();
    }

    lastTap = now;
  };

  return (
    <>
      <View style={styles.post}>
        <View style={styles.header}>
          <Image
            source={{
              uri: post.user.image,
            }}
            style={styles.userAvatar}
          />

          <Text style={styles.userName}>{post.user.username}</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            style={styles.threeDots}
          />
        </View>
        <DoublePressable onDoublePress={toggleLiked}>
          <Image
            source={{
              uri: post.image,
            }}
            style={styles.image}
          />
        </DoublePressable>
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <Pressable onPress={toggleLiked}>
              <AntDesign
                name={isLiked ? "heart" : "hearto"}
                size={24}
                style={styles.icon}
                color={isLiked ? colors.accent : colors.black}
              />
            </Pressable>

            <Ionicons
              name="chatbubble-outline"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="send"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
            <Feather
              name="bookmark"
              size={24}
              style={{ marginLeft: "auto" }}
              color={colors.black}
            />
          </View>
          {/* Likes */}
          <Text style={styles.text}>
            Liked by <Text style={styles.bold}>Brandon </Text>
            and <Text style={styles.bold}>{post.nofLikes} others </Text>
          </Text>

          {/* Post Description */}
          <Text
            style={styles.text}
            numberOfLines={isDescriptionExpanded ? 0 : 3}
          >
            <Text style={styles.bold}>{post.user.username}</Text>{" "}
            {post.description}
          </Text>
          <Text onPress={toggleDescriptionExpanded}>
            {isDescriptionExpanded ? "less" : "more"}
          </Text>

          {/* Comments */}
          <Text>View all {post.nofComments} comments</Text>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}

          <Text>{post.createdAt}</Text>
        </View>
      </View>
    </>
  );
};

export default FeedPost;
