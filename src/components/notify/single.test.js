import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import Single from './single';

describe("single.js component", function() {

  it("contains a msg passed by props", function() {
    const single = mount(<Single msg='umamensagem' />);
    expect(single.html()).to.contain('umamensagem');
  });

});
