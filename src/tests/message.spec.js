import React from "react";
import { shallow, mount } from "enzyme";
import { Message } from "../components/Message";
import Avatar from "@material-ui/core/Avatar";
import Typography from '@material-ui/core/Typography'

jest.mock("../apiCalls");
const message = {
  id: "3",
  conversation_id: "3",
  body: "A New Day!",
  from_user_id: "1",
  created_at: "2016-08-23T10:15:00.670Z"
};

describe("Message", () => {
  it("renders without crashing", () => {
    const props = { classes: {}, message: {} };
    shallow(<Message {...props} />);
  });

  it("renders a user avatar", () => {
    const props = { classes: {}, message };
    const testM = mount(<Message {...props} />);
    testM.setState({ user: { username: "me", avatar_url: "test" } });
    expect(testM.find(Avatar).length).toBe(1);
  });

  it("renders a message", () => {
    const props = { classes: {}, message };
    const testM = mount(<Message {...props} />);
    testM.setState({ user: { username: "you", avatar_url: "test" } });
    expect(testM.find(Typography).last().text()).toEqual('A New Day!');
  });
});