import React, { useState } from "react";
import "../styles/User.css";

// Icons
import { FaCamera, FaMicrophone, FaCheckCircle, FaLeaf, FaSeedling, FaCertificate, FaFlask, FaIndustry, FaLeaf as FaHerb, FaPercentage, FaMountain, FaGlobeAsia } from 'react-icons/fa';

const HERB_JOURNEY = {
  "1": {
    name: "Herbalife Nutrition",
    batchId: "-AP-2025-01-12-07",
    
    // Ingredients Section
    ingredients: [
      {
        id: 1,
        name: "Maltodextrin",
        percentage: "Major component",
        source: "Organic Farm, Andhra Pradesh",
        purpose: "Primary active ingredient for immunity",
        certification: "FSSAI Approved",
        icon: <FaHerb />
      },
      {
        id: 2,
        name: "Natural Caffeine Powder",
        percentage: "25%",
        source: "Wild-harvested, Himalayan Foothills",
        purpose: "Metabolic support & detoxification",
        certification: "Food-grade extract",
        icon: <FaMountain />
      },
      {
        id: 3,
        name: "Nature-Identical Lemon Flavour",
        percentage: "15%",
        source: "Certified Organic Farm, Madhya Pradesh",
        purpose: "Adaptogenic stress relief",
        certification: "Permitted flavouring agent",
        icon: <FaGlobeAsia />
      }
    ],
    
    // Focused processing stages with photos and audio
    processingStages: [
      {
        id: 1,
        name: "Seed Selection Certificate",
        date: "2024-09-01",
        location: "Organic Seed Bank, Karnataka",
        description: "Certified organic seeds with purity verification",
        photos: [
          {
            id: 1,
            title: "Seed Certificate",
            url: "https://signetseeds.com/assets/images/our-project/certificate1.jpg    ",
            description: "Official certification document"
          },
        ],
      },
      {
        id: 2,
        name: "Cultivation Process",
        date: "2024-09-15 to 2025-01-10",
        location: "Farm Plot A-12, Andhra Pradesh",
        description: "5-stage cultivation monitoring",
        photos: [
          {
            id: 1,
            title: "Stage 1:",
            url: "https://www.thespruce.com/thmb/Vtiei6MqL_BwD2f9_xT5FMF-BO0=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-925966438-392205c650654b5d945085ce2383b35f.jpg",
            description: "Initial germination phase"
          },
          {
            id: 2,
            title: "Stage 2:",
            url: "data:image/jpeg;base64,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",
            description: "First month growth"
          },
          {
            id: 3,
            title: "Stage 3:",
            url: "https://practicalselfreliance.com/wp-content/uploads/2018/10/How-to-Grow-Tulsi-Holy-Basil-1-of-2.jpg",
            description: "Leaf development phase"
          },
          {
            id: 4,
            title: "Stage 4:",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2rVvNLDPWGG6-5x0xX7MkJQAYUdB8N0DVA&s",
            description: "Final growth before harvest"
          },
          {
            id: 5,
            title: "Stage 5:",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLmGlVxF3awORZhfs0InFHzcctJtjh8Nevg&s",
            description: "Quality check in field"
          }
        ],
audio: {
  title: "Farmer's Cultivation Log",
  duration: "3:45",
  description: "Daily cultivation observations",
  url: "https://res.cloudinary.com/domogztsv/video/upload/v1765274699/WhatsApp_Audio_2025-12-09_at_3.34.37_PM_stqkpp.ogg"
}
      },
      {
        id: 3,
        name: "Quality Testing Results",
        date: "2025-01-15",
        location: "Certified Laboratory, Chennai",
        description: "Laboratory analysis and purity tests",
        photos: [
          {
            id: 1,
            title: "Lab Test Report",
            url: "https://examinechina.com/wp-content/uploads/2020/10/test-report-emc-certification-pass.png",
            description: "Official test results document"
          },
        ],
        // audio: {
        //   title: "Lab Technician Notes",
        //   duration: "1:45",
        //   description: "Detailed test procedure explanation"
        // }
      },
      {
        id: 4,
        name: "Manufacturing Process",
        date: "2025-01-20",
        location: "GMP Facility, Hyderabad",
        description: "Production under controlled conditions",
        photos: [
          {
            id: 1,
            title: "Extraction Process",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDeRXul19_kP4yyGtaD_EdPWF4t1qqZ0tTDg&s",
            description: "Herb extraction in progress"
          },
        ],
      }
    ]
  }
};

function HerbJourneyTracker() {
  const [activeHerb] = useState(HERB_JOURNEY["1"]);
  const [expandedStage, setExpandedStage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [playingAudio, setPlayingAudio] = useState(null);

  const handleStageClick = (stageId) => {
    setExpandedStage(stageId);
    setSelectedPhoto(null);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleAudioPlay = (stageId) => {
    setPlayingAudio(stageId);
    // In real app: play audio here
    console.log(`Playing audio for stage ${stageId}`);
  };

  return (
    <div className="herb-journey-app">
      {/* Header */}
      <header className="app-header">
        <div className="header-container">
          <div className="logo-section">
            <h1 className="logo-title">AyuSethu</h1>
            <p className="logo-subtitle">Blockchain-Verified Herb Journey</p>
          </div>
          {/* <div className="stats-section">
            <div className="stat">
              <FaCamera className="stat-icon" />
              <span>12 Photos</span>
            </div>
            <div className="stat">
              <FaMicrophone className="stat-icon" />
              <span>4 Audio Logs</span>
            </div>
          </div> */}
        </div>
      </header>

      <main className="app-main">
        {/* Herb Info Banner */}
        <div className="herb-banner">
          <div className="banner-content">
            <h2>{activeHerb.name}</h2>
            <div className="banner-details">
              <span className="batch-badge">Batch: {activeHerb.batchId}</span>
              <span className="verification-badge">
                <FaCheckCircle /> Blockchain Verified
              </span>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <section className="ingredients-section">
          <h3 className="section-title">
            <FaLeaf /> Ingredients Composition
          </h3>
          <p className="section-subtitle">Pure herbal ingredients with verified origins</p>
          
          <div className="ingredients-grid">
            {activeHerb.ingredients.map((ingredient) => (
              <div key={ingredient.id} className="ingredient-card">
                <div className="ingredient-header">
                  <div className="ingredient-icon">
                    {ingredient.icon}
                  </div>
                  <div className="ingredient-name">
                    <h4>{ingredient.name}</h4>
                    <div className="percentage-badge">
                      <FaPercentage /> {ingredient.percentage}
                    </div>
                  </div>
                </div>
                
                <div className="ingredient-details">
                  <div className="detail-item">
                    <span className="detail-label">Source:</span>
                    <span className="detail-value">{ingredient.source}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Purpose:</span>
                    <span className="detail-value">{ingredient.purpose}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Certification:</span>
                    <span className="certification-badge">{ingredient.certification}</span>
                  </div>
                </div>
                
                <div className="ingredient-footer">
                  <FaCheckCircle className="verify-icon-small" />
                  <span>Blockchain Verified</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="ingredients-summary">
            <div className="summary-item">
              <h5>Total Ingredients</h5>
              <p className="summary-value">{activeHerb.ingredients.length} herbs</p>
            </div>
            <div className="summary-item">
              <h5>Organic Content</h5>
              <p className="summary-value">100%</p>
            </div>
            <div className="summary-item">
              <h5>FSSAI Approved</h5>
              <p className="summary-value">33%</p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h3 className="section-title">
            <FaLeaf /> Processing Journey Timeline
          </h3>
          <p className="section-subtitle">Click on any stage to view photos and audio evidence</p>

          <div className="timeline-container">
            {activeHerb.processingStages.map((stage) => (
              <div 
                key={stage.id}
                className={`timeline-stage ${expandedStage === stage.id ? 'active' : ''}`}
                onClick={() => handleStageClick(stage.id)}
              >
                <div className="stage-header">
                  <div className="stage-icon">
                    {stage.id === 1 && <FaCertificate />}
                    {stage.id === 2 && <FaSeedling />}
                    {stage.id === 3 && <FaFlask />}
                    {stage.id === 4 && <FaIndustry />}
                  </div>
                  <div className="stage-info">
                    <h4>{stage.name}</h4>
                    <p className="stage-date">{stage.date}</p>
                    <p className="stage-location">{stage.location}</p>
                  </div>
                  <div className="stage-media-indicator">
                    <span className="photo-count">
                      <FaCamera /> {stage.photos.length}
                    </span>
                    {stage.audio && (
                      <span className="audio-indicator">
                        <FaMicrophone />
                      </span>
                    )}
                  </div>
                </div>

                {expandedStage === stage.id && (
                  <div className="stage-details">
                    <div className="details-header">
                      <h5>{stage.description}</h5>
                    </div>
                    
                    {/* Photos Grid */}
                    <div className="photos-section">
                      <h6>
                        <FaCamera /> Photo Evidence ({stage.photos.length} photos)
                      </h6>
                      <div className="photos-grid">
                        {stage.photos.map((photo) => (
                          <div 
                            key={photo.id}
                            className={`photo-card ${selectedPhoto?.id === photo.id ? 'selected' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePhotoClick(photo);
                            }}
                          >
                            <div className="photo-thumbnail">
                              <div className="thumbnail-placeholder">
                                <FaCamera />
                              </div>
                            </div>
                            <div className="photo-info">
                              <strong>{photo.title}</strong>
                              <p>{photo.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Audio Section */}
{stage.audio && (
  <div className="audio-section">
    <h6>
      <FaMicrophone /> Audio Log
    </h6>

    <div className="custom-audio-wrapper">
      <div className="audio-details-text">
        <h4>{stage.audio.title}</h4>
        <p>{stage.audio.description}</p>
        <span className="audio-duration-tag">⏱️ {stage.audio.duration}</span>
      </div>

      {/* Actual audio player */}
      <audio 
        controls 
        className="custom-audio-player"
      >
        <source src={stage.audio.url} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
)}

                    {/* Selected Photo Display */}
                    {selectedPhoto && (
                      <div className="selected-photo-display">
                        <div className="selected-photo-header">
                          <h5>📸 {selectedPhoto.title}</h5>
                          <button 
                            className="close-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPhoto(null);
                            }}
                          >
                            ✕
                          </button>
                        </div>
                        <div className="photo-preview">
                          <div className="image-container">
                            <img
                              src={selectedPhoto.url.trim()}
                              alt={selectedPhoto.title}
                              className="selected-photo-image"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
                              }}
                            />
                          </div>
                          <div className="photo-description">
                            <p>{selectedPhoto.description}</p>
                            <div className="photo-meta">
                              <span>📅 {stage.date}</span>
                              <span>📍 {stage.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Media Summary */}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="verification-note">
            <FaCheckCircle className="verify-icon" />
            <span>All evidence timestamped and stored on blockchain</span>
          </div>
          <p className="timestamp">
            Last updated: {new Date().toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HerbJourneyTracker;