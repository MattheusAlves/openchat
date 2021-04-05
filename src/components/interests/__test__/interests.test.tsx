import React from 'react'
import { mount } from 'enzyme'
import InterestsList from '@/components/interests/index'

describe('InterestsList', () => {
  it('should render a list of interest', () => {
    const component = mount(
      <InterestsList
        interests={[
          { title: 'Tech', id: 1 },
          { title: 'science', id: 2 }
        ]}
      />
    )
    expect(component.find('span').length).toEqual(2)
  })

  // it('should add to list when click on a interest', () => {})
})
