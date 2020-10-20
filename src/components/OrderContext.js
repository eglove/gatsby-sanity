import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState('🐒');
  return <OrderContext.Provider>{children}</OrderContext.Provider>;
}

export default OrderContext;

OrderProvider.propTypes = {
  children: PropTypes.object,
};
