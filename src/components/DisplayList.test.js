import {render} from "@testing-library/react";
import DisplayList from './DisplayList';

const DUMMY = [{
    DATA1: "DATA1"
}];

test("Testing render" , () =>  { 
    const {queryByTitle} = render(<DisplayList items={DUMMY}/>);
 });



