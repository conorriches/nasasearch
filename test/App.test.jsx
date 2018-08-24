import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/App';
import HomeComponent from '../src/components/Home';
import NotFoundComponent from '../src/components/NotFound';
import SearchComponent from '../src/components/Search';

configure({ adapter: new Adapter() });
describe('App', () => {
  describe('routing', () => {

    it('should 404 for an invalid path', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/random']}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(HomeComponent).exists()).toBeFalsy();
      expect(wrapper.find(NotFoundComponent).exists()).toBeTruthy();
    });

    it('should show the homepage by default', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(HomeComponent).exists()).toBeTruthy();
      expect(wrapper.find(SearchComponent).exists()).toBeTruthy();
      expect(wrapper.find(NotFoundComponent).exists()).toBeFalsy();
    });

  });

});