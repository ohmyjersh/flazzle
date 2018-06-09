import React from 'react';
import { shallow } from 'enzyme';
import {Flag} from './index';

test('should return experimental component', () => {
    let stable = jest.fn();
    let experimental = jest.fn();
    shallow(<Flag flag={true} enabled={true} stable={stable} experimental={experimental} />);
    expect(experimental).toBeCalled();
    expect(experimental.mock.calls.length).toBe(1);
    expect(stable.mock.calls.length).toBe(0);
});

test('should return stable component', () => {
    let stable = jest.fn();
    let experimental = jest.fn();
    shallow(<Flag flag={false} stable={stable} experimental={experimental} />);
    expect(stable).toBeCalled();
    expect(experimental.mock.calls.length).toBe(0);
    expect(stable.mock.calls.length).toBe(1);
});

test('should render experimental component with no stable to fallback on', () => {
    let experimental = jest.fn();
    let wrapper = shallow(<Flag flag={true} experimental={experimental} />);
    expect(experimental.mock.calls.length).toBe(1);
});

test('should render experimental because function evaluates to true', () => {
    let experimental = jest.fn();
    let stable = jest.fn();
    let oneIsLessThanTenFlag = () => 1 < 10;
    let wrapper = shallow(<Flag flag={oneIsLessThanTenFlag} experimental={experimental} stable={stable} />);
    expect(experimental.mock.calls.length).toBe(1);
    expect(stable.mock.calls.length).toBe(0);
});

test('should render stable because function evaluates to false', () => {
    let experimental = jest.fn();
    let stable = jest.fn();
    let oneIsLessThanTenFlag = () => 10 < 1;
    let wrapper = shallow(<Flag flag={oneIsLessThanTenFlag} experimental={experimental} stable={stable} />);
    expect(experimental.mock.calls.length).toBe(0);
    expect(stable.mock.calls.length).toBe(1);
});