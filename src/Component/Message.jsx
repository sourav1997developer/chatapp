import React from "react";
import { Avatar, HStack, Text } from "@chakra-ui/react";
import "./Message.css";

const Message = ({ text, uri, user = "other" }) => {
  const avatar = {
    width: "35px",
    height: "35px",
  };
  return (
    <HStack
      alignSelf={user === "me" ? "flex-end" : "flex-start"}
      borderRadius={"base"}
      bg="gray.100"
      paddingX={4}
      paddingY={2}
    >
      {user === "other" && <Avatar src={uri} style={avatar} className="avt" />}
      <Text>{text}</Text>

      {user === "me" && <Avatar style={avatar} className="avt" />}
    </HStack>
  );
};

export default Message;
