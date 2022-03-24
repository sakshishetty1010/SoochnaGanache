import Web3 from 'web3';
import * as ArticleContract from './contracts/Article.json';

const web3 = new Web3(window.web3.currentProvider);
const abi = ArticleContract.abi;
const address = '0x7124DD0F9E6bf8dDcF98960EC2f5A9fbe613c3A5';
const Article = new web3.eth.Contract(abi,address);
export {Article, web3}