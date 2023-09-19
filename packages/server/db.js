const mongoose = require("mongoose");

// Подключение к MongoDB
mongoose.connect('mongodb+srv://thefirstone.spi67la.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Обработка ошибок подключения
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Определение схемы и модели данных
const Schema = mongoose.Schema;

const yourSchema = new Schema({
  firstName: String, // Поле для хранения имени пользователя
  lastName: String,  // Поле для хранения фамилии пользователя
});

const YourModel = mongoose.model('YourModel', yourSchema);

