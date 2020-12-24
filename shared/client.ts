import Client from 'shopify-buy'
import { token, url } from 'api';


export const client = Client.buildClient({
	storefrontAccessToken: token,
	domain: url,
});