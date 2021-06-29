# New-project Todo
## TODO
-  [ ] Đề xuất Todo tiếp theo. 
   -  [ ] Tìm hiểu về bảo mật bằng token? có an toàn không ? đề xuất cách để nó an toàn hơn?  
-  [ ] Review code line by line thấy chỗ nào ko hợp lý --> sửa cho nó hợp lý, đặt câu hỏi code này 6 tháng ,nữa mình đọc có hiểu được không chỗ này, code ghi như thế nào ,bản chất của xử lý là thế nào  
-  [ ] Git workflow là gì , sử dụng nó như thế nào, có công cụ nào thay thế, nó hoạt động thế nào?
-  [ ] Moongose-bycrypt là gì, sử dụng như thế nào, có công cụ nào thay thế, nó chạy như thế nào?
-  [ ] NODE_ENV là gì, tại sao?, sử dụng nó như thế nào, có công cụ nào thay thế không , nó chạy như thế nào?
-  [ ] Middleware dùng để làm gì?
-  [ ] Đồng nhất arrow funtion
-  [ ] Remove file package-lock.json
-  [ ] Chuyển data→ MONGODB_NAME,Chuyển cluster0.xbdzw.mongodb.net -> MONGODB_HOST trong file .env và .env.example
## DONE
-  [x] Sửa một số lỗi review từ PM. 
   -  [x] Về dòng 9 trong file index.js (verifyToken vs verify_user) đã sửa verify_user thành verify_token
   -  [x] Về dòng 10 trong file index.js (router2 ??? in index.js) đã sửa thành publicRouters
   -  [x] Về return null trong các file login_register.js và verify_token đã xóa return null và sửa file eslintrc.js thêm 'consistent-return': 'off' để không bị báo lỗi
   -  [x] Xóa async trong dong 42 của file login_register vì không cần async ở đây
   -  [x] Remove file pakage-lock.json vì không cần thiết
   -  [x] Sửa 'userModel' -> User ở dòng 19 file models/user.js
   -  [x] Remove middleware checkEmail,checkPassword in file login_register.js chuyển vào handler của post('/login')   
   -  [x] Tạo more 1 middleware để kiểm tra tồn tại email hoặc name đó hay chưa chưa exist_email_name sử dụng nó trong /api/user.js vào phương thức create user và update user
   -  [x] Update middleware express_mung thêm vào ret_code và ext_code 
   -  [x] Reply question     
      - CheckEmail và existEmailOrName là middleware có cần thiết ko? 
      - existEmailOrName thì cần thiết được dùng lại cho phương thức create và update trong file api/user.js, checkEmail thì không vì không được sử dụng lại
      - Middleware dùng để làm gì? 
      - Dùng để tái sử dụng, tiết kiệm thời gian, tăng tính đồng nhất, giúp dễ hiểu, dễ bảo trì.
-  [x] Tìm hiểu về cách sử dụng Eslint và áp dụng vào dự án
-  [x] Tìm hiểu về cách sử dụng dotenv-safe và áp dụng vào dự án
-  [x] Tạo một schema với User với name,email,pasword, Tạo các method post,get, get 1 item, put, delete
-  [x] Tìm hiểu về semi và comma-dangle trong Eslint và áp dụng vào dự án
-  [x] Thêm thư viện express-mung để chỉnh sửa đầu ra output
-  [x] Tìm hiểu về cách sử dung NODE_ENV và áp dụng vào dự án
-  [x] Tìm hiểu về Bcrypt , So sánh với nó với encode và decode
-  [x] Sửa function từ nodeEnv() thành isDevelopment() trong file eslintrc.js 
-  [x] Tìm hiểu về cách sử dụng Moongose-bcrypt và áp dụng vào dự án
-  [x] Chỉnh sửa Return res.json(1001) thành return res.json({ code: 1001 })
-  [x] Tìm hiểu về git workflow và áp dụng vào dự án

