//Importing all the components built.
import Header from './components/Header';
import Footer from './components/Footer';
import PromotionBlock from './components/PromotionBlock';
import WhyGoPremium from './components/WhyGoPremium';
import Plans from './components/Plans';
//This function returns all the components in the order they appear on the spotify website.
//Additionally the page source is placed at the bottom and styled inline.
//Please note that responsive design was not implemented as on the original website.
function App() {
  return (
    <div className="App">
      <Header />
      <PromotionBlock />
      <WhyGoPremium />
      <Plans />
      <Footer />
      <div style={{color: "gray", backgroundColor: "#000", fontSize: "small", textAlign: "center", paddingBottom: "20px"}}>Page source: <a target="_blank" rel="noreferrer" style={{color: "gray"}} href="https://www.spotify.com/za-en/premium/?_ga=2.147215540.2032558220.1685630250-1260621619.1685630250&_gac=1.84027883.1685630400.CjwKCAjwg-GjBhBnEiwAMUvNWxRKK8BjeR3gvtRhWg_hbxOGwcqci1PYMfh-FOKD398puCoRR3PFSBoCn_4QAvD_BwE">CLICK HERE</a></div>
    </div>
  );
}

export default App;


// Here is the source to the original website.
// https://www.spotify.com/za-en/premium/?_ga=2.147215540.2032558220.1685630250-1260621619.1685630250&_gac=1.84027883.1685630400.CjwKCAjwg-GjBhBnEiwAMUvNWxRKK8BjeR3gvtRhWg_hbxOGwcqci1PYMfh-FOKD398puCoRR3PFSBoCn_4QAvD_BwE