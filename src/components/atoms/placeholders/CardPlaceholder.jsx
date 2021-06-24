import React from 'react';
import ContentLoader from 'react-content-loader';

const CardPlaceholder = ({...props}) => (
    <ContentLoader 
        speed={2}
        width='100%'
        height='100%'
        backgroundColor='#F2F3F9'
        foregroundColor='#E1E4EC'
        {...props}
    >
        <rect x='0' y='0' width='100%' height='100%' />
    </ContentLoader>
);

export default CardPlaceholder;
