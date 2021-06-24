import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { withTranslation } from 'react-i18next';

const Title = ({ title, t }) => (
    <Helmet>
        <title>
            {`${title && `${title} — `}${t('app_title')} | Jose Rosendo Bienvenido`}
        </title>
    </Helmet>
);

Title.propTypes = {
    title: PropTypes.string.isRequired,
    t: PropTypes.func
};

export default withTranslation()(Title);