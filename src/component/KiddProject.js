import React from 'react';
import MainTitle from './MainTitle';
import AnimatedImages from './AnimatedImages';
import image1 from '../images/kidd/image1.png';
import image2 from '../images/kidd/image2.png';
import image3 from '../images/kidd/image3.png';

const KiddProject = () => {
    return (
        <div style={container}>
            <MainTitle
                title="KIDD Contracting"
                subtitle="React • HTML • CSS  • PHP"
                blurb="Resource and Task management application for civil contractors"
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

export default KiddProject;