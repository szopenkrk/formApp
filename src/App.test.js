import React from 'react';
import enzyme from 'enzyme';
import App from './App';

describe('<App />', () => {
  test('test number of labels', () => {
    const wrapper = enzyme.shallow(<App />);

    expect(wrapper.find('label')).toHaveLength(5);
  });

  test('test number of buttons', () => {
    const wrapper = enzyme.shallow(<App />);

    expect(wrapper.find('.sendButton')).toHaveLength(0);
  });

  test('test if all inputs exists', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find({ name: "firstName" })).toHaveLength(1);
    expect(wrapper.find({ name: "userName" })).toHaveLength(1);
    expect(wrapper.find({ name: "password" })).toHaveLength(1);
    expect(wrapper.find({ name: "repeat" })).toHaveLength(1);
    expect(wrapper.find({ name: "email" })).toHaveLength(1);
  })

});
