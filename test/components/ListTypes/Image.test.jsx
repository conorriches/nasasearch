import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mixedResponse from '../../__fixtures__/mixed-search.json';

import Image from '../../../src/components/ListTypes/Image';

configure({ adapter: new Adapter() });

describe('Image Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Image item={mixedResponse.data.collection.items[2]} />
            </MemoryRouter>);
    })

    it('should be clickable', () => {
        expect(wrapper.find('a').length).toBe(1);
    });

    it('should link to the ID', () => {
        expect(wrapper.find('a').props().href).toBe("/asset/200907190008HQ");
    });

    it('should show a title', () => {
        expect(wrapper.find('h3').text()).toBe("Glenn Lecture With Crew of Apollo 11");
    });

    it('should show an image as a background image', () => {
        expect(wrapper.find('.Results__item--image').props().style.backgroundImage).toBe("url(https://images-assets.nasa.gov/image/200907190008HQ/200907190008HQ~thumb.jpg)");
    });

});