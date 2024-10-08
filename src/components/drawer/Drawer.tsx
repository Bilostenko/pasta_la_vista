import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'; 

const CartDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button 
        type="primary" 
        onClick={showDrawer} 
        icon={<ShoppingCartOutlined />}
      />
      <Drawer
        title="Корзина"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={400} // Ширина меню
      >
        {/* Тут можна відобразити список товарів */}
        <p>Товари у вашій корзині:</p>
        {/* Наприклад, вивести список замовлених товарів */}
      </Drawer>
    </>
  );
};

export default CartDrawer
