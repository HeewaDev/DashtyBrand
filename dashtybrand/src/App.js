import './component/categoryComponent/category.item.styles.scss'
import './App.css';
import Directory from './component/Directory/Directory.component';
import './component/Directory/directory.styles.scss'

const App = ()=> {

  const categories = [
    {
      id:1,
      title: 'Jeans',
      imageUrl:'https://i.ibb.co/K5fxXVs/images.jpg' ,
    },

    {
      id:2,
      title: 'Jackets',
      imageUrl:'https://i.ibb.co/YWZs1Hb/639cdb89b5600000185b2761.webp' ,
    },

    {
        id:3,
      title: 'T-shirts',
      imageUrl:'https://i.ibb.co/z8JLqdj/product-jpeg-1000x1000.webp' ,
    },

    {
        id:4,
      title: 'Sneakers & Shoes',
      imageUrl:'https://i.ibb.co/9N8Hp5K/Misalwa-Plus-Size-38-47-Men-Brogue-Fashion-Oxford-Dress-Shoes-Male-Well-dressed-Gentleman-Handcrafte.jpg' ,
    },

    {
        id:5,
      title: 'Men Accessories ',
      imageUrl:'https://i.ibb.co/L6zNJmf/picture-of-wallet-and-wrist-watch-isolated-on-white-background-PWHDDK.jpg' ,
    },
    
    
  ]

  return (
   <Directory categories={categories}/>
  );
  
    
};

export default App;
