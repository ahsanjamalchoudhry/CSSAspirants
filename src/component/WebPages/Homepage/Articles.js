import React from 'react'

function Articles() {
  return (
    <div>
         <div className="newarticle-box">
          <div className="allariticles-box d-flex">
            <div className="articlesimage">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                alt=""
                width={250}
                height={250}
              />
              <p className="article-para">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
            <div className="articlesimage">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                alt=""
                width={250}
                height={250}
              />
              <p className="article-para">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
            <div className="articlesimage">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                alt=""
                width={250}
                height={250}
              />
              <p className="article-para">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
            <div className="articlesimage">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                alt=""
                width={250}
                height={250}
              />
              <p className="article-para">
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>
          <div className="articlestext aligntext-left">
            <h3>
              All Articles ({" "}
              <a href="" className=" descriptiontext">
                View All
              </a>{" "}
              )read Docoments
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Articles
