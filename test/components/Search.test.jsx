import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../src/components/Search';
jest.mock('../../src/utils/nasa');

configure({ adapter: new Adapter() });




describe('Search Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Search />);

    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should have a form with correct fields', () => {
        expect(wrapper.find('input[name="Search__query"]').exists()).toBeTruthy();
        expect(wrapper.find('input[name="image"]').exists()).toBeTruthy();
        expect(wrapper.find('input[name="audio"]').exists()).toBeTruthy();
        expect(wrapper.find('input[type="submit"]').exists()).toBeTruthy();
    });

    describe('no text entered', () => {
        it('should not search if the form is empty', () => {
            wrapper.find('input[type="submit"]').simulate('submit');
            //expect(nasa.fn()).not.toHaveBeenCalled();
        });

        it('should alert the user with a message', () => {
            wrapper.find('input[type="submit"]').simulate('submit');
            expect(wrapper.find('.Search__error').exists()).toBeTruthy();
            expect(wrapper.find('.Search__error').text()).toBe("Please enter a query!");
        });
    })



});