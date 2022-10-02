import React from "react";
import {
  Notification,
  Avatar,
  Name,
  Text,
  Link,
  Time,
  Info,
  Picture,
  Message,
  RedPoint,
} from "./styles";

export const NotItem = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((item) => {
        return (
          <Notification
            style={item.message ? { marginBottom: "70px" } : {}}
            key={item.id}
          >
            <Avatar alt="img" src={item.avatar}></Avatar>
            <Info>
              <Name>{item.name}</Name>
              <Text>
                {"\u00A0"} {item.text}
              </Text>
              <Link>
                {"\u00A0"}
                {item.link}
              </Link>
              {item.new && <RedPoint>fd</RedPoint>}
              {item.picture && <Picture src={item.picture}></Picture>}

              <Time>{item.data}</Time>
              {item.message && <Message>{item.message}</Message>}
            </Info>
          </Notification>
        );
      })}
    </>
  );
};
