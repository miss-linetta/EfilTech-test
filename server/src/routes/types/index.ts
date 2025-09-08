export interface OrderData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    shipping_method: "DPD" | "DHL" | "DHL Express";
    data_protection_accepted: boolean;
    newsletter_subscription: boolean;
    delivery_instructions: string;
    gift_message?: string;
    total_price: number;
    coupon_id?: number;
}
