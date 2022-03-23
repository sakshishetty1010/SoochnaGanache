import Web3 from 'web3';
import * as ArticleContract from './contracts/Article.json';

const web3 = new Web3(window.web3.currentProvider);
const abi = ArticleContract.abi;
const address = '0x5Ec612101c2d4C89d57b9E84C6073e51e23c8F75';
const Article = new web3.eth.Contract(abi,address);
export {Article, web3}