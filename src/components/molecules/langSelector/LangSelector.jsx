import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import SelectInput from 'components/atoms/inputs/SelectInput';

const LangSelector = ({t, i18n}) => {
    const handleChangeLanguage = ({target}) => {
        i18n.changeLanguage(target.value);
    };

    const availableLanguages = Object.keys(i18n.services.resourceStore.data);

    return (
        <SelectInput
            isDark
            value={`${i18n.language}`}
            label={t('language')}
            onChange={handleChangeLanguage}
            options={availableLanguages}
        />
    );
};

LangSelector.propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.objectOf(PropTypes.any),
};

export default withTranslation()(LangSelector);
