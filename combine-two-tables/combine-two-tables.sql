# Write your MySQL query statement below
SELECT firstName, lastname, city, state
FROM Person LEFT OUTER JOIN Address
ON Person.personId = Address.personId