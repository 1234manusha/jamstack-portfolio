import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Manusha Portfolio</title>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/" className="navbar-brand">Manusha Chiluveru</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link active" href="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="text-center mb-4">About Me</h1>
          <p className="lead text-center">I am a passionate web developer learning to build modern, responsive websites using Bootstrap 5.</p>
          <p className="text-center">This portfolio showcases my journey through clean UI design, layout skills, and component-based page building.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">My Skills</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title">HTML & CSS</h5>
                  <p className="card-text">Creating structured and styled web content using modern semantic HTML and CSS3.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title">Bootstrap 5</h5>
                  <p className="card-text">Building responsive and polished interfaces with Bootstrap components and utilities.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title">Version Control</h5>
                  <p className="card-text">Using Git and GitHub to manage code, track changes, and deploy websites easily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center">
        <div className="container py-5 mt-5">
          <small>© 2025 MyPortfolio. All rights reserved.</small>
          </div>
          </footer>
          </>
  );
}
