import React from 'react';
import Header from '../../header/header';
import Post from '../../post/post';
import Sidebar from '../../slidebar/sidebar';
import './home.css';

export default function Home() {
          return (
                    <div>
                              <Header />
                              <div className="home">
                                        <Post />
                                        <Sidebar/>
                              </div>
                              
                    </div>
          )
}
