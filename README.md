# New-project Todo

-  [x] Eslint

-  [x] dotenv-safe

-  [x] Create mongodb with "user" table

-  [x] Read about

- https://eslint.org/docs/rules/semi , https://eslint.org/docs/rules/comma-dangle

-  [x] Express-mug

-  [x] What is NODE_ENV?

-  [x] Bcrypt

-  [x] nodeEnv() --> isDevelopment()

-  [x] Moongose-bcrypt

-  [x] Return res.json(1001);--->return res.json({ code: 1001 })

-  [x] - Read & apply git workflow

-  [x] Use moongose-bycrypt

-  [x] fixs some mistakes from review:

    -    [x]  verifyToken vs verify_user in index.js

    -   [x] router2 ??? in index.js

   -  [x]  return null

   -   [x]  remove async in login_register.js

    -   [x]  remove pakage-lock.json

    -   [x]  'userModel' -> User in user.js

    -   [x] remove middleware checkEmail,checkPassword in login_register.js

   -   [x]  create more 1 middleware to check exist email or name

    -   [x]  update middleware express_mung
  
    -   [x]  update user.js add middleware existEmailOrName to method for creating user and updating user
    -   [x]   Reply question
    -   checkEmail và existEmailOrName là middleware 
     → có cần thiết ko? 
     existEmailOrName cần dùng lại trong update vào create user nên cần tạo middleware
     → có thể xử lý logic này bên trong handler của route ko?
     được.
  - middleware dùng để làm gì? 
  --> Khả năng tái sử dụng.
  --> Tiết kiệm thời gian.
  -->Tăng tính đồng nhất.
  --> Dễ hiểu, dễ bảo trì.
