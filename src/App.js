import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Studies from './components/Studies';
import Footer from './components/Footer';
// import MyImage from './components/image1.jpg'

function App(){
  return (
    <div>
      <Navbar/>
      <AboutMe/>
      <Studies
      heading="Education"
      description="I have completed my graduation in chemistry hons from BR Ambedkar University,Muzaffarpur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus similique corporis voluptatem. Molestias at sapiente totam. Error ab quas eligendi a nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus similique corporis voluptatem. Molestias at sapiente totam. Error ab quas eligendi a nostrum."
      />
      <Studies
      heading="Skills"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus similique corporis voluptatem. Molestias at sapiente totam. Error ab quas eligendi a nostrum. Doloribus, iure mollitia recusandae tenetur numquam harum laborum error ab fugiat earum rerum modi nisi voluptatum excepturi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, rerum architecto cupiditate neque fuga aperiam officia fugit nihil reiciendis explicabo esse, consequuntur iusto eligendi ipsam incidunt ipsa modi? At, quod."
      />
      <Studies
      heading="Projects"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus similique corporis voluptatem. Molestias at sapiente totam. Error ab quas eligendi a nostrum. Doloribus, iure mollitia recusandae tenetur numquam harum laborum error ab fugiat earum rerum modi nisi voluptatum excepturi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, rerum architecto cupiditate neque fuga aperiam officia fugit nihil reiciendis explicabo esse, consequuntur iusto eligendi ipsam incidunt ipsa modi? At, quod."
      />
      <Footer/>
    </div>
    
  )
}

export default App;
