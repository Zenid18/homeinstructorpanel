import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Layout({
  children,
  sidebarActive,
  setSidebarActive,
  courseLayout,
  heading,
}) {
  const [sidebarShow, setSidebarShow] = useState(true);
  return (
    <div>
      <div>
        <Navbar
          sidebarShow={sidebarShow}
          setSidebarShow={setSidebarShow}
          courseLayout={courseLayout}
          heading={heading}
        />
      </div>
      <div>
        <Sidebar
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
          sidebarShow={sidebarShow}
          setSidebarShow={setSidebarShow}
          courseLayout={courseLayout}
        />
      </div>
      <div
        className={`children-div  transition ${
          courseLayout ? "px-0 pt-3" : "px-4 py-3"
        }`}
        style={courseLayout ? { background: "var(--white)" } : {}}
      >
        {children}
      </div>
    </div>
  );
}
