import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
// import toJSON from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render Header correctly', () => {
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  //   const wrapper = shallow(<Header />);
  //   expect(wrapper.find('h1').length).toBe(1);
  //   expect(wrapper.find('h1').text()).toBe('Expensify');

  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  //   expect(toJSON(wrapper)).toMatchSnapshot();
});