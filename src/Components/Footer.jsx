import React from 'react';

const Footer = () => {
  return (
    <footer className="theme-footer-area">
      {/* Footer Top Section */}
      <div className="footer-top pt-20 pb-10">
        <div className="container mx-auto">
          <div className="row">
            {/* Logo & Description */}
            <div className="col-lg-3 mb-8">
              <div className="footer-widget">
                <div className="footer-logo mb-4">
                  <a href="index.html">
                    <img src="assets/media/logo.svg" alt="Logo" className="w-full" />
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  The stars will never align, and the traffic lights of life will never all be green at the same time. The stars will never align, and the traffic lights.
                </p>
                <div className="footer-social flex space-x-4 mt-4">
                  <a href="#"><i className="icofont-facebook text-xl"></i></a>
                  <a href="#"><i className="icofont-twitter text-xl"></i></a>
                  <a href="#"><i className="icofont-instagram text-xl"></i></a>
                  <a href="#"><i className="icofont-linkedin text-xl"></i></a>
                </div>
              </div>
            </div>

            {/* Resources Links */}
            <div className="col-lg-3 mb-8">
              <div className="footer-widget ml-10">
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="javascript:void(0)">What’s New</a></li>
                  <li><a href="javascript:void(0)">Developers</a></li>
                  <li><a href="javascript:void(0)">Releases</a></li>
                  <li><a href="javascript:void(0)">Support</a></li>
                  <li><a href="javascript:void(0)">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 mb-8">
              <div className="footer-widget">
                <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
                <ul className="space-y-2">
                  <li><a href="javascript:void(0)">What’s New</a></li>
                  <li><a href="javascript:void(0)">Developers</a></li>
                  <li><a href="javascript:void(0)">Releases</a></li>
                  <li><a href="javascript:void(0)">Support</a></li>
                  <li><a href="javascript:void(0)">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-lg-4 mb-8">
              <div className="footer-widget ml-8">
                <h4 className="text-lg font-semibold mb-4">Subscribe Now</h4>
                <div className="footer-newsletter-wrapper">
                  <form action="newsletter.php" method="post">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      name="email"
                      className="border border-gray-300 p-2 w-full mb-4"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                      Subscribe
                    </button>
                    <label className="custom-label flex items-center mt-2">
                      <input type="checkbox" className="mr-2" />
                      <span>I have read and accept the Terms & Policy</span>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="footer-divider border-t border-gray-300"></div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom py-4">
        <div className="container mx-auto">
          <div className="row flex justify-between items-center">
            {/* Copyright Text */}
            <div className="text-sm text-gray-500">
              <p>Copyright © Beatrix 2023. All rights reserved</p>
            </div>
            {/* Footer Menu */}
            <div className="footer-menu">
              <ul className="flex space-x-4 text-sm">
                <li><a href="javascript:void(0)">Privacy Policy</a></li>
                <li><a href="javascript:void(0)">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;