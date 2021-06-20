import React from 'react'
import './sidebar.css'

export default function Sidebar() {
          return (
                    <div className="sidebar">
                              <div className="sidebarItem">
                                        <span className="sidebarTitle">About Me</span>

                                        <img
                                                  src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                                                  alt=""
                                        />
                                        <p>
                                                  Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                                                  amet ex esse.Sunt eu ut nostrud id quis proident.
                                        </p>
                              </div>
                              <div className="sidebarItem">
                                        <span className="sidebarTitle">Categorya</span>
                                        <ul className="sidebarList">
                                                  <li className="sidebarListItem">Music</li>
                                                  <li className="sidebarListItem">Criket</li>
                                                  <li className="sidebarListItem">Technlogy</li>
                                                  <li className="sidebarListItem">News</li>
                                                  <li className="sidebarListItem">Sport</li>
                                                  <li className="sidebarListItem">Gaming</li>
                                                  <li className="sidebarListItem">Realtionship</li>
                                                  <li className="sidebarListItem">Love</li>
                                                  <li className="sidebarListItem">Fiction</li>

                                        </ul>
                              </div>


                              <div className="sidebarItem">
                                        <span className="sidebarTitle">Follow us</span>
                                        <div className="sidebarSocial">
                                        <i className="sidebaricon fab fa-facebook-square"></i>
                                        <i className="sidebaricon fab fa-twitter-square"></i>
                                        <i className="sidebaricon fab fa-pinterest-square"></i>
                                        <i className="sidebaricon fab fa-instagram-square"></i>
                                      </div>            
                               </div>
                    </div>
          )
}
