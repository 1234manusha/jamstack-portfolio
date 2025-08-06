import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head><title>Contact - Manusha Portfolio</title></Head>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/" className="navbar-brand">Manusha Chiluveru</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link active" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="text-center mb-4">Contact Me</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-dark text-light text-center">
        <div className="container py-4 mt-5">
          <small>© 2025 MyPortfolio. All rights reserved.</small>
          </div>
          </footer>
    </>
  );
}
