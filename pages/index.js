import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Manusha Portfolio</title>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/" className="navbar-brand">Manusha Chiluveru</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link active" href="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
          <p className="lead">Explore clean, responsive design with Bootstrap 5.</p>
          <Link href="/about" className="btn btn-primary btn-lg mt-3">Learn More</Link>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">What I Do</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Build modern, responsive websites using HTML, CSS, and Bootstrap.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">UI/UX Design</h5>
                  <p className="card-text">Focus on user-friendly interfaces and consistent layouts.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Bootstrap Mastery</h5>
                  <p className="card-text">Craft sites entirely with Bootstrap 5 — no external libraries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4 mt-5">
        <div className="container">
          <small>© 2025 MyPortfolio. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
