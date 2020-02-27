const dbCon = require("../../config/database");

module.exports={
    create: (data, callBack) => {
        dbCon.query(
            `insert into registration (firstname, lastname, gender, email, password, number)
            values (
                ?,?,?,?,?,?
            );`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getUsers: (callBack) => {
        dbCon.query(`select * from registration`,
        [],
        (err, results, fields)=> {
            if(err) {
                return callBack(err);
            }
            return callBack(null, results);
        })
    },
    getUserByUserId: (id, callBack) => {
        dbCon.query(
            `select * from registration where id = ?`,
            [id],
            (err, results, fields) => {
                if(err) {
                    return callBack(err);
                }
                return callBack(null, results);
            }
        );
    },
    updateUser: (data, callBack) => {
        dbCon.query(
            `Update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id =?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (err, results, fields)=> {
                if(err){
                    return callBack(err);
                }
                return callBack(null, results);
            }
        )
    },
    deleteUser: (data, callBack) => {
        dbCon.query(
            `delete from registration where id=?`,
            [data.id],
            (err, results, fields) => {
                if(err){
                    return callBack(err);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        dbCon.query(
            `select * from registration where email = ?`,
            [email],
            (err, results, fields) => {
                if(err) {
                    return callBack(err);
                }
                return callBack(null, results[0]);
            }
        );
    },
}