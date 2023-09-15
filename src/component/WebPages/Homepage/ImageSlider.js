import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
<Carousel responsive={responsive}>
  <div> 
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                    alt=""
                    className="post-image"
                  />
                </div> <div className="d-flex  padding-bottom">
                <div>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                    alt=""
                    className="post-image"
                  />
                </div>
                <div className="aligntext-left margin10px">
                  <span className="fontsize18 aligntext-left">
                    No height when the content div expands
                  </span>
                  <p className="paragraphStyle">
                    Reimagining masculinity Reimagining masculinity Reimagining
                    masculinity Reimagining masculinity Reimagining masculinity.
                  </p>
                </div>
              </div>
              <div className="d-flex  padding-bottom">
                <div>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                    alt=""
                    className="post-image"
                  />
                </div>
                <div className="aligntext-left margin10px">
                  <span className="fontsize18 aligntext-left">
                    No height when the content div expands
                  </span>
                  <p className="paragraphStyle">
                    Reimagining masculinity Reimagining masculinity Reimagining
                    masculinity Reimagining masculinity Reimagining masculinity.
                  </p>
                </div>
              </div>
              <div className="d-flex  padding-bottom">
                <div>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                    alt=""
                    className="post-image"
                  />
                </div>
                <div className="aligntext-left margin10px">
                  <span className="fontsize18 aligntext-left">
                    No height when the content div expands
                  </span>
                  <p className="paragraphStyle">
                    Reimagining masculinity Reimagining masculinity Reimagining
                    masculinity Reimagining masculinity Reimagining masculinity.
                  </p>
                </div>
              </div>
              <div className="d-flex  padding-bottom">
                <div>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                    alt=""
                    className="post-image"
                  />
                </div>
                <div className="aligntext-left margin10px">
                  <span className="fontsize18 aligntext-left">
                    No height when the content div expands
                  </span>
                  <p className="paragraphStyle">
                    Reimagining masculinity Reimagining masculinity Reimagining
                    masculinity Reimagining masculinity Reimagining masculinity.
                  </p>
                </div>
              </div>
</Carousel>;