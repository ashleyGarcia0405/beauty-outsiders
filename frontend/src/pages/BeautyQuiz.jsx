import { useState } from 'react';
import './BeautyQuiz.css';

function BeautyQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Inspiration Links
    tiktokLinks: ['', '', ''],
    pinterestBoard: '',
    instagramLinks: ['', ''],

    // Skin Attributes
    skinTone: '',
    undertone: '',
    skinType: [],
    skinConcerns: [],

    // User Goals & Aesthetic
    coverage: '',
    finish: '',
    desiredLook: [],
    blushShades: [],
    lipTones: [],
    applicationStyle: '',

    // Product-specific
    foundationFormula: [],
    longevity: '',
    concealerUse: [],
    blushFormula: [],
    browStyle: '',

    // Lifestyle + Behavior
    climate: '',
    environment: '',
    timeSpent: '',
    occasions: [],
    trendSensitivity: [],

    // Constraints
    budget: '',
    ethicalFilters: [],
    ingredientsToAvoid: [],
    brandsToAvoid: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayInputChange = (field, value) => {
    setFormData(prev => {
      const currentArray = prev[field];
      if (currentArray.includes(value)) {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...currentArray, value] };
      }
    });
  };

  const handleLinkArrayChange = (field, index, value) => {
    setFormData(prev => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return { ...prev, [field]: newArray };
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quiz submitted:', formData);
    // TODO: Submit to backend
    alert('Quiz submitted! Your personalized recommendations are being generated.');
  };

  const steps = [
    {
      title: 'Share Your Inspiration',
      subtitle: 'Show us the looks you love',
      content: (
        <div className="quiz-section">
          <div className="inspiration-links">
            <div className="link-group">
              <label className="quiz-label">
                <span className="label-icon"></span>
                <span>TikTok Links</span>
                <span className="label-hint">Paste 3-5 TikToks whose makeup you love</span>
              </label>
              {formData.tiktokLinks.map((link, index) => (
                <input
                  key={index}
                  type="url"
                  className="quiz-input"
                  placeholder={`TikTok link ${index + 1}`}
                  value={link}
                  onChange={(e) => handleLinkArrayChange('tiktokLinks', index, e.target.value)}
                />
              ))}
              <button
                type="button"
                className="btn-add-link"
                onClick={() => setFormData(prev => ({
                  ...prev,
                  tiktokLinks: [...prev.tiktokLinks, '']
                }))}
              >
                + Add another TikTok
              </button>
            </div>

            <div className="link-group">
              <label className="quiz-label">
                <span className="label-icon"></span>
                <span>Pinterest Board URL</span>
              </label>
              <input
                type="url"
                className="quiz-input"
                placeholder="https://pinterest.com/yourboard"
                value={formData.pinterestBoard}
                onChange={(e) => handleInputChange('pinterestBoard', e.target.value)}
              />
            </div>

            <div className="link-group">
              <label className="quiz-label">
                <span className="label-icon"></span>
                <span>Instagram Post URLs</span>
              </label>
              {formData.instagramLinks.map((link, index) => (
                <input
                  key={index}
                  type="url"
                  className="quiz-input"
                  placeholder={`Instagram post ${index + 1}`}
                  value={link}
                  onChange={(e) => handleLinkArrayChange('instagramLinks', index, e.target.value)}
                />
              ))}
              <button
                type="button"
                className="btn-add-link"
                onClick={() => setFormData(prev => ({
                  ...prev,
                  instagramLinks: [...prev.instagramLinks, '']
                }))}
              >
                + Add another Instagram post
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Skin Attributes',
      subtitle: 'Help us match your perfect shades',
      content: (
        <div className="quiz-section">
          <div className="question-group">
            <label className="quiz-label">Which of these best describes your skin tone?</label>
            <div className="option-grid">
              {['Fair', 'Light', 'Light-Medium', 'Medium', 'Medium-Tan', 'Deep', 'Deep-Dark'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.skinTone === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('skinTone', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">
              Which undertone do you usually identify with?
              <span className="label-hint">Select the one that feels most like you</span>
            </label>
            <div className="option-grid">
              {['Cool', 'Warm', 'Neutral', 'Olive', 'Unsure'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.undertone === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('undertone', option)}
                >
                  {option}
                  {option === 'Unsure' && <span className="option-hint">We'll guide you</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">What is your skin type? (Select all that apply)</label>
            <div className="option-grid">
              {['Oily', 'Dry', 'Combo', 'Normal', 'Sensitive', 'Acne-prone', 'Textured'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.skinType.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('skinType', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Which concerns do you want to address?</label>
            <div className="option-grid">
              {['Acne', 'Dark spots', 'Redness', 'Fine lines', 'Dullness', 'Dry patches', 'Oil breakthrough'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.skinConcerns.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('skinConcerns', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Your Aesthetic',
      subtitle: 'The look you want to achieve',
      content: (
        <div className="quiz-section">
          <div className="question-group">
            <label className="quiz-label">How much coverage do you prefer day-to-day?</label>
            <div className="option-grid">
              {['Tinted moisturizer', 'Light', 'Medium', 'Full'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.coverage === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('coverage', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Which finish do you like?</label>
            <div className="option-grid">
              {['Dewy', 'Natural/Skin-like', 'Soft-matte', 'Matte'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.finish === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('finish', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">What look are you trying to achieve? (Select all that apply)</label>
            <div className="option-grid">
              {['Clean girl', 'Full glam', 'No-makeup makeup', 'Editorial/glowy', 'Soft glam'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.desiredLook.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('desiredLook', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">For blush, what shades do you gravitate toward?</label>
            <div className="option-grid">
              {['Peachy', 'Pink', 'Mauve', 'Berry', 'Bronze'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.blushShades.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('blushShades', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">For lips, which tones feel the most "you"?</label>
            <div className="option-grid">
              {['Nude', 'Brown', 'Pink', 'Red', 'Plum'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.lipTones.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('lipTones', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">How do you apply your makeup?</label>
            <div className="option-grid">
              {['Fingers', 'Sponge', 'Brush', 'Beginner', 'Experienced'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.applicationStyle === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('applicationStyle', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Product Preferences',
      subtitle: 'Your formula favorites',
      content: (
        <div className="quiz-section">
          <div className="question-group">
            <label className="quiz-label">Foundation / Skin Tint - Preferred formula?</label>
            <div className="option-grid">
              {['Liquid', 'Stick', 'Powder', 'Serum', 'Tinted sunscreen'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.foundationFormula.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('foundationFormula', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Longevity needs:</label>
            <div className="option-grid">
              {['4–6 hours', '8+ hours', 'All-day matte', 'Minimal touch-ups'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.longevity === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('longevity', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Concealer - Use primarily for:</label>
            <div className="option-grid">
              {['Under-eyes', 'Blemishes', 'Brightening', 'All of the above'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.concealerUse.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('concealerUse', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Blush - Preferred formula?</label>
            <div className="option-grid">
              {['Cream', 'Liquid', 'Powder'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.blushFormula.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('blushFormula', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Brow style?</label>
            <div className="option-grid">
              {['Soft + fluffy', 'Defined', 'Laminated', 'Minimal'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.browStyle === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('browStyle', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Lifestyle & Context',
      subtitle: 'How you wear your makeup',
      content: (
        <div className="quiz-section">
          <div className="question-group">
            <label className="quiz-label">Do you live in a humid or dry climate?</label>
            <div className="option-grid">
              {['Humid', 'Dry', 'Moderate', 'Variable'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.climate === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('climate', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Do you wear makeup mostly indoors or outdoors?</label>
            <div className="option-grid">
              {['Mostly indoors', 'Mostly outdoors', 'Even mix'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.environment === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('environment', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">How long do you usually spend on makeup?</label>
            <div className="option-grid">
              {['2–5 mins', '5–10 mins', '10–20 mins', '20+ mins'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.timeSpent === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('timeSpent', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Makeup is mostly for:</label>
            <div className="option-grid">
              {['School/work', 'Nights out', 'Everyday casual', 'Photos/Events'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.occasions.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('occasions', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Are you inspired by TikTok trends? Which ones?</label>
            <div className="option-grid">
              {['Strawberry makeup', 'Latte makeup', 'Mob wife', 'Clean aesthetic', 'Not really into trends'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.trendSensitivity.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('trendSensitivity', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Preferences & Constraints',
      subtitle: 'Your non-negotiables',
      content: (
        <div className="quiz-section">
          <div className="question-group">
            <label className="quiz-label">What is your budget per product?</label>
            <div className="option-grid">
              {['$10–20', '$20–40', '$40–70', '$70+', 'No preference'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.budget === option ? 'selected' : ''}`}
                  onClick={() => handleInputChange('budget', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Any ethical preferences?</label>
            <div className="option-grid">
              {['Vegan', 'Cruelty-free', 'Clean beauty', 'Fragrance-free', 'None'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.ethicalFilters.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('ethicalFilters', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">Ingredients to avoid - Choose any that you're sensitive to:</label>
            <div className="option-grid">
              {['Fragrance', 'Alcohol', 'Essential oils', 'Silicone', 'Coconut oil', 'None'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`option-button ${formData.ingredientsToAvoid.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleArrayInputChange('ingredientsToAvoid', option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="question-group">
            <label className="quiz-label">
              Any brands you don't vibe with?
              <span className="label-hint">Optional - helps us personalize better</span>
            </label>
            <textarea
              className="quiz-textarea"
              placeholder="e.g., Brand A, Brand B"
              value={formData.brandsToAvoid}
              onChange={(e) => handleInputChange('brandsToAvoid', e.target.value)}
              rows="3"
            />
          </div>
        </div>
      )
    }
  ];

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="beauty-quiz">
      <div className="quiz-container">
        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="progress-text">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {/* Quiz Content */}
        <form onSubmit={handleSubmit}>
          <div className="quiz-header">
            <h1 className="quiz-title">{steps[currentStep].title}</h1>
            <p className="quiz-subtitle">{steps[currentStep].subtitle}</p>
          </div>

          <div className="quiz-content">
            {steps[currentStep].content}
          </div>

          {/* Navigation Buttons */}
          <div className="quiz-navigation">
            {currentStep > 0 && (
              <button
                type="button"
                className="btn-secondary quiz-nav-btn"
                onClick={prevStep}
              >
                ← Previous
              </button>
            )}

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                className="btn-primary quiz-nav-btn"
                onClick={nextStep}
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary-large quiz-submit-btn"
              >
                Get My Recommendations ✨
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BeautyQuiz;