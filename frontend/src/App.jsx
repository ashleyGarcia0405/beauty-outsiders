import './App.css'

function App() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Beauty Outsiders</div>
          <div className="nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <button className="btn-secondary">Sign In</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Your Perfect
            <span className="gradient-text"> Beauty Match</span>
          </h1>
          <p className="hero-subtitle">
            AI-powered recommendations tailored to your unique skin type, concerns, and preferences.
            Because your beauty routine should be as individual as you are.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Start Your Journey</button>
            <button className="btn-outline">Learn More</button>
          </div>
          <div className="trust-indicators">
            <div className="indicator">
              <span className="number">10K+</span>
              <span className="label">Products Analyzed</span>
            </div>
            <div className="indicator">
              <span className="number">50K+</span>
              <span className="label">Happy Users</span>
            </div>
            <div className="indicator">
              <span className="number">95%</span>
              <span className="label">Match Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Intelligent Beauty Discovery</h2>
          <p>Advanced technology meets personalized care</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Smart Skin Analysis</h3>
            <p>Answer a few questions and get instant insights about your skin type and concerns.</p>
          </div>
          <div className="feature-card">
            <h3>Ingredient Intelligence</h3>
            <p>Know exactly what's in your products with our comprehensive ingredient analysis.</p>
          </div>
          <div className="feature-card">
            <h3>Routine Builder</h3>
            <p>Create the perfect morning and evening skincare routine tailored just for you.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-header">
          <h2>Your Journey to Better Beauty</h2>
          <p>Simple steps to personalized perfection</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Take the Quiz</h3>
            <p>Tell us about your skin type, concerns, and beauty goals in just 2 minutes.</p>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Get Matched</h3>
            <p>Our AI analyzes thousands of products to find your perfect matches.</p>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Build Your Routine</h3>
            <p>Create a personalized skincare routine that actually works for you.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Beauty Routine?</h2>
          <p>Join thousands of users who've found their perfect products</p>
          <button className="btn-primary-large">Get Started Free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Beauty Outsiders</div>
            <p>Personalized beauty, powered by intelligence.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Beauty Outsiders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
