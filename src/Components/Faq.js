import React from "react";

const Faq = () => {
  return (
    <div>
      <h2 className="faq">FAQ</h2>
      <form action="">
        <div className="Faq-content">
          <div className="faq-t-curd">
            <input type="radio" />

            <ul className="Faq-curd">
              <li>
                <svg
                  className="svg-curd"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 14V8H0V6H6V0H8V6H14V8H8V14H6Z" fill="#5C5C5C" />
                </svg>
              </li>
              <li>
                <svg
                  className="svg-curd"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 19H6.414L15.728 9.68599L14.314 8.27199L5 17.586V19ZM21 21H3V16.757L16.435 3.32199C16.6225 3.13452 16.8768 3.02921 17.142 3.02921C17.4072 3.02921 17.6615 3.13452 17.849 3.32199L20.678 6.15099C20.8655 6.33852 20.9708 6.59283 20.9708 6.85799C20.9708 7.12316 20.8655 7.37746 20.678 7.56499L9.243 19H21V21ZM15.728 6.85799L17.142 8.27199L18.556 6.85799L17.142 5.44399L15.728 6.85799Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </li>
              <li>
                <svg
                  className="svg-curd"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 18C2.45 18 1.979 17.804 1.587 17.412C1.195 17.02 0.999333 16.5493 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.804 17.021 14.412 17.413C14.02 17.805 13.5493 18.0007 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </li>
            </ul>
          </div>

          {Array(2).fill("").map((e,index)=> <div key={index}>
                <div className="faq-inputs">
                  <div className="faq-radio">
                    <input type="radio" />
                  </div>

                  <div className="faq-around-input">
                    <label for="fname">Q</label>
                    <input
                      type="text"
                      className="faq-input"
                      name="fname"
                      placeholder="input text"
                      size="120"
                    />
                    <br />
                    <label for="fname">A</label>
                    <input
                      type="text"
                      className="faq-input"
                      name="fname"
                      placeholder="input text"
                      size="120"
                    />
                    <br />
                  </div>
                </div>
              </div>
            )}
        </div>
      </form>
      <button className="done-button">Done</button>
    </div>
  );
};

export default Faq;
