import React from "react";
import GetName from "../getName";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

    
test("should call setState on title", () => {

  let wrapper = shallow(<GetName/>);

  const mockEvent = {
    target: {
      name: "title",
      value: "test"
    }
  };
  const expectedEvent = {title: "test"};
  wrapper.instance().handleChange(mockEvent);
  
  
  expect(wrapper.state()).toEqual(expectedEvent);
});
