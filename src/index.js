import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

// function Greetings () {
//  return (
//   <div>
//     <Person/>
//     <Message/>
//   </div>
//  )
   
// }

// const Person = () => <h2>kagabo erick</h2>;
// const Message = () => {
//   return (
//     <div>
//       <h1>kevin</h1>
//       <h1>seth</h1>
//     </div>
//   )
// }
// const title = 'javascript book'
// const author = 'kalisa jonathan'
// const img = './images/pngwing.com.png'

const firstBook = {
  author: 'kalisa jonathan',
  title: 'javascript book',
  img: './images/pngwing.com.png',
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/pngwing.com (1).png',
};

const thirdBook = {
  author: 'Shiv Khera',
  title: 'you can win',
  img: './images/you-can-win.jpg',
}


const Booklist = () =>{
  return <section className='booklist'>
    <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
    <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    <Book author={thirdBook.author} title={thirdBook.title} img={thirdBook.img} />
  </section>
}
// const Book = ({img,title,author}){}ibi nabyo bisimbura props
const Book = (props) =>{
  const {img,title,author} = props;
  return <article className='book'>
    <img src={img}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
  </article>
}
 
 const root = ReactDOM.createRoot(document.getElementById('root'))

 root.render(<Booklist/>)