import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Asset from '../../src/components/Asset';

jest.mock('../../src/utils/nasa');

configure({ adapter: new Adapter() });

describe('Asset Component', () => {

  let wrapper;

  it('should call fetchAsset with the ID provided', () => {
    const spy = jest.spyOn(Asset.prototype, 'fetchAsset');
    wrapper = mount(<Asset nasa_id="123" />);

    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][0]).toBe('123');
  });

  describe('fetchAsset', () => {

    beforeEach(() => {
      wrapper = mount(<Asset nasa_id="123" />);
    });

    it('should return a correct object', () => {
      return wrapper.instance().fetchAsset('123').then(d => {
        expect(d.title).toBe("Mars is Hard.  Here's Why.");
        expect(d.description.length).toBe(52032);
        expect(d.type).toBe("audio");
        expect(d.media.length).toBe(5);
      })
    });

    // TODO: Same as above, for an Image asset type

  })


});
