import React from 'react';
import { shallow } from "enzyme";
import TodoLists from '../TodoLists'

describe('TodoLists', function () {
    it('should have a header tag with Hello world React!', function () {
        const wrapper = shallow(<TodoLists />);
        expect(wrapper.find("h1").text()).toEqual("Hello world React!");
    });
});