import express from 'express';
const productRouter = express.Router();

productRouter.get('/', (req, res, next) => {
  res.status(200).json({ data: 'test-data', id: 200 });
});

module.exports = productRouter;
