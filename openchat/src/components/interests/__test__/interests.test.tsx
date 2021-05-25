import React from 'react'
import { mount } from 'enzyme'

import InterestsList from '@/components/interests/index'
import Render from '@/util/test-utils'

describe('InterestsList', () => {
  const fakeInterests = [
    { id: 2, title: 'fake-interest' },
    { id: 3, title: 'fake-interest' }
  ]
  it('should render a list of interest', () => {
    const component = mount(
      <Render
        initialState={{
          interestState: { interests: fakeInterests }
        }}
      >
        <InterestsList />
      </Render>
    )
    expect(component.find('span').length).toEqual(2)
  })
})
