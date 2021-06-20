import React from 'react'
import  './topbar.css'

export default function Topbar() {
          return (
                    <div className="top">
                               <div className="topleft">
                               <i className="topicon fab fa-facebook-square"></i>
                               <i className="topicon fab fa-twitter-square"></i>
                               <i className="topicon fab fa-pinterest-square"></i>
                               <i className="topicon fab fa-instagram-square"></i>
                                         
                               </div>
                               <div className="topcenter">
                                         <ul className="toplist">
                                                  <li className="toplistItem">Home</li>
                                                  <li className="toplistItem">About</li>

                                                  <li className="toplistItem">Contact</li>
                                                  <li className="toplistItem">Write</li>
                                                  <li className="toplistItem">Logout</li>


                                         </ul>
                               </div>
                              
                              <div className="topright">
                              <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <i class=" searchBar fas fa-search"></i>
                              </div>
                             
                             
                              
                    </div>
          )
}
