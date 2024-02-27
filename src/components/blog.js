import React from "react";
import "./blog.css";
import Rectangle1 from "../pic/Rectangle1.png";
import Logo from "../pic/logo.png";
import Vector1 from "../pic/Vector1.png";
import Rectangle68 from "../pic/Rectangle68.png";
import Rectangle67 from "../pic/Rectangle67.png";
import Rectangle66 from "../pic/Rectangle66.png";
import Vector5 from "../pic/Vector5.png";
import Vector6 from "../pic/Vector6.png";
import Vector7 from "../pic/Vector7.png";
import cd1 from "../pic/cd1.png";
import cd2 from "../pic/cd2.png";
import cd3 from "../pic/cd3.png";
import cd4 from "../pic/cd4.png";
import blog1 from "../pic/blog1.png";
import blog2 from "../pic/blog2.png";
import blog3 from "../pic/blog3.png";
import blog4 from "../pic/blog4.png";
import blog5 from "../pic/blog5.png";

function blog() {
  return (
    <>
      <div className="top-blog">
        <img className="setpic1" src={Rectangle1} />
        <div className="box-in-topblog">
          <img src={Logo} />
          <p className="top-font01">Blog</p>
          <p className="setvector1">
            Home <img src={Vector1} /> Blog
          </p>
        </div>
      </div>
      <div className="doc-left">
        <img src={Rectangle68} />

        <div className="box-doc-left1">
          <img className="all-doc-icon" src={Vector5} />
          <p>Admin</p>
          <img className="all-doc-icon" src={Vector6} />
          <p>14 Oct 2022</p>
          <img className="all-doc-icon" src={Vector7} />
          <p>Wood</p>
        </div>
        <p className="font-doc-col1">Going all-in with millennial design</p>
        <p className="font-doc-col2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button className="Read-but-blog">Read More</button>

        <img src={Rectangle67} />

        <div className="box-doc-left1">
          <img className="all-doc-icon" src={Vector5} />
          <p>Admin</p>
          <img className="all-doc-icon" src={Vector6} />
          <p>14 Oct 2022</p>
          <img className="all-doc-icon" src={Vector7} />
          <p>Hand</p>
        </div>
        <p className="font-doc-col1">Exploring new ways of decorating</p>
        <p className="font-doc-col2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button className="Read-but-blog">Read More</button>

        <img src={Rectangle66} />

        <div className="box-doc-left1">
          <img className="all-doc-icon" src={Vector5} />
          <p>Admin</p>
          <img className="all-doc-icon" src={Vector6} />
          <p>14 Oct 2022</p>
          <img className="all-doc-icon" src={Vector7} />
          <p>Wood</p>
        </div>
        <p className="font-doc-col1">Handmade pieces that took time to make</p>
        <p className="font-doc-col2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button className="Read-but-blog">Read More</button>
      </div>

      <div className="crop-doc-right">
        <div className="doc-right-top">
          <input className="box-blog" />
          <div className="crop-cate-f">
            <p className="cate-f">Categories</p>
            <div className="set-2"></div>
          </div>

          <div className="crop-f2-f3">
            <div className=" crop-cate-f2">
              <p>Crafts</p>
              <p> Design</p>
              <p>Handmade</p>
              <p>interior </p>
              <p> wood</p>
            </div>
            <div className="crop-cate-f3">
              <p>2</p>
              <p>8</p>
              <p>7</p>
              <p>1</p>
              <p>6</p>
            </div>
          </div>
        </div>

        <div className="doc-right-bot">
          <div className="doc-col01"><p className="Posts-f" >Recent Posts</p></div>

          <div className="doc-col1">
            <div className="pixel-1">
              <img className="blog-icon" src={blog1} />
            </div>
            <div className="pixel-row">
              <div className="pixel-2">
                <p className="font-pixel2">
                  Going all-in with <br />
                  millennial design
                </p>
              </div>
              <div className="pixel-3">
                <p className="font-pixel3">03 Aug 2022</p>
              </div>
            </div>
          </div>

          <div className="doc-col1">
            <div className="pixel-1">
              <img className="blog-icon" src={blog2} />
            </div>
            <div className="pixel-row">
              <div className="pixel-2">
                <p className="font-pixel2">
                Exploring new ways  <br />
                of decorating
                </p>
              </div>
              <div className="pixel-3">
                <p className="font-pixel3">03 Aug 2022</p>
              </div>
            </div>
          </div>

          <div className="doc-col1">
            <div className="pixel-1">
              <img className="blog-icon" src={blog3} />
            </div>
            <div className="pixel-row">
              <div className="pixel-2">
                <p className="font-pixel2">
                Handmade pieces <br />
                that took time to make
                </p>
              </div>
              <div className="pixel-3">
                <p className="font-pixel3">03 Aug 2022</p>
              </div>
            </div>
          </div>
          <div className="doc-col1">
            <div className="pixel-1">
              <img className="blog-icon" src={blog4} />
            </div>
            <div className="pixel-row">
              <div className="pixel-2">
                <p className="font-pixel2">
                Modern home in  <br />
                Milan
                </p>
              </div>
              <div className="pixel-3">
                <p className="font-pixel3">03 Aug 2022</p>
              </div>
            </div>
          </div>
          <div className="doc-col1">
            <div className="pixel-1">
              <img className="blog-icon" src={blog5} />
            </div>
            <div className="pixel-row">
              <div className="pixel-2">
                <p className="font-pixel2">
                Colorful office <br />
                redesign 
                </p>
              </div>
              <div className="pixel-3">
                <p className="font-pixel3">03 Aug 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="doc-right-bot1"></div>
      </div>
      <div className="crop-but-page">
        <div className="but-page">
          <button className="but-1-s">1</button>
          <button className="but-2-s">2</button>
          <button className="but-3-s">3</button>
          <button className="but-next-s">Next</button>
        </div>
      </div>

      <div className="credit-box">
        <div className="in-credit">
          <div className="all-cd-icon">
            <img src={cd1} />
          </div>
          <div>
            <p className="font-col1">High Quality</p>
            <p className="font-col2">crafted from top materials</p>
          </div>

          <div className="all-cd-icon">
            <img src={cd2} />
          </div>
          <div>
            <p className="font-col1">Warranty Protection</p>
            <p className="font-col2">Over 2 years</p>
          </div>
          <div className="all-cd-icon">
            <img src={cd3} />
          </div>
          <div>
            <p className="font-col1">Free Shipping</p>
            <p className="font-col2">Order over 150 $</p>
          </div>
          <div className="all-cd-icon">
            <img src={cd4} />
          </div>
          <div>
            <p className="font-col1">24 / 7 Support</p>
            <p className="font-col2">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default blog;
