import mysql from 'mysql'

export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'blog'
})

db.connect((error) => {
    if (error) {
        console.error('Error connecting to database:', error);
        return;
    }
    console.log('Connected to the database');
});