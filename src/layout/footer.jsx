function Footer(){
  return <footer className='page-footer purple darken-2'>
    <div className="footer-copyright">
      <div className='container'>
        {new Date().getFullYear}
        <img src={require('../photos/trailer.png')} alt="#" width="100px" height="100px"/>
        <a href="#!" className="max white-text text-lighten-2 right">
          Zalipaev Aleksandr 
        </a>
      </div>
    </div>
  </footer>
}
export { Footer };