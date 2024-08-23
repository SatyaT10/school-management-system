var createError = require('http-errors');
var express = require('express');
var app = express();

const sequelize = require('./db.config');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync(); // This will create the table if it doesn't exist (use { force: true } to drop and recreate the table)
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const schoolManagementRoute=require('./routes/SchoolManageRouter');



app.use('/api/school',schoolManagementRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});








app.listen(8001, () => console.log("Server is Listening on port 8080 !"))

module.exports = app;
