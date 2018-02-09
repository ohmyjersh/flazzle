import React from 'react';
import { shallow } from 'enzyme';
import Feature from './feature';

test('renders correctly', () => {
    const wrapper = shallow(<Feature feature={"chicken"} enabled={true} />);
    expect(wrapper).toMatchSnapshot();
});