import React from 'react';

const Footer = () => {
  return (
    <footer className="theme-footer-area bg-gray-800 text-white">
      <div className="footer-top pt-10 pb-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap gap-10">
            <div className="w-full lg:w-1/4 ">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="assets/01.png" alt="Logo" />
                  </a>
                </div>
                <p className="mt-4">The stars will never align, and the traffic lights of life will never all be green at the same time.</p>
                <div className="footer-social mt-4">
                  <a href="#" className="mr-2"><i className="icofont-facebook"></i></a>
                  <a href="#" className="mr-2"><i className="icofont-twitter"></i></a>
                  <a href="#" className="mr-2"><i className="icofont-instagram"></i></a>
                  <a href="#"><i className="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 mb-10">
              <div className="footer-widget">
                <h4 className="widget-title">Resources</h4>
                <ul className="menu space-y-2 mt-4">
                  <li><a href="javascript:void(0)">What’s New</a></li>
                  <li><a href="javascript:void(0)">Developers</a></li>
                  <li><a href="javascript:void(0)">Releases</a></li>
                  <li><a href="javascript:void(0)">Support</a></li>
                  <li><a href="javascript:void(0)">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/4 mb-10">
              <div className="footer-widget">
                <h4 className="widget-title">Useful Links</h4>
                <ul className="menu space-y-2 mt-4">
                  <li><a href="javascript:void(0)">What’s New</a></li>
                  <li><a href="javascript:void(0)">Developers</a></li>
                  <li><a href="javascript:void(0)">Releases</a></li>
                  <li><a href="javascript:void(0)">Support</a></li>
                  <li><a href="javascript:void(0)">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/4 mb-10">
              <div className="footer-widget">
                <h4 className="widget-title">Subscribe Now</h4>
                <div className="footer-newsletter-wrapper mt-4">
                  <form action="newsletter.php" method="post">
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      name="email" 
                      id="footer-email" 
                      className="border rounded p-2 w-full"
                    />
                    <input 
                      type="submit" 
                      value="Subscribe" 
                      id="footer-submit" 
                      className="bg-blue-600 text-white rounded p-2 mt-2 cursor-pointer w-full"
                    />
                    <label className="custom-label mt-2 flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">I have read and accept the Terms & Policy</span>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider bg-gray-700 h-px"></div>
      <div className="footer-bottom py-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="copyright-text text-center md:text-left mb-4 md:mb-0">
              <p>Copyright © HeyDrown Music 2024. All rights reserved</p>
            </div>
            <div className="footer-menu">
              <ul className="flex space-x-4">
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
