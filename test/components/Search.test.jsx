import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import request from '../__mocks__/request'

import SearchComponent from '../../src/components/Search';

configure({ adapter: new Adapter() });

describe('SearchComponent', () => {
    let search = mount(<SearchComponent />);

    it('should have a form with correct fields', () => {
        expect(search.find('input[name="query"]').exists()).toBeTruthy();
        expect(search.find('input[name="image"]').exists()).toBeTruthy();
        expect(search.find('input[name="audio"]').exists()).toBeTruthy();
        expect(search.find('input[type="submit"]').exists()).toBeTruthy();
    });

    describe('no text entered', () => {
        it('should not search if the form is empty', () => {
            window.fetch = jest.fn().mockImplementation(request);
            search.find('input[type="submit"]').simulate('submit');
            expect(window.fetch).not.toHaveBeenCalled();
        });

        it('should alert the user with a message', () => {
            window.fetch = jest.fn().mockImplementation(request);
            search.find('input[type="submit"]').simulate('submit');
            expect(search.find('.error').exists()).toBeTruthy();
            expect(search.find('.error').text()).toBe("Please enter a query!");
        });
    })

    it('should make a search request when submitted', () => {
        window.fetch = jest.fn().mockImplementation(request);
        search.find('input[name="query"]').simulate('change',
            { target: { name: 'query', value: 'Hello' } }  //as per handleChange
        )
        search.find('input[type="submit"]').simulate('submit');
        expect(window.fetch).toHaveBeenCalled();
    });


});