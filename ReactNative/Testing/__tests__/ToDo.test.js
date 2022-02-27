import React from 'react'
import ToDo from "../ToDo/ToDo";
import {fireEvent, render} from '@testing-library/react-native'
//import { ExampleComponent } from '../../../monorepo/libs/reactapp/ui-shared/src';

it('create item', ()=>{
    const {getByText , getByPlaceholderText} = render(<ToDo/>)

    const addItemButton = getByText('+')
    const textInput = getByPlaceholderText('Write something')

    const createdItemText = 'first todo'

    fireEvent.changeText(textInput,createdItemText)
    fireEvent.press(addItemButton)

    const createdItem = getByText(createdItemText)

    expect(createdItem).not.toBeNull()

})

it('create multiple items', ()=>{
    const {getByText , getByPlaceholderText} = render(<ToDo/>)

    const addItemButton = getByText('+')
    const textInput = getByPlaceholderText('Write something')

    const createdItemText = 'first todo'
    const createdItemText_2 = 'second todo'

    fireEvent.changeText(textInput,createdItemText)
    fireEvent.press(addItemButton)

    fireEvent.changeText(textInput,createdItemText_2)
    fireEvent.press(addItemButton)


    const firstCreatedItem = getByText(createdItemText)
    const secondCreatedItem = getByText(createdItemText_2)

    expect(firstCreatedItem).not.toBeNull()
    expect(secondCreatedItem).not.toBeNull()


})

it('delete item', ()=>{
    const {getByText , getByPlaceholderText , queryByText} = render(<ToDo/>)

    const addItemButton = getByText('+')
    const textInput = getByPlaceholderText('Write something')

    const createdItemText = 'first todo'

    fireEvent.changeText(textInput,createdItemText)
    fireEvent.press(addItemButton)

    const deleteItemButton = getByText('X')
    fireEvent.press(deleteItemButton)

    const deletedItem = queryByText(createdItemText)

    expect(deletedItem).toBeNull()

})

it('Show error if an empty item is created', ()=>{
    const {getByText , getByPlaceholderText} = render(<ToDo/>)

    const addItemButton = getByText('+')

    fireEvent.press(addItemButton)

    const errorMessage = getByText('Please insert a valid text')

    expect(errorMessage).not.toBeNull()

})

it('error warning should disappear once a valid item is created', ()=>{
    const {getByText , getByPlaceholderText , queryByText} = render(<ToDo/>)

    const addItemButton = getByText('+')

    fireEvent.press(addItemButton)

    const textInput = getByPlaceholderText('Write something')

    const createdItemText = 'first todo'

    fireEvent.changeText(textInput,createdItemText)
    fireEvent.press(addItemButton)

    const errorMessage = queryByText('Please insert a valid text')

    expect(errorMessage).toBeNull()

})