import React from 'react';
import DisplayCount from '../HooksTesting/DisplayCount';
import { render, fireEvent } from '@testing-library/react-native';
import useCounter from '../HooksTesting/useCounter'

test('useState test',  () => {
    

    const { getByTestId } = render(<DisplayCount/>);
    const text = getByTestId('count').props.children;
    
    expect(text).toBe('count 0');

});

it('should increment',()=>{

    const { getByTestId } = render(<DisplayCount/>);
    const button = getByTestId('Increment');

    fireEvent.press(button)

    const text = getByTestId('count').props.children;
    
    expect(text).toBe('count 1');

})

it('useEffect test', ()=>{

    const onCountChange = jest.fn()
    const { getByTestId } = render(<DisplayCount onCountChange={onCountChange}/>);

    expect(onCountChange).toBeCalledTimes(1)

    const button = getByTestId('Increment');
    fireEvent.press(button)

    expect(onCountChange).toBeCalledTimes(2)


    //const button = getByTestId('Increment');

})

it('custom hooks test', ()=>{
    let results 
    function HookWrapper(){
        results = useCounter()
        return null
    }
    render(<HookWrapper/>)
    expect(results.count).toEqual(0)

    results.increment()
    results.increment()
    results.increment()
    expect(results.count).toEqual(3)
})