export function Home() {

  return (
    <section className="home">
      <h1 className=" animate__animated animate__zoomInDown">Welcome to our app</h1>
      {/* <img src="./assets/img/pichome.jpg" /> */}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      error corporis, incidunt expedita voluptate ad accusamus adipisci sequi
      distinctio ea minima beatae delectus repellendus sapiente excepturi
           voluptatibus vel? Cupiditate, cum?</p> */}

      <div className="img-home animate__animated animate__flipInX">
       <div className="img-card"> <img  src="./assets/img/email.png" alt="" /><h2>Expand your horizons and get into an amazing world of adventures with your favorite book!</h2></div>
       <div className="img-card"><img src="./assets/img/notess.png" alt="" /><h2>Use our newest technology with the unbelivble ability to contact remote friend and family!</h2></div>
       <div className="img-card"><img src="./assets/img/book.png" alt="" /><h2>Extend you brain to the machines! use our nice note app to store your memories in our hands!</h2></div>
      </div> 
      <footer>
      © 2020 Almog Balila | Adir Hagag
      </footer>
    </section>
  )
}