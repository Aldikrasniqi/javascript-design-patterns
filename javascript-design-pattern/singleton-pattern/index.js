// singleton pattern is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
class DBConnection {
    constructor(uri) {
      if (DBConnection.instanceCreated) {
        console.log('Returning existing instance');
        return DBConnection.instance;
      }
  
      this.uri = uri;
      this.connect = () => console.log(`DB ${uri} has been connected!`);
      this.disconnect = () => console.log('DB disconnected');
  
      DBConnection.instance = this;
      DBConnection.instanceCreated = true;
      Object.freeze(this);
  
      console.log('New instance created');
      return this;
    }
  }
  
  const connection = new DBConnection('mongodb://localhost:27017/test');
  const connection2 = new DBConnection('mongodb://localhost:27017/test');
  
  connection.connect();  // This should log the connection message
  connection2.connect(); // This should not log the connection message
  
  console.log(connection === connection2); // This should be true because we are returning the same instance