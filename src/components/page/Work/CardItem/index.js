import "./carditem.css";
import CPlusPlus from "../../../../images/c++.png";
import CSharp from "../../../../images/csharp-dotnet-1.png";

const Carditem = () => {
  return (
    <>
      <div className="card-item">
        <div className="for-img a">
          <img src={CPlusPlus} alt="" className="for-img-pic" />
        </div>
        <div className="work-t-p-b">
          <div className="work-t">
            <h3>C++</h3>
          </div>
          <div className="work-p">
            <p>Object Oriented Programmig.</p>
          </div>
          <div className="work-b">
            <button
              className="work-btn"
              onClick={() => {
                window.location.href =
                  "https://github.com/TarikCata/Programiranje-II";
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>

      <div className="card-item">
        <div className="for-img b">
          <img src={CSharp} alt="" className="for-img-pic" />
        </div>
        <div className="work-t-p-b">
          <div className="work-t">
            <h3>C#</h3>
          </div>
          <div className="work-p">
            <p>WinForms in .NET Framework.</p>
          </div>
          <div className="work-b">
            <button
              className="work-btn"
              onClick={() => {
                window.location.href =
                  "https://github.com/TarikCata/Programiranje-III";
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      <div className="card-item">
        <div className="for-img a">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--1Udov0n---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/d9taiqwp0968js9hcn5u.png"
            alt=""
            className="for-img-pic"
          />
        </div>
        <div className="work-t-p-b">
          <div className="work-t">
            <h3>HTML,CSS,JavaScript</h3>
          </div>
          <div className="work-p">
            <p></p>
          </div>
          <div className="work-b">
            <button
              className="work-btn"
              onClick={() => {
                window.location.href =
                  "https://github.com/TarikCata/Web-Razvoj-I-Dizajn";
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carditem;
