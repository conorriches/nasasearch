import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../src/components/Footer';

configure({ adapter: new Adapter() });

describe('Footer Component', () => {
    let wrapper = mount(<Footer/>);

    it('should have a header and link to NASA', () => {
      expect(wrapper.find('h3').exists()).toBeTruthy();
      expect(wrapper.find('p').exists()).toBeTruthy();
      expect(wrapper.find('a').exists()).toBeTruthy();
      expect(wrapper.find('a').prop('href')).toBe("https://api.nasa.gov/api.html");
    });
    
  });
