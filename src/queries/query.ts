export const query = {
  getWholeSalerDetails:
    'SELECT w.name AS wholeSalerName, w.mobileNumber AS wholeSalerMobileNumber,r.name AS retailerName, r.mobileNumber AS retailerMobileNumber FROM wholeSaler w LEFT JOIN stock s ON s.wholeSalerId = w.wholeSalerId LEFT JOIN retailer r ON r.retailerId = s.retailerId WHERE s.wholeSalerId = ? GROUP BY s.retailerId',
  getSingleWholeSaler:
    'SELECT COUNT(DISTINCT s.wholeSalerId) AS noOfWholeSaler, r.name AS retailerName, r.mobileNumber AS retailerMobileNumber,w.mobileNumber AS wholeSalerMobileNumber, w.name AS wholeSalerName FROM stock s LEFT JOIN wholeSaler w ON w.wholeSalerId = s.wholeSalerId LEFT JOIN retailer r ON r.retailerId = s.retailerId GROUP BY s.retailerId HAVING noOfWholeSaler = 1',
  getMonthlyTurnOver:
    'SELECT w.name AS wholeSalerName, SUM(s.stockAmount) AS stockAmount, s.date AS DATE FROM stock s LEFT JOIN wholeSaler w ON w.wholeSalerId = s.wholeSalerId GROUP BY s.wholeSalerId, MONTH(s.date)',
  getMaximumTurnOver:
    'SELECT w.name AS wholeSalerName, r.name AS retailerName, s.stockAmount AS maxTurnOver FROM stock s LEFT JOIN wholeSaler w ON w.wholeSalerId = s.wholeSalerId LEFT JOIN retailer r ON r.retailerId = s.retailerId WHERE stockAmount IN (SELECT MAX(stockAmount) FROM stock GROUP BY wholeSalerId)GROUP BY s.wholeSalerId',
};
