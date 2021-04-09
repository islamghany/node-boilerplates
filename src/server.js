const express = require("express");
const connect = require("./services/db");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const userRoutes = require('./resouces/user/user.route')
require('dotenv').config({path:process.env.NODE_ENV+".env"});

// variables
const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ encoded: true }));
app.use(helmet());
app.use(morgan());


// routes
app.use('/api/user',userRoutes);


// handle Error 
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(res.status(404).json({message:"page not found"}));
});
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = process.env.NODE_ENV === "development" ? err : {};
  console.log(err);

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

const runServer = async () => { 
	try {
		await connect();
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (err) {
		console.error(err);
	}
};

module.exports = runServer;