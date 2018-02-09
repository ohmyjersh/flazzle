import React from 'react';
import { shallow } from 'enzyme';
import FlazzleDashboard from './index';

test('renders correctly', () => {
    const wrapper = shallow(<FlazzleDashboard title={"thing stuff"} flags={{flag:true,flag1:false}} goBack={() => {}} updateFlags={() => {}}  />);
    expect(wrapper).toMatchSnapshot();
});