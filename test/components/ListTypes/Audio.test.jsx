import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mixedResponse from '../../__fixtures__/mixed-search.json';

import Audio from '../../../src/components/ListTypes/Audio';

configure({ adapter: new Adapter() });

describe('Audio Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Audio item={mixedResponse.data.collection.items[1]} />
            </MemoryRouter>);
    })

    it('should be clickable', () => {
        expect(wrapper.find('a').length).toBe(1);
    });

    it('should link to the ID', () => {
        expect(wrapper.find('a').props().href).toBe("/asset/NHQ_1969_0716_Apollo 11 Mission Audio - Day 1");
    });

    it('should show a title', () => {
        expect(wrapper.find('h3').text()).toBe("Apollo 11 Mission Audio - Day 1");
    });

});