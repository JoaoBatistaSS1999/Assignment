Todo:

#save the wallet address on localStorage and fetch it in the context;

#avoid the login notification when the user cancel the metamask connection request;

#give an option to the users see the nfts of a test wallet if they dont have any (same for tokens if possible);

##Concepts I"ve learned##

1- How to type window.ethereum to check if the user have metamask installed:

WITH ETHERS.JS
npm i @metamask/providers

interface Window {
ethereum?: import('ethers').providers.ExternalProvider;
}

WITHOUT ETHERS.JS
type ExternalProvider = {
isMetaMask?: boolean;
isStatus?: boolean;
host?: string;
path?: string;
sendAsync?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
send?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
request?: (request: { method: string, params?: Array<any> }) => Promise<any>
}

interface Window {
ethereum?: ExternalProvider;
}

They both do exatly the same thing, but the first import the interface from ethers library.
