import CheckoutUI from "./components/CheckoutUI";
import { Container } from "@agenciam3/pkg";

const m3Checkout = new Container({
    appName: "m3-checkout",
    components: [CheckoutUI],
});

m3Checkout.start();
