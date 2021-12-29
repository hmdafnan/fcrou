import React from 'react';

function RenderTallyPrice({item}) {
  if(item.id < 3){
    return (
    <div className="col-md-3 tally-prices">
      <div className="featured-card-image-tally">
        <img src={item.image} alt={item.name} className="img-responsive" height="300px" />
      </div>
      <br/>
      <h4>{item.name}</h4>
      <div className="featured-price">
        <p>
          <span className="new-price">&#8377; {item.price}</span>
        </p>
      </div>
    </div>
  );
  } if(item.id === 3) {
    return (
    <div className="offset-3 col-md-3"> &nbsp;
      <div  className="tally-prices">
      <div className="featured-card-image-tally">
        <img src={item.image} alt={item.name} className="img-responsive" height="300px" />
      </div>
      <br/>
      <h4>{item.name}</h4>
      <div className="featured-price">
        <p>
          <span className="new-price">&#8377; {item.price}</span>
        </p>
      </div>
    </div>
    &nbsp;
    </div>
    
    )
  } if(item.id === 4) {
    return (
      <div className="col-md-3"> &nbsp;
      <div  className="tally-prices">
      <div className="featured-card-image-tally">
        <img src={item.image} alt={item.name} className="img-responsive" height="300px" />
      </div>
      <br/>
      <h4>{item.name}</h4>
      <div className="featured-price">
        <p>
          <span className="new-price">&#8377; {item.price}</span>
        </p>
      </div>
    </div>
    </div>
    )
  }
  
}

/**
 * 
 * @param {tallyCard} props 
 * @returns array of rendered tally cards
 */

function returnTallyPrices(tallyElement) {
  let renderedTallyArr = []
  for (let i = 0; i < tallyElement.length; i++) {
    const element = tallyElement[i];
    renderedTallyArr.push( <RenderTallyPrice key={element.id} item={element} /> )
  }
  return renderedTallyArr;
}

function Tally(props) {
  return(
    <div className="container-fluid bgc">
      <div className="row tally-main-logo">
        <img className="offset-1 col-10 offset-1 tally-banner" src="/assets/tally/tallymainlogo.jpg" alt="tally" height="80%" />
        <h1 className="offset-2 col-8">Manage your accounts at your fingertips</h1>
      </div>
      <div className="row tally-page-1">
        <div className="col-md-3 tally-page-pic">
          <img src="/assets/tally/growth.png" alt="tally1" height="100px" />
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
          <img src="/assets/tally/cash-flow.png" alt="Better control over cash flow" height="100px" />
        </div>
        <div className="col-md-3 tally-page-pic">
          <img src="/assets/tally/productivity.png" alt="tally1" height="100px" />
        </div>
        <div className="col-md-8 tally-page-pic">
          <h3 style={{textAlign:"left"}}>Improved productivity</h3>
          <p style={{textAlign:"left"}}>With the speed that Tally brings, you can get things done quickly and save precious time, helping you do more for less.
           Insightful reports at blink of eye help you make confident decisions and plan the growth of your business better.
          </p>
        </div>
      </div>
      <div className='row'>&nbsp;
        {returnTallyPrices(props.tallyCard)}
        {console.log(props.tallyCard)}
      </div>
    </div>
  );
}

export default Tally;