import './App.css';
import Home from './components/home';
import Content from './components/home/content';
import About from './components/home/about';
import Services from './components/services/services';
import Experience from './components/services/experience'; 
import Education from './components/skills/education';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/end/end';

 const x={
   name:"ANIRUDDHA",
   description:"There",
   designation:"Student",
   isStudent:false
}




function App() {
  return (
    <div className="App">
       <head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="https://elements-preview-images-0.imgix.net/972f78c1-61a8-4891-bce9-02e943391d6e?auto=compress%2Cformat&w=1170&fit=max&s=5226f3d0c224ef15b13faf0df2f1fa56">
  </link>
</head>
    <Home />
    <Content {...x}  />
    <About {...x} />
    <Services />
    <Experience />
    <Education />
    <Portfolio />
    <Footer />
    </div>
  );
}

export default App;
