import React from 'react'
import './header.css'

export default function Header() {
          return (
                    <div className="header">
                              <div className="headerTitle">
                                        {/* <div className="container">
                                                  <span className="headerTitlesm">React & Node</span>
                                                  <span className="headerTitleLg">Blog</span>

                                        </div> */}
                              </div>
                              <img
                                        className="headerImg"
                                        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                              />


                    </div>
          )
}
