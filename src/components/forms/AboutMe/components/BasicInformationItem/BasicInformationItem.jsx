// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './BasicInformationItem.scss';
import type { Props } from './type';

const BasicInformationItem = (props: Props) => {
  const { iconClassName, name, value } = props;
  return (
    <li
      key={name}
      styleName="basic-info-item"
    >
      <i
        styleName="icon"
        className={iconClassName}
      />
      <div styleName="text">
        <span>{name}:</span>
        <span>&nbsp;{value}</span>
      </div>
    </li>
  );
};

export default memo<Props>(CSSModules(BasicInformationItem, styles));
