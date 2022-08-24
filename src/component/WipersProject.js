import React from 'react';
import MainTitle from './MainTitle';
import AnimatedImages from './AnimatedImages';
import image1 from '../images/wipers/image1.png';
import image2 from '../images/wipers/image2.png';
import image3 from '../images/wipers/image3.png';

const WipersProject = () => {

    return (
        <div style={container} >


            <MainTitle
                title="Wipers2U"
                subtitle="Wordpress CMS • HTML • CSS • JavaScript • PHP"
                blurb="Ecommerce website for selling quality wiper blades"
            />
            <AnimatedImages
                leftImage={image1}
                middleImage={image2}
                rightImage={image3}
            />


        </div>
    );
}

const container = {
    display: 'flex',
    width: '100%',
    minHeight: '100%',
    justifyContent: 'space-between',
    paddingLeft: '6%',
    boxSizing: 'border-box',
    flexDirection: 'column'
}

export default WipersProject;