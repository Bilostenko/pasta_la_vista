// components/CartDrawer.tsx
import React from 'react';
import { Drawer } from 'antd';
import './drawer.css';

interface CartDrawerProps {
  visible: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Cart"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
      width={400}
      className="custom-drawer"
    >
      <div className="drawer-divider"></div>
      <p>Your cart is currently empty! Go to the “menu” section and add the desired dishes.</p>
      {/* Тут відобразиш товари */}
    </Drawer>
  );
};

export default CartDrawer;
