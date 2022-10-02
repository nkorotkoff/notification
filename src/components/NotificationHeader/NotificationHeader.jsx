import React from "react";
import { Wrapper, H2, CountNot, WrapperNot, MarkAll } from "./styles";

export const NotificationHeader = () => {
  return (
    <Wrapper>
      <WrapperNot>
        <H2>Notifications</H2>
        <CountNot>
          <h5>3</h5>
        </CountNot>
      </WrapperNot>
      <MarkAll>Mark all as read</MarkAll>
    </Wrapper>
  );
};
