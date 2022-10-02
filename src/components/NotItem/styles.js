import styled from "styled-components";

export const Notification = styled.div`
  width: 90%;
  height: 45px;
  padding: 5px;
  position: relative;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  float: left;
  padding-right: 10px;
`;

export const Name = styled.h4`
  margin: 0;
  float: left;
`;

export const Link = styled.a`
  /* word-break: break-all; */
  overflow-wrap: break-word;
  font-weight: bold;
  color: #8a8888;
`;

export const Time = styled.div`
  color: #918f8e;
  font-size: 13px;
  margin-bottom: 10px;
`;
export const Text = styled.div`
  color: #918f8e;
  float: left;
`;
export const Info = styled.div``;

export const Picture = styled.img`
  width: 40px;
  height: 40px;
  float: right;
`;
export const Message = styled.div`
  margin-left: 55px;
  border: 1px solid #c1c7c3;
  padding: 10px;
  color: #918f8e;
`;

export const RedPoint = styled.span`
  display: block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: red;
`;
