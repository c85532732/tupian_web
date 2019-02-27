"# tupian_web" 
sequelize-auto -h 127.0.0.1 -d tupian -u root -x root -p 3306 -o "./app/db/dbmodel" -c "./sequelize-auto.config"

sequelize-auto -h 127.0.0.1 -d tupian -u root -x root -p 3306 -o "./app/db/dbmodel" -c "./sequelize-auto.config" -t "info"