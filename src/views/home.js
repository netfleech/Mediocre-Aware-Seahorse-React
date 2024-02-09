import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mediocre Aware Seahorse</title>
        <meta property="og:title" content="Mediocre Aware Seahorse" />
      </Helmet>
      <div className="home-header"></div>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Professional Towing and Terrain Work
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Reliable and Efficient Transportation Solutions</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <button className="buttonFilled">Get a Quote</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Our Key Features
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Experience our top-notch services and cutting-edge
                      technology
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Towing Services"
                subHeading="Efficient and reliable towing services for cars of all sizes"
              ></FeatureCard>
              <FeatureCard
                heading="Terrain Work"
                subHeading="Specialized equipment for handling challenging terrains with ease"
              ></FeatureCard>
              <FeatureCard
                heading="Gripper Technology"
                subHeading="Advanced gripper technology for secure and safe transportation"
              ></FeatureCard>
              <FeatureCard
                heading="24/7 Availability"
                subHeading="Round-the-clock service to assist you anytime, anywhere"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose Your Plan</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Select the perfect plan for your transportation needs
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text36 heading3">Free</span>
                <span className="bodySmall">
                  A short description for the Free plan
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text40">✔</span>
                  <span className="bodySmall">Feature 1 of the Free plan</span>
                </div>
                <div className="home-container10">
                  <span className="home-text41">✔</span>
                  <span className="bodySmall">Feature 2 of the Free plan</span>
                </div>
                <div className="home-container11">
                  <span className="home-text42">✔</span>
                  <span className="bodySmall">Feature 3 of the Free plan</span>
                </div>
                <div className="home-container12">
                  <span className="home-text43">✔</span>
                  <span className="bodySmall">Feature 4 of the Free plan</span>
                </div>
              </div>
              <button className="home-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container13">
                <span className="home-text44 heading3">BASIC</span>
                <span className="bodySmall">
                  A short description for the Basic plan
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text45">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">50</span>
                <span className="home-text48">/ month</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text49">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home-container17">
                  <span className="home-text51">✔</span>
                  <span className="bodySmall">Feature 1 of the Basic plan</span>
                </div>
                <div className="home-container18">
                  <span className="home-text52">✔</span>
                  <span className="bodySmall">Feature 2 of the Basic plan</span>
                </div>
                <div className="home-container19">
                  <span className="home-text53">✔</span>
                  <span className="bodySmall">Feature 3 of the Basic plan</span>
                </div>
                <div className="home-container20">
                  <span className="home-text54">✔</span>
                  <span className="bodySmall">Feature 4 of the Basic plan</span>
                </div>
              </div>
              <button className="home-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container21">
                <span className="home-text55 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  A short description for the Pro plan
                </span>
              </div>
              <div className="home-container22">
                <span className="home-text58">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">100</span>
                <span className="home-text61">/ month</span>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <span className="home-text62">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home-container25">
                  <span className="home-text64">✔</span>
                  <span className="bodySmall">Feature 1 of the Pro plan</span>
                </div>
                <div className="home-container26">
                  <span className="home-text65">✔</span>
                  <span className="bodySmall">Feature 2 of the Pro plan</span>
                </div>
                <div className="home-container27">
                  <span className="home-text66">✔</span>
                  <span className="bodySmall">Feature 3 of the Pro plan</span>
                </div>
                <div className="home-container28">
                  <span className="home-text67">✔</span>
                  <span className="bodySmall">Feature 4 of the Pro plan</span>
                </div>
              </div>
              <button className="home-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Transportation Services for Towing and Terrain Work
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  We specialize in providing top-notch transportation services
                  for towing cars and performing terrain work with a gripper.
                  With our experienced team and state-of-the-art equipment, we
                  ensure reliable and efficient solutions for all your
                  transportation needs.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text85 heading2">Common questions</h2>
              <span className="home-text86 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container30">
              <Question1
                answer="We provide towing services for cars as well as terrain work with a gripper."
                question="What services does your transportation company provide?"
              ></Question1>
              <Question1
                answer="You can request a towing service by contacting our customer support team or using our online booking form."
                question="How can I request a towing service?"
              ></Question1>
              <Question1
                answer="We serve the entire [insert service area] region. Please contact us to confirm if we cover your specific location."
                question="What areas do you serve?"
              ></Question1>
              <Question1
                answer="Yes, we offer 24/7 emergency towing services. You can rely on us for prompt assistance during emergencies."
                question="Do you offer emergency towing services?"
              ></Question1>
              <Question1
                answer="We can tow cars, motorcycles, vans, trucks, and other small to medium-sized vehicles. Please contact us if you have any specific requirements."
                question="What types of vehicles can you tow?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer"></div>
    </div>
  )
}

export default Home
