var ImgLazyLoad = require('./imglazyload');

var IndexPage = React.createClass({
    render: function() {
        return (
            <div>
                <div style={{display: 'block'}}>
                  This is test image for lazy loading.
                </div>
                <ImgLazyLoad src="https://pixabay.com/static/uploads/photo/2016/09/14/19/49/sunset-1670219_960_720.jpg"/>
                <div style={{display: 'block', height: '300px'}}></div>
                <ImgLazyLoad src="https://pixabay.com/static/uploads/photo/2016/08/25/19/17/boot-1620452_960_720.jpg" alt="Image2"/>
                <div style={{display: 'block', height: '300px'}}></div>
                <ImgLazyLoad src="http://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg" loadImg="./img/loading1.gif"/>
                <div style={{display: 'block', height: '300px'}}></div>
                <ImgLazyLoad src="./image/showerror1.jpg"/>
                <div style={{display: 'block', height: '300px'}}></div>
                <ImgLazyLoad src="./image/showerror2.jpg" errImg="./img/error1.png" alt="ErrorImage2"/>
                <div style={{display: 'block', height: '300px'}}></div>
                <ImgLazyLoad src="https://pixabay.com/static/uploads/photo/2016/09/02/18/40/sandburg-1639999_960_720.jpg" errImg="./img/error1.png" loadImg="./img/loading1.gif" alt="Image6"/>
                <div style={{display: 'block', height: '300px'}}></div>
                <ImgLazyLoad src="http://images-assets.nasa.gov/image/ARC-2008-ACD08-0005-117/ARC-2008-ACD08-0005-117~orig.jpg" errImg="./img/error1.png" loadImg="./img/loading2.gif" alt="NASAImage2"/>
                <div style={{display: 'block', height: '300px'}}></div>
                <ImgLazyLoad src="http://images-assets.nasa.gov/image/S65-34635/S65-34635~orig.jpg" errImg="./img/error1.png" loadImg="./img/loading3.gif" alt="NASAImage3"/>
                <div style={{display: 'block', height: '300px'}}></div>
                <ImgLazyLoad src="./image/showerror1.jpg" errImg="./img/error1.png" loadImg="./img/loading4.gif" alt="ErrorImage2"/>
            </div>
        );
    }
});

ReactDOM.render(
    <IndexPage/>,
    document.getElementById('content')
);
