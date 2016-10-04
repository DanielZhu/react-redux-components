import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import Single from './single';

describe("single.js component", function() {

  it("contains a msg passed by props", function() {
    const single = shallow(<Single msg='umamensagem' />);
    expect(single.html()).to.contain('umamensagem');
  });

  it('change css class when change props stateTransition - closing', () => {
    const single = shallow(<Single transitionState='closing' />);
    expect(single.html()).to.contain('closing');
  });

  it('change css class when change props stateTransition - opened', () => {
    const single = shallow(<Single transitionState='opened' />);
    expect(single.html()).to.contain('opened');
  });

});
