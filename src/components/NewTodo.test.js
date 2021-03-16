import { fireEvent, render } from "@testing-library/react";
import NewTodo from './NewTodo';

const DUMMY1 = [];

test("Testing render component form" , () =>  { 
    const {queryByTitle} = render(<NewTodo/>);
    const comInput = queryByTitle("comInput");
    const comButton = queryByTitle("comButton");
 });

 test("Testing type in input form" , () =>  { 
    const {queryByTitle} = render(<NewTodo/>);
    const comInput = queryByTitle("comInput");
    
    expect(comInput.value).toBe("");
    fireEvent.change(comInput, {target:{value:"qwerty"}});
    expect(comInput.value).toBe("qwerty");
    fireEvent.change(comInput, {target:{value:"coffee"}});
    expect(comInput.value).toBe("coffee");
 });

 test("Testing button" , () =>  { 
    const {queryByTitle} = render(<NewTodo/>);
    const comButton = queryByTitle("comButton");
  
    expect(comButton.innerHTML).toBe("Add #" +(DUMMY1.length+1));
 });

