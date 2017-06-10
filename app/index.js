import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

let users = [

    {
        name:'Mirko',
        img: 'https://www.w3schools.com/css/img_fjords.jpg',
        alt: 'fjord'
    },
    {
        name:'Darko',
        img: 'https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/image.png',
        alt: 'birds'
    },
    {
        name:'Pera',
        img: 'http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
        alt: 'hongkong'
    },

];


class Name extends React.Component {
    render(){
        return(
            <div className="ja">
               {this.props.name}
            </div>
        )
    }
}

class AllTogether extends React.Component {
    render(){
        return(
            <div className="row">
                    <Name name={this.props.users.map(function (item) {
                        return <div className="col-sm-12 col-md-4" key={item.name}>
                            <div className="thumbnail">
                                <img
                                    src={item.img}
                                    className="img-responsive"
                                    alt={item.alt}
                                />
                                <div className="caption">
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        </div>
                    })}/>
            </div>
        )
    }
}

AllTogether.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    })),

};

ReactDom.render(
    <AllTogether users={users}/>,
    document.getElementById('app')
);

