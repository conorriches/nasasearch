import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/App';
import Home from '../src/components/Home';
import NotFound from '../src/components/NotFound';
import Search from '../src/components/Search';
import Asset from '../src/components/Asset';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

configure({ adapter: new Adapter() });
jest.mock('../src/utils/nasa');

describe('App', () => {
  describe('routing', () => {

    it('should show a header and a footer', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(Header).exists()).toBeTruthy();
      expect(wrapper.find(Footer).exists()).toBeTruthy();
    });

    it('should 404 for an invalid path', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/random']}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(Home).exists()).toBeFalsy();
      expect(wrapper.find(NotFound).exists()).toBeTruthy();
    });

    it('should show the homepage by default', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.find(Home).exists()).toBeTruthy();
      expect(wrapper.find(Search).exists()).toBeTruthy();
      expect(wrapper.find(NotFound).exists()).toBeFalsy();
    });

    it('should show the asset page when routed to an asset', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/asset/123']}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(Asset).exists()).toBeTruthy();
      expect(wrapper.find(NotFound).exists()).toBeFalsy();
    });

  });

});