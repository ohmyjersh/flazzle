import React from 'react';
import { shallow, mount } from 'enzyme';
import FlazzleDashboard from './index';

test('renders correctly', () => {
    const wrapper = shallow(<FlazzleDashboard title={"thing stuff"} flags={{flag:true,flag1:false}} goBack={() => {}} updateFlags={() => {}}  />);
    expect(wrapper).toMatchSnapshot();
});

test('renders correctly', () => {
    let updateFn = jest.fn();
    let backFn = jest.fn();
    const wrapper = mount(<FlazzleDashboard title={"thing stuff"} flags={{}} goBack={backFn} updateFlags={updateFn}  />);
    let saveButton = wrapper.find('button').findWhere(x => x.props().title === 'Save');
    saveButton.simulate('submit');
    // expect(experimental).toBeCalled();
    expect(updateFn.mock.calls.length).toBe(1);
    // expect(stable.mock.calls.length).toBe(0);
});

test('close button does what it should', () => {
    let updateFn = jest.fn();
    let backFn = jest.fn();
    const wrapper = mount(<FlazzleDashboard title={"thing stuff"} flags={{flag:true,flag1:false}} goBack={backFn} updateFlags={updateFn}  />);
    let closeButton = wrapper.find('button').findWhere(x => x.props().title === 'Close');
    closeButton.simulate('click');
    expect(backFn.mock.calls.length).toBe(1);
    expect(updateFn.mock.calls.length).toBe(0);
});