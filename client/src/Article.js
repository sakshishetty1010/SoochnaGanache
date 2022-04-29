import Web3 from 'web3';
import * as ArticleContract from './contracts/Article.json';

const web3 = new Web3(window.web3.currentProvider);
const abi = ArticleContract.abi;
const address = '0x861945BBe11AC1109e3C782c457Fb36A36553dF8';
const Article = new web3.eth.Contract(abi,address);
export {Article, web3}