import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

import * as styles from './OrderDetailsPage.styles';

import { getOrderDetails } from '@/lib/OrderAPI';
import CustomButton from '@/components/common/custom-button/CustomButton';

export interface OrderItemDetails {
  flower_id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface OrderDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  delivery_instructions?: string;
  shipping_method: string;
  data_protection_accepted: boolean;
  newsletter_subscription: boolean;
  gift_message?: string;
  total_price: number;
  coupon_id?: number | null;
  created_at: string;
  items: OrderItemDetails[];
}

const OrderDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchOrder = async () => {
      try {
        const data = await getOrderDetails(Number(id));
        setOrder(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch order:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <Typography>Loading...</Typography>;
  if (!order) return <Typography>Order not found.</Typography>;
  const formattedDate = order?.created_at
    ? new Date(order.created_at.split('.')[0]).toLocaleString()
    : 'Loading...';
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Box sx={styles.listContainer}>
          <Typography variant="h3">Order Details</Typography>
          <Typography variant="body1">Order ID: {order.id}</Typography>
          <Typography variant="body1">Date: {formattedDate}</Typography>
          <Typography variant="body1">
            Customer: {order.first_name} {order.last_name}
          </Typography>
          <Typography variant="body1">Email: {order.email}</Typography>
          <Typography variant="body1">Phone: {order.phone}</Typography>
          <Typography variant="body1">Shipping Method: {order.shipping_method}</Typography>
          <Typography variant="body1">
            Delivery Instructions: {order.delivery_instructions || '-'}
          </Typography>
          <Typography variant="h4" mt={2}>
            Items:
          </Typography>
          {order.items.map((item, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Typography>
                {item.name || 'Item'} x {item.quantity} — €{item.price.toFixed(2)}
              </Typography>
            </Box>
          ))}
          <Typography variant="h4" mt={2}>
            Total Price: €{order.total_price.toFixed(2)}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.buttons}>
        <CustomButton size="small" title="Go Home" onClick={() => router.push('/')} />
        <CustomButton size="small" title="Go to Shop" onClick={() => router.push('/articles')} />
      </Box>
    </Box>
  );
};

export default OrderDetailsPage;
