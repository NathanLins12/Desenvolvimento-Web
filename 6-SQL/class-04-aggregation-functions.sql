SELECT * FROM orders ORDER BY pais DESC;

SELECT DISTINCT pais FROM orders ORDER BY pais;
SELECT DISTINCT segmento FROM orders ORDER BY segmento;

SELECT * FROM orders WHERE pais LIKE '%a';
SELECT * FROM orders WHERE pais LIKE '%ar%';
SELECT * FROM orders WHERE regiao LIKE '_ar%';

SELECT * FROM orders WHERE pais IN ('Brazil', 'Argentina');

SELECT * FROM orders WHERE total_vendas BETWEEN 1000 AND 2000;

SELECT COUNT(*) AS QTD,
 ROUND(SUM(total_vendas), 4),
 MIN(total_vendas),
 MAX(total_vendas),
 AVG(total_vendas)
 FROM orders
 WHERE pais = 'Brazil';

SELECT pais, ROUND(SUM(total_vendas)) AS Total
FROM orders
GROUP BY pais
ORDER BY Total DESC LIMIT 10;

SELECT id_pedido, COUNT(id_pedido) FROM orders GROUP BY id_pedido;

SELECT * FROM orders WHERE id_pedido = 'AE-2011-9160';