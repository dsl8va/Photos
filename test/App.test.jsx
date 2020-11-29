import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe ('App Component', () => {

  test('should render', () => {
    const wrapper = shallow(<App />);
    // expect(wrapper.length).toEqual(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});