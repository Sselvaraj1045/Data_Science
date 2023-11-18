



const UserSchema = Mongoose.Schema(
      {
        
            username: {
              type: "String",
              unique: true,
              required: true,
            },
            password: {
              type: "String",
              minlength: 6,
              required: true,
            },
            role: {
              type: "String",
              default: "Basic",
              required: true,
            },

         },
         
         {
            timestamps: true
          }
    )
  
    const Login = Mongoose.model('Login', UserSchema);

    module.exports = Login;




