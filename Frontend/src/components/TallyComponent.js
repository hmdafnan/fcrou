import React from 'react';

function Tally(props) {
  return(
    <div className="container-fluid">
      <div className="row tally-main-logo">
        <img className="offset-1 col-10 offset-1" src="/assets/tally/tallymainlogo.jpg" alt="tally" height="80%" />
        <h1 className="offset-2 col-8">Manage your accounts at your fingertips</h1>
      </div>
      <div className="row tally-page-1">
        <div className="col-md-3 tally-page-pic">
          <img src="/assets/tally/tally.jpg" alt="tally1" />
        </div>
        <div className="col-md-8 tally-page-pic">
          <h3 style={{textAlign:"left"}}>Manage business growth</h3>
          <p style={{textAlign:"left"}}>Tally.ERP 9, a software that grows with you. 
              You are assured that your needs, as you grow are easily handled. 
              With Tally, you can manage multiple companies and incrementally add features such as multiple go-downs, multi-currency, order process, cost centres etc. 
              This helps you get rid of complexities, and in turn, focus on business growth.
          </p>
        </div>
        <div className="col-md-6 offset-md-3 tally-page-pic">
          <h3 style={{textAlign:"right"}}>Better control over cash flow</h3>
          <p style={{textAlign:"right"}}>Quick and hassle-free bills receivables and payable management help you to get 
            paid faster as well as managing payment timelines. 
            Also, Tally facilitates easy and efficient stock movement, making it possible to optimize the cash flow. 
          </p>
        </div>
        <div className="col-md-2 col-2 tally-page-pic">
          <img src="/assets/tally/tally1.jpg" alt="tally1" />
        </div>
        <div className="col-md-3 tally-page-pic">
          <img src="/assets/tally/tally2.jpg" alt="tally1" />
        </div>
        <div className="col-md-8 tally-page-pic">
          <h3 style={{textAlign:"left"}}>Improved productivity</h3>
          <p style={{textAlign:"left"}}>With the speed that Tally brings, you can get things done quickly and save precious time, helping you do more for less.
           Insightful reports at blink of eye help you make confident decisions and plan the growth of your business better.
          </p>
        </div>
      </div>
      <div className='row'>
        asdggh
      </div>
    </div>
  );
}

export default Tally;