-- -- Database: hr.backup

-- -- DROP DATABASE IF EXISTS "hr.backup";

-- CREATE DATABASE "hr.backup"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- Basic Select Statement
-- 1.
select * from employees
select (first_name, last_name)as First from employees;

-- 2.
select unique department_id from employees;

-- 3.
select * from employees 
order by first_name DESC;

-- 4.
select first_name,last_name,salary, salary *0.15 as PF 
from employees

-- 5.
select employee_id,first_name,last_name,salary 
from employees 
order by salary ASC;

-- 6.
select sum(salary) from employees;

-- 7.
select max(salary) from employees;
select min(salary) from employees;

-- 8.
select avg(salary) from employees;

-- 9.
select count(employees) from employees;

-- 10.
select UPPER(first_name) from employees;

-- 11.
select substring(first_name from 1 for 3) from employees;

-- 12.
select (first_name ||' '|| last_name) as Full_name from employees;

-- 13.
select first_name,last_name,length(first_name ||' '|| last_name) as full_name_lenght from employees;

-- 14.
select * from employees 
where first_name not similar to '%[0-9]%';

-- 15.
select * from employees limit 10;


-- Restricting And Sorting
-- 1.
select first_name,last_name,salary from employees 
where salary between '10000' and '15000';

-- 2.
select first_name,last_name,hire_date from employees
where hire_date between '01/01/1987' and '01/01/1988';

-- or
select first_name,last_name,hire_date from employees 
where extract(year from hire_date) = 1987;

-- 3.
select * from employees
where first_name ilike '%c%' and first_name ilike '%e%';

-- 4.
select * from employees
select * from departments
select * from jobs

select employees.last_name,jobs.job_title,employees.salary 
from employees
inner join jobs
on employees.job_id = jobs.job_id
where jobs.job_title not in ('Programmer', 'Shipping Clerk')
and employees.salary not in(4500, 10000, 15000); 

-- 5.
select last_name from employees
where length(last_name) = 6;


-- 6.
select last_name from employees
where substring(last_name, 3, 1) = 'e';

-- 7.
select *,jobs.job_title from employees
inner join jobs
on employees.job_id = jobs.job_id;

-- 8.
select * from employees
where upper(last_name) in ('JONES','BLAKE','SCOTT','KING','FORD');

