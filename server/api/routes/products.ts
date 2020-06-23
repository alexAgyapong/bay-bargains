import express from 'express';
import { environment } from '../../api-environment';
const eBay = require('ebay-node-api')

let ebay = new eBay({
  clientID: environment.appId,
  env: 'SANDBOX', // optional default = 'PRODUCTION'
  headers: { // optional
    'X-EBAY-C-MARKETPLACE-ID': 'EBAY_GB' // For Great Britain https://www.ebay.co.uk
  }
})

const productRouter = express.Router();

productRouter.get('/', (req, res, next) => {
  res.status(200).json({ data: 'test-data', id: 200 });
});

productRouter.get('/:id', (req, res, next) => {
  // Get Single item listing on eBay
  console.log('data here....');
  // ebay.getSingleItem('153265274986').then((data) => {
  //   console.log(data);
  // });
  // ebay.getVersion().then((data) => {
  //   console.log(data.version);
  //   res.status(200).json(data);
  // }, (error) => {
  //   console.log(error);
  // });
  ebay.findItemsAdvanced({
    entriesPerPage: 2,
    keywords: 'ipad',
    ExpeditedShippingType: 'OneDayShipping' //Filtering results with item filters see: https://developer.ebay.com/DevZone/finding/CallRef/findItemsAdvanced.html#Request.itemFilter
  }).then((data) => {
    res.status(200).json(data);
    console.log(data);
  }, (error) => {
    console.log(error);
  });
});

module.exports = productRouter;
