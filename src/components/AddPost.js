import { Box, Flex, Text } from "@chakra-ui/react";
import classes from "./AddPost.module.css";
import AnimatedText from "react-animated-text-content";

const AddPost = () => {
  return (
    <div className={classes.container}>
      <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: "200px",
          y: "-20px",
          scale: 1.1,
          ease: "ease-in-out",
        }}
        animationType="throw"
        interval={0.06}
        duration={1.5}
        tag="h1"
        className={classes.ml15}
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Coming Soon !!!
      </AnimatedText>

    </div>
  );
};

export default AddPost;
