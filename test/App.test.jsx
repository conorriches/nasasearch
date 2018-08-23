import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/App';
import HomeComponent from '../src/components/Home';
import NotFoundComponent from '../src/components/NotFound';

configure({ adapter: new Adapter() });


describe('routing', () => {

  it('should 404 for an invalid path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(HomeComponent)).toHaveLength(0);
    expect(wrapper.find(NotFoundComponent)).toHaveLength(1);
  });

  it('should show the homepage by default', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(HomeComponent)).toHaveLength(1);
    expect(wrapper.find(NotFoundComponent)).toHaveLength(0);
  });

});

describe('home page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  it('should have a header', () => {
    expect(wrapper.find('.navbar').exists()).toBeTruthy();
  })


})
