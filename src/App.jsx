import './App.css';
import { IoSearch } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';

export default function App() {

  return (
    <>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="n1">
          <img
            src="https://www.asrcfederal.com/wp-content/uploads/2021/04/ASRC-Federal_Logo_Horizontal-color.png"
            style={{ height: '100px' }}
          />
          <div className="right-nav">
            <div>
              <div>Offerings</div>
              <FaAngleDown />
            </div>
            <div>
              <div>Markets</div>
              <FaAngleDown />
            </div>
            <div>
              <div>Careers</div>
              <FaAngleDown />
            </div>
            <div>
              <div>About Us</div>
              <FaAngleDown />
            </div>
            <button id="contactUsBtn">Contact Us</button>
            <IoSearch size={30} />
          </div>
        </div>
      </nav>
      <main>
        <div className="main-inner">
          <div>
            <div style={{fontSize: '4rem'}}>Mock up made by Andres.</div>
            <div style={{fontSize: '1.2rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente atque, debitis fuga porro eum doloremque, et praesentium error labore id laborum pariatur dignissimos neque excepturi, dolore sed quod cupiditate hic.</div>
            <button id='learnMoreBtn'>Learn more</button>
          </div>
        </div>
      </main>

      <div className="line-wrapper"></div>
    </>
  );
}