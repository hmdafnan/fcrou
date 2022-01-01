import React from 'react';
import HCarousel from './HomeCarousel';

function RenderFeatured({item}) {
  return(
    <div className="col-md-3 featured-card">
      <div className="featured-card-image">
        <img src={item.image} alt={item.name} className="img-responsive"/>
      </div>
      <br/>
      <h4>{item.name}</h4>
      <div className="featured-price">
        <p>
          <span className="old-price">&#8377; {item.oldPrice}</span>&nbsp;&nbsp;&nbsp;<span className="new-price">&#8377; {item.price}</span>
        </p>
      </div>
    </div>
  );
}

//isme array products ka jaega
/**
 * @param products object's array
 * 
 */
const returnFeatProducts = (products) => {

  let renderedFeatArr = []
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    renderedFeatArr.push( <RenderFeatured key={element.id} item={element} /> )
  }
  return renderedFeatArr;
}

function Home(props) {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return(
    <div className="container-fluid bgc">
      <HCarousel className="home-carousel"/>
      <h1 style={{color:"floralwhite"}}>WHY CHOOSE US?</h1>
      <p style={{color:"floralwhite"}} className="">
        #TallyPrimeSoftware #TallyOnCloud #TallyCustomization #TallyServer 
        #TallyPrimeDeveloper #LaptopRepairing #HPlaptopRepairing #DellLaptopRepairing 
        #PrinterRepairing #CCTVCameraSalesAndService
        #NetworkSolutions #DataRecovery #ComputerRepair
      </p>
      <p style={{fontSize:"25px"}}>Fastest repair service with best price!</p>
      <span className="partition"></span> 
      <div className="row home-section2">
        <div className="col-sm-3">
          <div className="icon"> <img src="/assets/home/cloud-new.png" alt="#" height="90px" width="120px"/> </div>
          <h4 className="theme_color">Tally On Cloud</h4>
          <p>Tally on Cloud is a service that will take your offline Tally software on cloud. 
            You will be able to access your Tally data from anywhere and at anytime and from any device. 
            This cloud computing service will help you access your data from anywhere and at anytime taking your business to a new level of productivity.</p>
        </div>
        <div className="col-sm-3">
          <div className="icon"> <img src="/assets/home/laptop.png" alt="#" height="90px" width="90px"/> </div>
          <h4 className="theme_color">Laptop Repair</h4>
          <p>Is your laptop showing error messages, loading programs slowly, or shutting down unexpectedly?<br/>
            While there could be a number of reasons why this is happening, some of those reasons are more serious than others.</p>
        </div>
        <div className="col-sm-3">
          <div className="icon"> <img src="/assets/home/computer.png" alt="#" height="90px" width="90px"/> </div>
          <h4 className="theme_color">Computer Repair</h4>
          <p>Computer repair is the process of identifying, troubleshooting and resolving problems and issues in a faulty computer. 
            Computer repair is a broad field encompassing many tools, techniques and procedures used to repair computer hardware, software or network/Internet problems. 
            Computer repair is also known as PC repair.</p>
        </div>
        <div className="col-sm-3">
          <div className="icon"> <img src="/assets/home/printer.png" alt="#" height="90px" width="90px"/> </div>
          <h4 className="theme_color">Printer Repair</h4>
          <p>The Printer Technician is a professional who installs new printers, configure printers on network, maintain and ensures
             the proper function of standalone printers, scanners or Network Printers.
             The Printer Technician takes care of the regular and routine repairs including replacements such as new ink cartridges..</p>
        </div>
        <div className="col-sm-3">
          <div className="icon"> <img src="/assets/home/data.png" alt="#" height="90px" width="90px"/> </div>
          <h4 className="theme_color">Data Recovery</h4>
          <p>Data recovery is the process of restoring data that has been lost, accidentally deleted, corrupted or made inaccessible. 
            In enterprise IT, data recovery typically refers to the restoration of data to a desktop, laptop, server or external storage system from a backup.</p>
        </div>
        <div className="col-sm-3">
          <div className="icon"> <img src="/assets/home/network.png" alt="#" height="90px" width="90px"/> </div>
          <h4 className="theme_color">Network Solutions</h4>
          <p>Network Solutions offers everything you need to get online quickly. 
            From website development to optimization, social media, online advertising and more, we'll have your business online in no time.</p>
        </div>
        <div className="col-sm-3">
          <div className="icon"> <img src="/assets/home/cctv.png" alt="#" height="90px" width="90px"/> </div>
          <h4 className="theme_color">CCTV Solutions</h4>
          <p>CCTV, or closed-circuit television, is a system that allows you to keep an eye on what's going on in and around your business. 
            Cameras and monitors enable you to view events live, and recorders archive footage for later reference. 
            Don't mistake a CCTV monitor for an ordinary television.</p>
        </div>
        <div className="col-sm-3">
          <div className="icon"> <img src="/assets/home/biz-analyst.png" alt="#" height="90px" width="120px"/> </div>
          <h4 className="theme_color">BIZ Analyst</h4>
          <p>Install Biz Analyst App in your iOS or Android Mobile Set and access Tally data at anytime even if you are on the move. 
            Sync to your office data and view, mail and whatsapp any invoice, report or statement. 
            Great tool for owners and people on the field.</p>
        </div>
      </div>

      <div className="row featured-products">
        <h1>Our Featured Products</h1>
        { returnFeatProducts(props.product) }
      </div>
      <h2>Corporate</h2>
      <div className="row ceo">
        <div className="ceo-details col-9">
          <h2 className="col-3 offset-md-9">NazmuZma</h2>
          <div className="col-3 offset-md-9">CEO</div>
          <div className="col-3 offset-md-9">evwedwvweve euf hweiuf egfgf</div>
          <div className="col-3 offset-md-9">84yrh eurhoewefrwaoeh  r 3rrfhefhwoefh</div>
          <div className="col-3 offset-md-9">dfhbewfiwbfwebfewfbewf</div>
          <div className="col-3 offset-md-9">oefhwoefbwoebfowebfeofb</div>
        </div>
        <div className="col-3" ceo-photo>
          <img src="/assets/people/nazmu.jpeg" alt="CEO" width="100%"/>
        </div>
      </div>
    </div>
  );
}

export default Home;