import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mixedResponse from '../__fixtures__/mixed-search.json';
import { MemoryRouter } from 'react-router';
import Results from '../../src/components/Results';
import Image from '../../src/components/ListTypes/Image';
import Audio from '../../src/components/ListTypes/Audio';

configure({ adapter: new Adapter() });

describe('Results Component', () => {

    let results;

    beforeEach(() => {
        results = mount(
            <MemoryRouter initialEntries={['']}>
                <Results results={mixedResponse.data.collection.items} />
            </MemoryRouter>
        );
    })

    it('should display a message if there are no results', () => {
        results = mount(<Results />);
        expect(results.find('.Results__none').text()).toBe("There were no results.");
    });

    it('should not show text when there are results', () => {
        expect(results.find('.Results__none').length).toBe(0);
    });

    it('should show all results', () => {
        expect(results.find('.Results__item').length).toBe(3);
    });

    it('should show image files', () => {
        expect(results.find(Image).length).toBeGreaterThan(0);
    });

    it('should show audio files', () => {
        expect(results.find(Audio).length).toBeGreaterThan(0);
    });

    //TODO: Add video files

});