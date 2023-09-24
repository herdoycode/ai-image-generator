import "./App.scss";
import ThemeSwitch from "./components/ThemeSwitch";
const App = () => {
  return (
    <>
      <div className="app">
        <div className="main">
          <div className="left">
            <div className="text">
              <p>Describe your creation in detail</p>
              <textarea
                name=""
                id=""
                cols={15}
                rows={6}
                placeholder="A white bird flying over a volcano"
              />
            </div>
            <div className="file-input">
              <label htmlFor="file">
                <img src="/imgLogo.png" alt="" />
                <span>Add your photo</span>
              </label>
              <input className="none" type="file" id="file" />
            </div>
            <div className="select-styles">
              <div className="label">
                <p>
                  Select style <span>(optional)</span>{" "}
                </p>
              </div>
              <div className="option">
                <div className="item">
                  <img src="/cartoon.jpg" alt="" />
                  <div className="category">
                    <p>Cartoon</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/3d.jpg" alt="" />
                  <div className="category">
                    <p>3D</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/aneme.jpg" alt="" />
                  <div className="category">
                    <p>Aneme</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/ink.jpg" alt="" />
                  <div className="category">
                    <p>Ink</p>
                  </div>
                </div>
              </div>
            </div>
            <button>Generate</button>
          </div>
          <div className="right">
            <img src="/gene.png" alt="" />
            <h3>Your creations will appear here</h3>
          </div>
        </div>
      </div>
      <ThemeSwitch />
    </>
  );
};

export default App;
