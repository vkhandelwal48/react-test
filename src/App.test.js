import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('Test First React app case', () => {
//   render(<App />);
//   const text = screen.getByText(/First React Test Case/i); // i here is for case insensitivity
//   const title = screen.getByTitle("AI Generated Image");
//   expect(text).toBeInTheDocument();// expect keyword in jest
//   expect(title).toBeInTheDocument();
// });

// test("Testing input box",()=>{
//   render(<App/>)
//   let checkInput = screen.getByRole("textbox");//for our element
//   let checkInputPlacehold = screen.getByPlaceholderText("Enter User Name");
//   expect(checkInput).toBeInTheDocument();
//   expect(checkInputPlacehold).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute("name","username");
//   expect(checkInput).toHaveAttribute("id","userid");
// })

// describe("UI test case group",()=>{
//   test("test case 1",()=>{
//     render(<App />)
//     let checkInput=screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name","username");
//   })

//   test("test case 2",()=>{
//     render(<App />)
//     let checkInput=screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name","username");
//   })
// })

// describe("UI test case group",()=>{
//   test("test case 1",()=>{
//     render(<App />)
//     let checkInput=screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name","username");
//   })

//   test("test case 2",()=>{
//     render(<App />)
//     let checkInput=screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name","username");
//   })

//   describe("Inner describe test group",()=>{
//     test("test case 2",()=>{
//       render(<App />)
//       let checkInput=screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute("name","username");
//     })
//   });
// })

// describe.skip("UI test case group",()=>{
//   test("test case 1",()=>{
//     render(<App />)
//     let checkInput=screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name","username");
//   })

//   test("test case 2",()=>{
//     render(<App />)
//     let checkInput=screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name","username");
//   })
// })

// describe.only("API test case group",()=>{
//   test("test case 1",()=>{
//     render(<App />)
//     let checkInput=screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name","username");
//   })

//   test("test case 2",()=>{
//     render(<App />)
//     let checkInput=screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name","username");
//   })
// })

// test("on change event testing",()=>{
//   render(<App />);
//   let input = screen.getByRole("textbox");
//   fireEvent.change(input,{target:{value:'a'}});
//   expect(input.value).toBe('a');
// })

// beforeAll(()=>{
//   console.log("before All");
// })

// beforeEach(()=>{
//   console.log("Before Each");
// })

// test("click event test case",()=>{
//   render(<App />)
//   const btn=screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("updated data")).toBeInTheDocument();
// })

// afterEach(()=>{
//   console.log("After each");
// })

// afterAll(()=>{
//   console.log("after All")
// })

// test("snapshot for app component",()=>{
//   const container=render(<App />);
//   expect(container).toMatchSnapshot();
// })