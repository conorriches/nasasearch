import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomeComponent from '../../src/components/Home';
import SearchComponent from '../../src/components/Search';

configure({ adapter: new Adapter() });

describe('HomeComponent', () => {
    let home = mount(<HomeComponent/>);

    it('should have a header, paragraph and search component', () => {
      expect(home.find('h1').exists()).toBeTruthy();
      expect(home.find('p').exists()).toBeTruthy();
      expect(home.find(SearchComponent).exists()).toBeTruthy();
    });
    
  });
