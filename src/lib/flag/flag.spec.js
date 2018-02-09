import React from 'react';
import { shallow } from 'enzyme';
import {Flag} from './index';

test('should return experimental componet', () => {
    let stable = jest.fn();
    let experimental = jest.fn();
    shallow(<Flag flag={true} enabled={true} stable={stable} experimental={experimental} />);
    expect(experimental).toBeCalled();
    expect(experimental.mock.calls.length).toBe(1);
    expect(stable.mock.calls.length).toBe(0);
});

test('should return stable componet', () => {
    let stable = jest.fn();
    let experimental = jest.fn();
    shallow(<Flag flag={false} enabled={true} stable={stable} experimental={experimental} />);
    expect(stable).toBeCalled();
    expect(experimental.mock.calls.length).toBe(0);
    expect(stable.mock.calls.length).toBe(1);
});

test('should render experimental componet', () => {
    let experimental = jest.fn();
    let wrapper = shallow(<Flag flag={false} enabled={true} experimental={experimental} />);
    expect(experimental.mock.calls.length).toBe(0);
});