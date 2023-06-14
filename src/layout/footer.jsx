function Footer(){
  return <footer className='page-footer purple darken-2'>
    <div className="footer-copyright">
      <div className='container'>
        {new Date().getFullYear}
        <img src={require('../photos/trailer.png')} alt="#" width="100px" height="100px"/>
        <a href="#!" className="max grey-text text-lighten-4 right">
          Kulesha K. 
        </a>
      </div>
    </div>
  </footer>
}
export { Footer };