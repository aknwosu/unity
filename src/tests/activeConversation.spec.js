import React from "react";
import { shallow, mount } from "enzyme";
import { ActiveConversation } from "../components/ActiveConversation";
import { Message } from "../components/Message";

const conversation = [
  {
    id: "3",
    conversation_id: "3",
    body: "A New Day!",
    from_user_id: "1",
    created_at: "2016-08-23T10:15:00.670Z"
  },
  {
    id: "4",
    conversation_id: "3",
    body: "An Old Day!",
    from_user_id: "1",
    created_at: "2016-08-23T10:15:00.670Z"
  }
];

describe("Conversations", () => {
  it("renders without crashing", () => {
    const props = { classes: {}, conversation: [] };
    shallow(<ActiveConversation {...props} />);
  });
});

it("renders a conversation", () => {
  const props = {classes: {}, conversation };
  const testM = mount(<ActiveConversation {...props} />);
  expect(testM.find(Message)).toBeDefined();
});
