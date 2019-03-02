import React from "react";
import { shallow, mount } from "enzyme";
import { App } from "./app";
import { ActiveConversation } from "../components/ActiveConversation";
import Conversations from "../components/Conversations";
import * as api from "../apiCall";

const user = {
  id: "1",
  username: "John",
  avatar_url: "http://placekitten.com/g/300/300"
};

const message = [
  {
    id: "3",
    with_user_id: "1",
    unread_message_count: 0
  }
];

describe("App", () => {
  it("renders without crashing", () => {
    const props = { classes: {} };
    shallow(<App {...props} />);
  });

  it("renders ActiveConversations", () => {
    const props = { classes: {} };
    const testM = mount(<App {...props} />);
    expect(testM.find(ActiveConversation)).toBeDefined();
  });

  it("renders Conversations", () => {
    const props = { classes: {} };
    const testM = mount(<App {...props} />);
    expect(testM.find(Conversations)).toBeDefined();
  });

  it("gets Users", async () => {
    const props = { classes: {} };
    const testM = mount(<App {...props} />);
    api.fetchConversation =
      jest.fn()
      .mockImplementation(a => new Promise(r => r(message)));
    await testM.instance().setCurrent(user, "3");
    expect(testM.state().currentUser).toEqual(user);
    expect(testM.state().activeConversation).toEqual(message);
  });
});
