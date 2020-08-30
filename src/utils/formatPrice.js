export default (value, locale, currency) => `${new Intl.NumberFormat(locale).format(value)}${currency}`;
