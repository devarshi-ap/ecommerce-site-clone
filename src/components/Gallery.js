import React from 'react';

function Gallery() {
    return (
        <div id="gallery-container">
            <div className="columns">
                <div className="column gallery-col">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/alfred/home-example-large-63880922a88a295fbbda178e6c4a42aa8b6c1e41fd9ed503cc7beaabf79c476d.jpg?quality=50" className="gallery-image" alt="stock"/>
                    <div className="gallery-caption">FOOD & DRINK<br />Alfred</div>
                </div>
                <div className="column gallery-col">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/corey-moranis/home-example-large-525c11c8cfc67fd7ddb01ae460ab41110dadb7b85662ff5d4878e38c6ccc07a2.jpg?quality=50" className="gallery-image" alt="stock"/>
                    <div className="gallery-caption">JEWELRY<br />Corey Moranis</div>
                </div>
                <div className="column gallery-col">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/detour-coffee/home-example-large-061ef1f91229c75314d1a930f469a761f4b6c36a8a112238144f153c76c6ee35.jpg?quality=50" className="gallery-image" alt="stock"/>
                    <div className="gallery-caption">FOOD & DRINK<br />Detour Coffee</div>
                </div>
                <div className="column gallery-col">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/then-i-met-you/home-example-large-03f2fb78766f6e554c1e95bbd58739bf28b4452b018365c90b0700efbe420e83.jpg?quality=50" className="gallery-image" alt="stock"/>
                    <div className="gallery-caption">BEAUTY & COSMETICS<br />Then I Met You</div>
                </div>
                <div className="column gallery-col">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/miss-boon/home-example-large-ad478b842593fe630b382892f5042b35c3faa1e169cb94d7366b1d4f9092929c.jpg?quality=50" className="gallery-image" alt="stock"/>
                    <div className="gallery-caption">HOME & GARDEN<br />Miss Boon</div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;