import React from 'react';
import MainTitle from './MainTitle';
import AnimatedImages from './AnimatedImages';
import image1 from '../images/racq/image1.png';
import image2 from '../images/racq/image2.png';
import image3 from '../images/racq/image3.png';

const RacqProject = () => {
    return (
        <div style={container}>
            <MainTitle
                title="RACQ Inventory"
                subtitle="React • HTML • CSS • JavaScript • PHP"
                blurb="Stock and Inventory management for storing equipment"
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

export default RacqProject;