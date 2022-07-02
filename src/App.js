import './App.css';
import Footer from './compfile/Footer';
import NavBara from './compfile/Navbara';
import Header from './compfile/Header'

// import SpecialCategory from './compfile/SpecialCategory';
import ShopByCategory from './compfile/ShopByCategory';

import ProductsSlider from './compfile/SlideProduct';
import MegaDeals from './compfile/MegaDeals';
import ImageSlider from './compfile/Imageslider';
import BigCategories from './compfile/BigCategories'
import ShopNowSlider from './compfile/Imageslider';

function App() {
    let categories_1 = require('../src/json_Data/Main_Category.json');
    let categories_2 = require('../src/json_Data/Category_Shopby.json');
    let categories_4 = require('../src/json_Data/Heading.json');
    let recommendedProducts = require('../src/json_Data/Recommended.json');
    let LaptopProducts = require('../src/json_Data/Laptop_list.json');
    let TrendingProducts = require('../src/json_Data/Trending.json');
    let homeKitchen = require('../src/json_Data/Kitchen_accesories.json');

    return (
        <div className="home-layout">
            <Header/>
            <NavBara/>
            <div className="home-container">
                <ImageSlider />
                <ShopByCategory products={categories_1} />
                <h4 className="ml-3">Recommended for you</h4>
                <ProductsSlider data={recommendedProducts} />
                <MegaDeals />
                <h4 className="mt-5 ml-3">Trending Deals</h4>
                <ProductsSlider data={TrendingProducts} />
                <ShopNowSlider />
                
                <h4 className="mt-5 ml-3">Top Picks in Laptops</h4>
                <ProductsSlider data={LaptopProducts} />
                
                <h2 className="px-4 pt-2">Shop By Category</h2>
                <ShopByCategory products={categories_2} />
                
                <h4 className="my-4 ml-3">Top picks in home &amp; kitchen</h4>
                <ProductsSlider data={homeKitchen} />
                <BigCategories products={categories_4} />
            </div>
            <Footer />
        </div>
    )
}

export default App;
