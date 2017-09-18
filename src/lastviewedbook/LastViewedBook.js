import React, { Component } from 'react';
import './LastViewedBook.css';

export class LastViewedBook extends Component {

  render() {
    return (
      <div className="col-12 col-sm-12 myreads-lvb">
        <div className="row">
          <div className="myreads-lvb-section col-12 col-sm-12">
          </div>
          <div className="col-4 col-sm-4 ml-auto col-auto text-center">
            <img style={{maxWidth: "100%"}}
              className="img-thumbnail"
              src="http://books.google.com/books/content?id=0wmEQviGLSwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="myreads-lvb-rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-5 col-sm-5 mr-auto myreads-lvb-info">
            <article className="myreads-lvb-article">
              <header>
                <h5 className="myreads-lvb-title">Dexter Is Delicious</h5>
                <small>Jeff Lindsay</small>
              </header>
              <section className="myreads-lvb-synopsis">
                jashda  Ksjdhak kajhd asjd hakjshdaksh dkjah sdakhjs djk jashda 
              </section>
            </article>
            <div className="myreads-lvb-status-bar">
              <button type="button" className="btn btn-outline-danger btn-block">more</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default LastViewedBook;
