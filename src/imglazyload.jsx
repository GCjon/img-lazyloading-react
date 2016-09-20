var ERRORIMGSRC = "./img/img_LoadingErr.jpg";
var LOADIMGSRC = "./img/img_Loading.jpg";

var ImgLazyLoad = React.createClass({

    propTypes: {
        /*image url*/
        src: React.PropTypes.string.isRequired,
        /*image alt*/
        alt: React.PropTypes.string,
        /*error image*/
        errImg: React.PropTypes.string,
        /*loading image*/
        loadImg: React.PropTypes.string
    },

    getInitialState: function() {
        return {errored: false, isShow: false, isLoaded: false, src: ""};
    },

    componentDidMount: function() {
        //var that = this;
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleScroll);
        this.detectPosition();
    },

    componentWillUnmount: function() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleScroll);
    },

    render: function() {
        if (this.state.errored) {
            return <img style={{
                maxWidth: '100px',
                margin: '0 auto'
            }} src={this.getErrorImage()} alt={this.props.alt} title={this.props.alt}/>;
        } else {
            return <img style={this.state.isLoaded
                ? null
                : {
                    maxWidth: '100px',
                    margin: '0 auto'
                }} src={this.getImageSrc()} alt={this.props.alt} title={this.props.alt}/>;
        }
    },

    getImageSrc: function() {
        var imgSrc = LOADIMGSRC;
        if (typeof this.props.loadImg === "string"){
            imgSrc = this.props.loadImg;
        }
        if (this.state.src !== "") {
            imgSrc = this.state.src;
        }
        return imgSrc;
    },

    getErrorImage: function() {
        var errorSrc = ERRORIMGSRC;
        if (typeof this.props.errImg === "string") {
            errorSrc = this.props.errImg;
        }
        return errorSrc;
    },

    backgroundLoad: function() {
        var imageTemp = new Image();
        imageTemp.onload = this.handleLoad;
        imageTemp.onerror = this.handleError;
        imageTemp.src = this.props.src;
    },

    handleError: function(event) {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleScroll);
        if (typeof this._reactInternalInstance === 'undefined') {
            return;
        }
        this.setState({errored: true});
    },

    handleLoad: function(event) {
        if (typeof this._reactInternalInstance === 'undefined') {
            return;
        }
        this.setState({isLoaded: true, src: this.props.src});
    },

    detectPosition: function() {
        if (typeof this._reactInternalInstance === 'undefined') {
            return;
        }
        var node = ReactDOM.findDOMNode(this);
        var img = node.getBoundingClientRect();
        var top = img.top;
        var height = img.height;

        var innerHeight = window.innerHeight;
        if ((0 <= (top + height) && top <= (innerHeight))) {
            window.removeEventListener("scroll", this.handleScroll);
            window.removeEventListener("resize", this.handleScroll);
            this.setState({isShow: true});
            this.backgroundLoad();
        }
    },

    handleScroll: function() {
        if (this.state.isShow) {
            return;
        }
        this.detectPosition();
    }
});

module.exports = ImgLazyLoad;
