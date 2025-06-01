CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
    RETURN (
        /* Write your T-SQL query statement below. */
        select 
            case 
                when @N < 1 then null
                else (
                    select distinct salary 
                    from employee 
                    order by salary desc 
                    offset case when @N > 0 then @N - 1 else 0 end rows fetch next 1 rows only
                )
            end
    );
END