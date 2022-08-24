import React from 'react';
import MainTitle from './MainTitle';
import AnimatedImages from './AnimatedImages';
import image1 from '../images/bader/image1.png';
import image2 from '../images/bader/image2.png';
import image3 from '../images/bader/image3.png';

const BaderProject = () => {
    return (
        <div style={container}>
            <MainTitle
                title="Bader School"
                subtitle="Wordpress CMS • HTML • CSS • JavaScript • PHP"
                blurb="Sir Douglas Bader intermediate school website"
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

export default BaderProject;