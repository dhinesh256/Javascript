import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import MainScreen from '../HooksTesting/ChangNameContext/MainScreen'
import { NameProvider } from '../HooksTesting/ChangNameContext/NameManager'

it('renders default text', ()=>{
    const screen = render(<MainScreen/>, {wrapper: NameProvider})

    screen.getByText("Welcome, No Name!")
})

it('changes the text on submit', ()=>{
    const screen = render(<MainScreen/>, {wrapper: NameProvider})

    fireEvent.changeText(screen.getByPlaceholderText('Example'), 'abcd')
    screen.getByText("Welcome, No Name!")

    fireEvent.press(screen.getByText('Change'))
    screen.getByText("Welcome, abcd!")
})