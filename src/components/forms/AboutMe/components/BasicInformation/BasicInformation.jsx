// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './BasicInformation.scss';
import type { Props } from './type';
import BasicInformationItem from '../BasicInformationItem';

const BasicInformation = (props: Props) => {
  const { items } = props;
  return (
    <ul styleName="basic-info">
      {items.map(item => (
        <BasicInformationItem
          key={item.name}
          {...item}
        />
      ))}
    </ul>
  );
};

export default memo<Props>(CSSModules(BasicInformation, styles));
