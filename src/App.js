
import './App.css';
import { Footer } from './components/Footer';
import { Logout } from './components/Logoutage';
import { Content } from './components/MainContent';
import { SideBar } from './components/Sidebar';
import { TopBar } from './components/Topbar';


function App() {
  return (
    <div className="App">
      {/* Page Wrapper */}
      <div id="wrapper">
        <SideBar />
        {/* Content Wrapper */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/*Main Content */}
          <div id="content">
            <TopBar />
            {/* Begin Page Content  */}
            <div class="container-fluid">
              <Content />
            </div>
          </div>
          {/* Footer  */}
          <Footer />
        </div>
      </div>
      <Logout />
    </div>
  );
}

export default App;
